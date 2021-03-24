import React, { useEffect, useContext } from "react";
import Player from "../../modules/single-movie/components/Player";
import { actionsRequestContent } from "../../services/http-service";
import { Cookie } from "../../services/cookies";
import { manipulateUrls } from "../../services/utils";
import { useRouter } from "next/router";

import { PlayerService } from "../../modules/single-movie/Player.service";

const watch = (props) => {
  const router = useRouter();
  // const

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
  }, [props.allowUser]);

  return (
    <div>
      <Player movies={props.data} />{" "}
    </div>
  );
};

export async function getServerSideProps(context) {
  const chanelDetail = manipulateUrls(context.query);
  const cookies = Cookie.parseCookies(context.req);
  let allowUser = true;
  let body = {
    Version: "V2",
    Language: "en",
    Platform: "web",
    ChannelOrVODId: chanelDetail.OriginalMovieId,
    UserId: cookies.userId ? cookies.userId : "0",
    IsChannel: chanelDetail.isChannel,
  };
  console.log(body);
  const res = await PlayerService.getVideoData(body);
  if (res != null) {
    if (res.data && res.data.Video) {
      if (res.data.Video.IsVideoFree == false) {
        if (cookies.isAuth && cookies.isAuth == 1) {
          if (cookies.userId) {
            allowUser = true;
          } else {
            allowUser = false;
          }
        } else {
          allowUser = false;
        }
      }
    }
  }

  return {
    props: {
      data: res.data,
      ...chanelDetail,
      allowUser: allowUser,
    },
  };
}

export default watch;
