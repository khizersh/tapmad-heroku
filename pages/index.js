import Head from "next/head";
import React from "react";
import HomePage from "../modules/home/components/HomePage";
import requestIp from "request-ip";

import { HomeService } from "../modules/home/components/home.service";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Tapmad - Watch LIVE TV Channels Online</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
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
  console.log("Environment is " + process.env.TAPENV);

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
