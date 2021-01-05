import Head from "next/head";
import Movies from "../modules/movies/components/movies";
import { get } from "../services/http-service";
export default function MoviesPage(props) {
  return (
    <div>
      <Head>
        <title>
          Tapmad - Watch LIVE TV Channels Online | Watch Pakistani tv Channels
          Free
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div>
        <Movies {...props} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  var moviesList = await get(
    "https://api.tapmad.com/api/getChannelWithPaginationForIp/0/5/0/16",
    ip
  );
  var movies = await moviesList.data;
  return {
    props: {
      movies: movies,
    },
  };
}
