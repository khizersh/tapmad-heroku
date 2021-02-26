import Head from "next/head";
import Shows from "../modules/shows/components/shows";
import { get } from "../services/http-service";
import { getShowsWithPagination } from "../services/apilinks";
export default function ShowsPage(props) {
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
        <Shows {...props} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  var moviesList = await get(getShowsWithPagination);
  var movies = await moviesList.data;
  return {
    props: {
      shows: movies,
    },
  };
}
