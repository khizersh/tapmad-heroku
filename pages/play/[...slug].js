import React, { useEffect, useState } from "react";
import { log, manipulateUrls } from "../../services/utils";
import { get, post } from "../../services/http-service";
import CategoryDetail from "../../modules/category/components/CategoryDetail";
import {
  getRelatedChannelsOrVODs,
  SEOTvSeriesData,
} from "../../services/apilinks";
import requestIp from "request-ip";
import Head from "next/head";
import {
  getSEOData,
  getSEODataForLiveChannel,
} from "../../services/seo.service";
import isGoogle from "../../services/google-dns-lookup";
const Syno = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  console.log("props : ", props);
  if (!mount) {
    if (!video) {
      if (Array.isArray(props.data.Video)) {
        setVideo(props.data.Video[0]);
      } else {
        setVideo(props.data.Video);
      }

      setVideoList(props.data.Sections);
      setMount(true);
    }
  }
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      {props?.schema ? (
        <Head>
          {/* <title>{props?.schema?.metaData[0]?.title}</title> */}
          <title>Mian biwi bacho samentttt MBBS</title>
          <meta property="og:type" content="article" />
          {/* disable cache */}
          <meta http-equiv="cache-control" content="max-age=0" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="pragma" content="no-cache" />
          {/* disable cache */}
          <meta
            property="og:title"
            content={props?.schema?.metaData[0]?.title}
          />
          <meta
            property="og:description"
            content={props?.schema?.metaData[0]?.description}
          />
          <meta
            name="description"
            content={props?.schema?.metaData[0]?.description}
          />
          <meta
            property="og:image"
            content={props?.schema?.metaData[0]?.image?.url}
          />
          <meta property="og:url" content={props?.schema?.url} />
          <link rel="canonical" href={props?.schema?.url} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                props?.schema?.Channels
                  ? props.schema?.Channels[0]
                  : props.schema?.Vod[0]
              ),
            }}
          />
        </Head>
      ) : null}

      <div className="container-fluid">
        <CategoryDetail
          video={video}
          videoList={videoList}
          syno={true}
          page={"play"}
          // packageImage={props.data.Video.PackageImage}
        />
      </div>
    </>
  );
};

export default Syno;

export async function getServerSideProps(context) {
  let { OriginalMovieId, isChannel, CleanVideoId } = manipulateUrls(
    context.query
  );

  var ip = requestIp.getClientIp(context.req);
  try {
    const isGoogleDNS = await isGoogle(ip);
    if (isGoogleDNS == true) {
      ip = "39.44.217.70";
    }
  } catch (err) {
    console.log(err);
  }

  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }

  let url = getRelatedChannelsOrVODs(OriginalMovieId, isChannel);
  const data = await get(url, ip);

  if (data != null) {
    if (data?.data?.Video?.IsVideoChannel) {
      let seo = await getSEODataForLiveChannel(
        OriginalMovieId,
        context.resolvedUrl
      );
      return { props: { data: data.data, schema: seo } };
    } else {
      let seo = await getSEOData(OriginalMovieId, context.resolvedUrl);
      return { props: { data: data.data, schema: seo } };
    }
  }

  return {
    props: {
      data: data,
      env: process.env.TAPENV,
    },
  };
}
