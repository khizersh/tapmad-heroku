import React from "react";
import TabDetails from "../modules/catchup/TabDetails";
import TabSlider from "../modules/catchup/TabSlider";
import Head from "next/head";

const catchup = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>
          Catchup On-Demand TV Shows Online | Tapmad TV
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://wwww.tapmad.com/catchup" />
      </Head>
      <TabSlider />
      <TabDetails />
    </div>
  );
};

export default catchup;
