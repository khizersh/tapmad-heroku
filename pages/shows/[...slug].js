import React, { useEffect, useState } from "react";
import { get, post } from "../../services/http-service";
import { manipulateUrlsForCatgeory } from "../../services/utils";
import CategoryDetail from "../../modules/category/components/CategoryDetail";
import { getSeasonVodByCategoryId, SEOTvShowsByCategory } from "../../services/apilinks";
import requestIp from "request-ip";
import Head from "next/head";
import { getSEODataByCategory } from "../../services/seo.service";

const Shows = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video && props.data.Category) {
      let vid = {
        VideoName: props.data.Category.CategoryName,
        VideoDescription: props.data.Category.CategoryDescription,
        VideoImagePathLarge: props.data.Category.NewCategoryImage,
        VideoImagePath: props.data.Category.NewCategoryImage,
        VideoEntityId: props.data.Category.VideoOnDemandCategoryId
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
        <meta name="description" content={props.schema.metaData[0].description} />
        <meta property="title" content={props.schema.metaData[0].title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.schema.metaData[0].title} />
        <meta property="og:description" content={props.schema.metaData[0].description} />
        <meta property="og:image" content={props.schema.metaData[0].image.url} />
        <meta property="og:url" content={props.schema.url} />
        <meta name="description" content={props.schema.metaData[0].description} />
        <link rel="canonical" href={props.schema.url} />
        {/* <meta name="robots" content="noindex" /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema.Channels ? props.schema.Channels[0] : props.schema.Vod[0]) }}
        />
      </Head>
      <div className="container-fluid">
        <CategoryDetail video={video} videoList={videoList} page={'category'} />
      </div>
    </>
  );
};

export default Shows;

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
      data: { ...data.data, VideoEntityId: categoryId }, schema: seo, env: process.env.TAPENV
    }
  };
}
