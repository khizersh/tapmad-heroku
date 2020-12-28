import Head from "next/head";
import LiveChannels from "../modules/live/components/liveChannels";
import { get } from "../services/http-service";
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
export async function getStaticProps() {
  var channelList = await get(
    "https://api.tapmad.com/api/getChannelWithPagination/0/5/0/16"
  );
  var channel = await channelList.data;
  return {
    props: {
      channel: channel,
    },
  };
}
