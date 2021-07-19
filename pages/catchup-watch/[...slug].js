import React, { useEffect, useState, useContext } from "react";
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
import CatchupPlayer from "../../modules/catchup/CatchupPlayer";
import { CatchupContext } from "../../contexts/CatchupContext";

const watch = (props) => {
  const router = useRouter();
  const { catchupState } = useContext(CatchupContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (!props.allowUser) {
      router.push("/sign-up");
    } else {
      if (catchupState && catchupState.relatedContent.length) {
        setRelated(catchupState.relatedContent);
      }

      let cId = props.video.VideoEntityId ? props.video.VideoEntityId : "";
      let cName = props.video.VideoName ? props.video.VideoName : "";
      let body = {
        event: "view",
        contentId: cId,
        contentName: cName,
      };
      actionsRequestContent(body);
    }
  }, [props.allowUser]);

  return (
    <div>
      {props.allowUser && props.video && (
        <CatchupPlayer video={props.video} videoList={related} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const chanelDetail = manipulateUrls(context.query);
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }

  let allowUser = true;

  var isFree = "1";
  isFree = chanelDetail.isFree;

  if (isFree == "1") {
    const res = await CatchupService.getCatchupVideo(
      chanelDetail.CleanVideoId,
      ip
    );

    if (res != null) {
      return {
        props: response(res.data, chanelDetail, allowUser),
      };
    }
  } else {
    if (isAuthentictedServerSide(context.req)) {
      const res = await CatchupService.getCatchupVideo(
        chanelDetail.CleanVideoId,
        ip
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
        props: response(null, null, chanelDetail, false),
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
    env: process.env.TAPENV
  };
};
