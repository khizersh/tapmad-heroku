import "../styles/globals.scss";
import Head from "next/head";
import React from "react";
import Header from "../components/App/Header";
import Skeleton from "../components/MainSkeleton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Skeleton>
          <Header />
          <Component {...pageProps} />
        </Skeleton>
      </>
    </>
  );
}

export default MyApp;
