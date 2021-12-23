import Head from "next/head";
import Movies from "../modules/movies/components/movies";
import { getMoviesWithPaginationInitial } from "../services/apilinks";
import { get } from "../services/http-service";
import requestIp from "request-ip";
import isGoogle from "../services/google-dns-lookup";
export default function MoviesPage(props) {
  console.log("props in moviesS : ",props);
  return (
    <div>
      <Head>
        <title>
          Tapmad - Watch LIVE TV Channels Online | Watch Pakistani tv Channels
          Free
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://wwww.tapmad.com/movies" />

      </Head>
      <div>
        <Movies {...props} />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  try {
    const isGoogleDNS = await isGoogle(ip);
    if (isGoogleDNS == true) {
      ip = "39.44.217.70";
    }
  } catch (err) {
    console.log(err);
  }
  var moviesList = await get(getMoviesWithPaginationInitial, ip);
  var movies = await moviesList.data;
  return {
    props: {
      movies: movies,
      env: process.env.TAPENV,
      ip: ip
    },
  };
}
