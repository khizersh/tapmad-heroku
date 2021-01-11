import "../styles/globals.scss";
import "../styles/card-hor.style.css";
import Head from "next/head";
import React from "react";
import Header from "../components/App/Header";
import Skeleton from "../components/MainSkeleton";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Tapmad - Watch LIVE TV Channels Online | Watch Pakistani tv Channels
          Free
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Watch LIVE TV channels online, watch pakistani tv channels free, watch pakistani tv channels online, watch online live tv channels movies, watch live online tv, watch live tv channels online, watch digital tv channels, Pakistani tv channels online, hd channels, pakistan cricket match, indian movies, indian movies online, pakistani movies, indian drama,  pakistani drama, kids shows, pakistani music, indian music, sports, live cricket, live sports"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.tapmad.com/favicon/favicon-32x32.png"
        />
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
      {pageProps.noSideBar ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Skeleton>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Skeleton>
        </>
      )}
    </>
  );
}

export default MyApp;
