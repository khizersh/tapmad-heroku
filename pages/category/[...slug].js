import React, { useEffect, useState } from "react";
import { get, post } from "../../services/http-service";
import { manipulateUrlsForCatgeory } from "../../services/utils";
import CategoryDetail from "../../modules/category/components/CategoryDetail";
import { getSeasonVodByCategoryId, SEOTvShowsByCategory } from "../../services/apilinks";
import requestIp from "request-ip";
import Head from "next/head";
import { getSEODataByCategory } from "../../services/seo.service";

const Category = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      let vid = {
        VideoName: props.data.CategoryName,
        VideoDescription: props.data.CategoryDescription,
        NewVideoImageThumbnail: props.data.CategoryMobileLargeImage,
      };
      setVideo(vid);
      setVideoList([{ Videos: props?.data?.Videos }]);
    }
  }

  useEffect(() => {
    setMount(true);
  }, [props]);

  return (
    <>
      <Head>
        <title>{props.schema.metaData[0].title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.schema.metaData[0].title} />
        <meta property="og:description" content={props.schema.metaData[0].description} />
        <meta property="og:image" content={props.schema.metaData[0].image.url} />
        <meta property="og:url" content={props.schema.url} />
        <link rel="canonical" href={props.schema.url} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema.Channels ? props.schema.Channels[0] : props.schema.Vod[0]) }}
        />
      </Head>
      <div className="container-fluid">
        <CategoryDetail video={video} videoList={videoList} />
      </div>
    </>
  );
};

export default Category;

export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  let { categoryId } = manipulateUrlsForCatgeory(context.query);
  const data = await get(getSeasonVodByCategoryId + categoryId, ip);
  let seo = await getSEODataByCategory(categoryId, context.resolvedUrl)

  return {
    props: {
      data: data.data, schema: seo, env: process.env.TAPENV
    }
  };
}
