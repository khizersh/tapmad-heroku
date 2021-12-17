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
          Watch Live TV - Movies, Sports, Live EPL Online - Tapmad TV
        </title>
        <meta
          name="description"
          content="Enjoy Live TV channels and watch Live EPL streaming online in Pakistan exclusively on Tapmad TV. Latest sports, top movies, tv shows, live football streaming and cricket update on Tapmad.com."
        />
        <script src="https://cdn.jwplayer.com/libraries/TPQRzCL9.js"></script>
        <meta
          name="keywords"
          content="Watch LIVE TV channels online, watch pakistani tv channels free, watch pakistani tv channels online, watch online live tv channels movies, watch live online tv, watch live tv channels online, watch digital tv channels, Pakistani tv channels online, hd channels, pakistan cricket match, indian movies, indian movies online, pakistani movies, indian drama,  pakistani drama, kids shows, pakistani music, indian music, sports, live cricket, live sports"
        />
      </Head>
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
      env: process.env.TAPENV,
      prodEnv: process.env.API_ENDPOINT
    },
  };
}
