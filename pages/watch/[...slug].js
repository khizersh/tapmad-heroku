import Player from "../../modules/single-movie/components/Player";
import React from "react";
import { post } from "../../services/http-service";
import { manipulateUrls } from "../../services/utils";

export default function watch(props) {
  return (
    <div>
      <Player movies={props.data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const chanelDetail = manipulateUrls(context.query);

  const res = await post(
    `https://api.tapmad.com/api/getEventPredicationGameChannel`,
    {
      Version: "V2",
      Language: "en",
      Platform: "web",
      ChannelOrVODId: chanelDetail.OriginalMovieId,
      UserId: "0",
      IsChannel: chanelDetail.isChannel,
    }
  );

  return { props: { data: res.data, ...chanelDetail } };
}
