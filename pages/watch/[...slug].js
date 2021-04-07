import React, { useEffect, useState } from "react";
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

const watch = (props) => {
  const router = useRouter();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (!props.allowUser) {
      router.push("/sign-up");
    } else {
      let cId = props.data.Video.VideoEntityId
        ? props.data.Video.VideoEntityId
        : "";
      let cName = props.data.Video.VideoName ? props.data.Video.VideoName : "";
      let body = {
        event: "view",
        contentId: cId,
        contentName: cName,
      };
      actionsRequestContent(body);
    }
  }, [props.allowUser, url]);

  return (
    <div>
      <Head>{/* <title>{props && props.data.VideoName}</title> */}</Head>
      {props.allowUser && <Player movies={props.data} />}
    </div>
  );
};

export async function getServerSideProps(context) {
  const chanelDetail = manipulateUrls(context.query);
  const cookies = Cookie.parseCookies(context.req);
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  console.log("Cookies ", cookies['content-token']);
  let allowUser = true;
  let body = {
    Version: "V2",
    Language: "en",
    Platform: "web",
    ChannelOrVODId: chanelDetail.CleanVideoId,
    UserId: cookies.userId ? cookies.userId : "0",
    IsChannel: chanelDetail.isChannel,
    headers: GlobalService.authHeaders(cookies['content-token'])
  };

  var isFree = "1";
  isFree = chanelDetail.isFree;

  if (isFree == "1") {
    const res = await PlayerService.getVideoData(body, ip);
    if (res != null) {
      return {
        props: response(res.data, chanelDetail, allowUser),
      };
    }
  } else {
    if (isAuthentictedServerSide(context.req)) {
      const res = await PlayerService.getVideoData(body, ip);
      if (res && res.responseCode == 5) {
        // expired subscription
        return {
          props: response(res.data, chanelDetail, false),
        };
      } else {
        // authenticated
        return {
          props: response(res.data, chanelDetail, true),
        };
      }
    } else {
      // not logged in
      return {
        props: response(null, chanelDetail, false),
      };
    }
  }
}

export default watch;

const response = (data, channel, allowUser) => {
  return {
    data,
    channel,
    allowUser,
  };
};
