import Head from "next/head";
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
        <script
          type="text/javascript"
          src="http://p.jwpcdn.com/6/10/jwplayer.js"
        ></script>
      </Head>
      <HomePage {...props} />
    </div>
  );
}
export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  console.log("Environment is " + process.env.TAPENV);
  if (process.env.TAPENV == "local") {
    ip = "43.245.204.44";
  }

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
  return {
    props: {
      movies: movie.Tabs[0],
      banner: banner,
      featured: featured,
      ip: ip,
    },
  };
}
