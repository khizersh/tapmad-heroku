import React, { useEffect, useContext } from "react";
import Player from "../../modules/single-movie/components/Player";
import { post } from "../../services/http-service";
import { Cookie } from "../../services/cookies";
import { isAuthentictedUser, manipulateUrls } from "../../services/utils";
import { useRouter } from "next/router";
import { MainContext } from "../../contexts/MainContext";
import { PlayerService } from "../../modules/single-movie/Player.service";

const watch = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!props.allowUser) {
      router.push("/sign-up");
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
