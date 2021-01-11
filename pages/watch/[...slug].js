import { useRouter } from "next/router";
import Player from "../../modules/single-movie/components/Player";
import React from "react";
import { post } from "../../services/http-service";
import { manipulateUrls } from "../../services/utils";

export default function watch(props) {
  console.log("Props in player: ",props);
  const router = useRouter();
  const [singleMovie, setSingleMovie] = React.useState({});

  // async function getSingleMovie(query) {
  //   if (query && query.slug) {
  //     const chanelDetail = manipulateUrls(query);

  //     const result = await post(
  //       "https://api.tapmad.com/api/getEventPredicationGameChannel",
  //       {
  //         Version: "V2",
  //         Language: "en",
  //         Platform: "web",
  //         ChannelOrVODId: chanelDetail.OriginalMovieId,
  //         UserId: "0",
  //         IsChannel: chanelDetail.isChannel,
  //       }
  //     );
  //     return result;
  //   }
  // }

   
  React.useEffect(async () => {
    // let movieData = await getSingleMovie(router.query);
    if (props) {
      setSingleMovie(props.data);
    }
  }, [router.query]);

  return (
    <div>
      <Player movie={singleMovie} />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log("Conetext: ",context);
  const chanelDetail = manipulateUrls(context.query);

  const res = await post(`https://api.tapmad.com/api/getEventPredicationGameChannel`,{
    Version: "V2",
    Language: "en",
    Platform: "web",
    ChannelOrVODId: chanelDetail.OriginalMovieId,
    UserId: "0",
    IsChannel: chanelDetail.isChannel,

  })


  // Pass data to the page via props
  return { props: { data : res.data } }
}

