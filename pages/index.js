import Head from "next/head";
import React, { useEffect, useState } from "react";
import HomePage from "../modules/home/components/HomePage";
import { get } from "../services/http-service";
import requestIp from "request-ip";
import {
  getFeaturedBannerDetail,
  getFeaturedHomePage,
  getWebTabBanners,
} from "../services/apilinks";
import { HomeService } from "../modules/home/components/home.service";

export default function Home(props) {
  console.log("Props in index: ", props);
  return (
    <div>
      <Head>
        <title>Tapmad</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <HomePage {...props} />
    </div>
  );
}
export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  console.log("Environment is " + process.env.TAPENV);
  // if (process.env.TAPENV == "local") {
  if (ip == "::1") {
    ip = "43.245.204.44";
  }

  let movie, banner, featured;

  var movieList = await HomeService.getFeaturedHomePageData(ip);
  if (movieList != null) movie = await movieList.data;
  else movie = {};

  var bannersList = await HomeService.getFeaturedBannerDetailData();
  if (bannersList != null) banner = await bannersList.data;
  else banner = {};

  var featuredContent = await HomeService.getWebTabBannersData();
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
