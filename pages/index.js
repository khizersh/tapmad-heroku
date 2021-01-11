import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import HomePage from "../modules/home/components/HomePage";
import { get } from "../services/http-service";
import requestIp from "request-ip";

export default function Home(props) {
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
  ip = "119.160.116.240";
  var movieList = await get(
    "https://api.tapmad.com/api/getFeaturedHomePageWithRE/5/0/5/0/16",
    ip
  );
  var bannersList = await get(
    "https://api.tapmad.com/api/getFeaturedBannerDetail"
  );
  var featuredContent = await get(
    "https://api.tapmad.com/api/getWebTabBanners/V1/en/Web"
  );
  var movie = await movieList.data;
  var banner = await bannersList.data;
  var featured = await featuredContent.data;
  console.log(movie);
  return {
    props: {
      movies: movie.Tabs[0],
      banner: banner,
      featured: featured,
      ip: ip,
    },
  };
}
