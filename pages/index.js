import Head from "next/head";
import React from "react";
import HomePage from "../modules/home/components/HomePage";
import requestIp from "request-ip";

import { HomeService } from "../modules/home/components/home.service";
import isGoogle from "../services/google-dns-lookup";
// import { UpdateBase } from "../services/apilinks";

export default function Home(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <title>
          Watch Live TV - Live PSL, Sports, EPL, Movies Online - Tapmad TV
        </title>
        <meta
          name="description"
          content="Enjoy Live TV channels and watch Live PSL Ad free HD, Live EPL streaming online in Pakistan exclusively on Tapmad TV. Latest sports, top movies, tv shows, live football on Tapmad.com"
        />
        <meta
          name="title"
          content="Watch Live TV - Movies, Sports, Live EPL Online - Tapmad TV"
        />
        <meta
          name="keywords"
          content="Live PSL, Live tv channel, watch live tv, watch epl in Pakistan, live epl, premier league, english premier league pakistan,  watch pakistani tv channels free, indian movies, watch free indian movies, live sports, live cricket stream"
        />
        <script src="https://cdn.jwplayer.com/libraries/TPQRzCL9.js"></script>
      </Head>
      <h1 className="d-none">Live TV, Sports, Movies, VOD Streaming Pakistan</h1>
      <HomePage {...props} />
    </div>
  );
}
export async function getServerSideProps(context) {
  // UpdateBase(process.env.API_ENDPOINT);
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
      env: process.env.TAPENV || "production",
      prodEnv: process.env.API_ENDPOINT || "http://app.tapmad.com/api/",
    },
  };
}
