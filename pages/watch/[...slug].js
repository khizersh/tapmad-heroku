import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { actionsRequestContent } from "../../services/http-service";
import { Cookie } from "../../services/cookies";
import {
  manipulateUrls,
  isAuthentictedUser,
  isAuthentictedServerSide,
} from "../../services/utils";
import { useRouter } from "next/router";
import requestIp from "request-ip";

import { PlayerService } from "../../modules/single-movie/Player.service";
import Player from "../../modules/single-movie/components/Player";
import { GlobalService } from "../../modules/global-service";
import swal from "sweetalert";
import { MainContext } from "../../contexts/MainContext";
import {
  getSEOData,
  getSEODataForLiveChannel,
} from "../../services/seo.service";
import isGoogle from "../../services/google-dns-lookup";
import { SignUpContext } from "../../contexts/auth/SignUpContext";

const watch = (props) => {
  const router = useRouter();
  const { setisAuthenticateFalse } = useContext(MainContext);
  const { SignUpState } = useContext(SignUpContext);
  const [url, setUrl] = useState(null);
  var renderPlayer = shouldRenderPlayer(props);

  // for not login user check content package and sent to respective package on sign-up page
  useEffect(() => {
    if (!props.allowUser) {
      if (props.data != null) {
        router.push(
          `/sign-up?tab=${props.data.Video.PaymentTabId}&packageId=${props.data.Video.PackageId}`
        );
      } else {
        router.push("/sign-up?tab=1&packageId=2");
      }
    }
  }, [props.allowUser, url]);

  // for login user check content package and sent to respective package on change-package page
  useEffect(() => {
    if (props.allowUser) {
      if (props.data && props.data.responseCode === 401) {
        swal({
          text: props.data.message,
          timer: 3000,
          icon: "error",
        }).then((res) => {
          swal({
            title: "You have logged out!",
            text: "Redirecting you in 2s...",
            timer: 1900,
            icon: "success",
            buttons: false,
          }).then((res) => {
            Cookie.setCookies("isAuth", 0);
            setisAuthenticateFalse();
            router.push("/");
          });
        });
      } else if (props.data && props.data.responseCode === 8) {
        swal({
          text: props.data.message,
          timer: 3000,
          icon: "error",
        }).then((res) => {
          router.push("/subscribe-to-epl?subspack=epl");
        });
      } else if (props.data && props.data.responseCode === 110) {
        swal({
          title:
            "This content is not available on your current package, to upgrade your package press Upgrade",
          icon: "warning",
          buttons: ["Cancel", "Upgrade"],
          dangerMode: false,
        }).then((accepted, cancel) => {
          if (accepted) {
            router.push(
              `/change-package?tab=${props.data.Video.PaymentTabId}&packageId=${props.data.Video.PackageId}`
            );
          } else {
            router.push("/");
          }
        });
      }
    }
  }, [url]);

  function shouldRenderPlayer() {
    if (props.data && props.data.responseCode == 8) {
      return false;
    } else if (props.data && props.data.responseCode == 401) {
      return false;
    } else if (props.data && props.data.responseCode == 110) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div>
      <Head>
        <style>
          {`
            @media screen and (max-width: 799px) {
              #footer {
                display: none
              }
            }
          `}
        </style>
        <title>{props.schema.metaData[0].title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.schema.metaData[0].title} />
        <meta
          property="og:description"
          content={props.schema.metaData[0].description}
        />
        <meta
          name="description"
          content={props.schema.metaData[0].description}
        />
        <meta
          property="og:image"
          content={props.schema.metaData[0].image.url}
        />
        <meta property="og:url" content={props.schema.url} />
        <link rel="canonical" href={props.schema.url} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              props.schema.Channels
                ? props.schema.Channels[0]
                : props.schema.Vod[0]
            ),
          }}
        />
      </Head>
      {props.allowUser && props.data && renderPlayer && (
        <Player movies={props.data} />
      )}
      {props.data && props.data.responseCode == 401 && <></>}
    </div>
  );
};

// server side rendering
export async function getServerSideProps(context) {
  const chanelDetail = manipulateUrls(context.query);
  const cookies = Cookie.parseCookies(context.req);
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  try {
    const isGoogleDNS = await isGoogle(ip);
    if (isGoogleDNS == true) {
      ip = "39.44.217.70";
    }
  } catch (err) {
    console.log(err);
  }
  let allowUser = true;
  let body = {
    Version: "V1",
    Language: "en",
    Platform: "web",
    ChannelOrVODId: chanelDetail.CleanVideoId,
    UserId: cookies.userId ? cookies.userId : "0",
    IsChannel: chanelDetail.isChannel,
    headers: GlobalService.authHeaders(cookies["content-token"]),
  };
  var isFree = "1";
  isFree = chanelDetail.isFree;
  if (chanelDetail.isChannel == "1") {
    var seo = await getSEODataForLiveChannel(
      chanelDetail.CleanVideoId,
      context.resolvedUrl
    );
  } else {
    var seo = await getSEOData(chanelDetail.CleanVideoId, context.resolvedUrl);
  }
  if (isFree == "1") {
    const res = await PlayerService.getVideoData(body, ip);
    if (res != null) {
      if (res.responseCode != 401) {
        return {
          props: response(res.data, chanelDetail, allowUser, seo),
        };
      } else {
        return { props: response(res.data, chanelDetail, true, seo) };
      }
    }
  } else {
    const res = await PlayerService.getVideoData(body, ip);
    if (isAuthentictedServerSide(context.req)) {
      if (res && res.responseCode == 5) {
        // expired subscription
        return {
          props: response(res.data, chanelDetail, false, seo),
        };
      } else if (res && res.responseCode == 401) {
        // logging out
        return {
          props: response(res.data, chanelDetail, true, seo),
        };
      } else if (res && res.responseCode == 110) {
        // send to change package screen with auto package selected
        return {
          props: response(res.data, chanelDetail, true, seo),
        };
      } else {
        // authenticated
        return {
          props: response(res.data, chanelDetail, true, seo),
        };
      }
    } else {
      // not logged in and redirect to subscription page
      return {
        props: response(res.data, chanelDetail, false, seo),
      };
    }
  }
}

export default watch;

const response = (data, channel, allowUser, seo) => {
  return {
    data,
    channel,
    allowUser,
    schema: seo,
    env: process.env.TAPENV,
  };
};
