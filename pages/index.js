import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import HomePage from "../modules/home/components/HomePage";

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
export async function getStaticProps() {
  var movieList = await fetch(
    "https://api.tapmad.com/api/getFeaturedHomePageWithRE/5/0/5/0/16",
    {
      credentials: "include",
      redirect: "follow",
    }
  );
  var movie = await movieList.json();
  return {
    props: {
      movies: movie.Tabs[0].Sections,
    },
  };
}
