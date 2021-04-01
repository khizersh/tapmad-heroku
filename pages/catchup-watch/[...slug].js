import React, { useEffect, useState } from "react";
import { actionsRequestContent } from "../../services/http-service";
import { Cookie } from "../../services/cookies";
import {
  manipulateUrls,
  isAuthentictedUser,
  isAuthentictedServerSide,
} from "../../services/utils";
import { useRouter } from "next/router";
import requestIp from "request-ip";
import { CatchupService } from "../../modules/catchup/catchup.service";
import CatchupPlayer from "../../modules/catchup/CatchupPlayer"

const watch = (props) => {
  console.log("props: ", props);
  const router = useRouter();

    useEffect(() => {
      if (!props.allowUser) {
        router.push("/sign-up");
      } else {
        let cId = props.video.VideoEntityId
          ? props.video.VideoEntityId
          : "";
        let cName = props.video.VideoName ? props.video.VideoName : "";
        let body = {
          event: "view",
          contentId: cId,
          contentName: cName,
        };
        actionsRequestContent(body);
      }
    }, [props.allowUser]);

  return <div>
      {props.allowUser && <CatchupPlayer video={props.video} videoList={props.videoList} />}
    </div>;
};

export async function getServerSideProps(context) {
  const chanelDetail = manipulateUrls(context.query);
  const cookies = Cookie.parseCookies(context.req);
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }

  let allowUser = true;
//   let body = {
//     Version: "V2",
//     Language: "en",
//     Platform: "web",
//     ChannelOrVODId: chanelDetail.CleanVideoId,
//     UserId: cookies.userId ? cookies.userId : "0",
//     IsChannel: chanelDetail.isChannel,
//   };

  var isFree = "1";
  isFree = chanelDetail.isFree;

  if (isFree == "1") {
    const res = await CatchupService.getCatchupVideo(chanelDetail.CleanVideoId);

    if (res != null) {
      return {
        props: response(res.data, chanelDetail, allowUser),
      };
    }
  } else {
    if (isAuthentictedServerSide(context.req)) {
      const res = await CatchupService.getCatchupVideo(
        chanelDetail.CleanVideoId
      );
      if (res && res.responseCode == 5) {
        // expired subscription
        return {
          props: response(res.data.Video, res.data.Videos, chanelDetail, false),
        };
      } else {
        // authenticated
        return {
          props: response(res.data.Video, res.data.Videos, chanelDetail, true),
        };
      }
    } else {
      // not logged in
      return {
        props: response(null,null, chanelDetail, false),
      };
    }
  }

}

export default watch;

const response = (video, videoList, channel, allowUser) => {
  return {
    video,
    videoList,
    channel,
    allowUser,
  };
};
