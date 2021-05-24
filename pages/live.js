import Head from "next/head";
import LiveChannels from "../modules/live/components/liveChannels";
import { get } from "../services/http-service";
import requestIp from "request-ip";
import { getChannelWithPaginationInitial } from "../services/apilinks";

export default function Live(props) {
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
  var channelList = await get(getChannelWithPaginationInitial, ip);
  var channel = await channelList.data;
  return {
    props: {
      channel: channel,
    },
  };
}
