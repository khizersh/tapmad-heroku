import Head from "next/head";
import React from "react";
import HomePage from "../modules/home/components/HomePage";
import requestIp from "request-ip";

import { HomeService } from "../modules/home/components/home.service";

export default function Home(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <title>Watch Live TV - Enjoy AdFree PSL Live Streaming - Tapmad TV</title>
        <meta name="description"
          content="Enjoy Live TV channels and watch AdFREE PSL Live streaming online exclusively on Tapmad TV. Latest sports, movies, tv shows, live score and cricket highlights." />

        <meta name="keywords"
          content="Watch LIVE TV channels online, watch pakistani tv channels free, watch pakistani tv channels online, watch online live tv channels movies, watch live online tv, watch live tv channels online, watch digital tv channels, Pakistani tv channels online, hd channels, pakistan cricket match, indian movies, indian movies online, pakistani movies, indian drama,  pakistani drama, kids shows, pakistani music, indian music, sports, live cricket, live sports" />

      </Head>
      <HomePage {...props} />
    </div>
  );
}
export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  console.log("Environment is " + process.env.TAPENV, ip);

  let movie, banner, featured;
  var movieList = await HomeService.getFeaturedHomePageData(ip);
  if (movieList != null) movie = await movieList.data;
  else movie = {};

  var bannersList = await HomeService.getFeaturedBannerDetailData(ip);
  if (bannersList != null) banner = await bannersList.data;
  else banner = {};

  var featuredContent = await HomeService.getWebTabBannersData(ip);
  if (featuredContent != null) featured = await featuredContent.data;
  else featured = {};

  return {
    props: {
      movies: movie.Tabs[0],
      banner: banner,
      featured: featured,
      ip: ip,
    },
  };
}
