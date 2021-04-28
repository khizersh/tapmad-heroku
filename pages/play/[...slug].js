import React, { useEffect, useState } from "react";
import { manipulateUrls } from "../../services/utils";
import { get, post } from "../../services/http-service";
import CategoryDetail from "../../modules/category/components/CategoryDetail";
import { getRelatedChannelsOrVODs, SEOTvSeriesData } from "../../services/apilinks";
import requestIp from "request-ip";
import Head from "next/head";
import { getSEOData } from "../../services/seo.service";

const Syno = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      setVideo(props.data.Video);
      setVideoList(props.data.Sections);
      setMount(true);
    }
  }

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }}
        />
      </Head>
      <div className="container-fluid">
        <CategoryDetail video={video} videoList={videoList} syno={true} />
      </div>
    </>
  );
};

export default Syno;

export async function getServerSideProps(context) {
  let { OriginalMovieId, isChannel } = manipulateUrls(context.query);
  var ip = requestIp.getClientIp(context.req);

  let url = getRelatedChannelsOrVODs(OriginalMovieId, isChannel);
  const data = await get(url, ip);


  if (data != null) {
    let seo = await getSEOData(OriginalMovieId, context.resolvedUrl);
    return { props: { data: data.data, schema: seo } };
  }
  return { props: { data: data } };
}
