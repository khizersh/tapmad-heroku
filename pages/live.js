import Head from "next/head";
import LiveChannels from "../modules/live/components/liveChannels";
import { get } from "../services/http-service";
import requestIp from "request-ip";
import { getChannelWithPaginationInitial } from "../services/apilinks";
import isGoogle from "../services/google-dns-lookup";

export default function Live(props) {
  console.log("props in live : ",props);
  return (
    <div>
      <Head>
        <title>
          Tapmad - Watch LIVE TV Channels Online | Watch Pakistani tv Channels
          Free
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://wwww.tapmad.com/live" />

      </Head>
      <div>
        <LiveChannels {...props} />
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
  var channelList = await get(getChannelWithPaginationInitial, ip);
  var channel = await channelList.data;
  return {
    props: {
      channel: channel,
      env: process.env.TAPENV
    },
  };
}
