import { useRouter } from "next/router";
import Player from "../../components/Player";
import React from "react";
export default function watch() {
  const router = useRouter();
  const [singleMovie, setSingleMovie] = React.useState({});
  async function getSingleMovie(query) {
    if (query && query.slug) {
      var movieId = [...router.query.slug].pop();
      let isChannel = movieId.charAt(movieId.length-1);
      let OriginalMovieId = movieId.substring(0, movieId.length-1)
      var result = await fetch(
        "https://api.tapmad.com/api/getEventPredicationGameChannel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Version: "V2",
            Language: "en",
            Platform: "web",
            ChannelOrVODId: OriginalMovieId,
            UserId: "0",
            IsChannel: isChannel,
          }),
        }
      );
      var response = await result.json();
      return response;
    }
  }
  React.useEffect(async () => {
    let movieData = await getSingleMovie(router.query);
    setSingleMovie(movieData);
  }, [router.query]);

  return (
    <div>
      <Player movie={singleMovie} />
    </div>
  );
}

