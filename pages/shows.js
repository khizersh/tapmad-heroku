import Head from "next/head";
import Shows from "../modules/shows/components/shows";
import { get } from "../services/http-service";
import { getShowsWithPagination } from "../services/apilinks";
import requestIp from "request-ip";
import isGoogle from "../services/google-dns-lookup";
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
        <link rel="canonical" href="https://wwww.tapmad.com/shows" />

      </Head>
      <div>
        <Shows {...props} />
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
  var moviesList = await get(getShowsWithPagination, ip);
  var movies = await moviesList.data;
  return {
    props: {
      shows: movies,
      env: process.env.TAPENV,
      ip
    },
  };
}
