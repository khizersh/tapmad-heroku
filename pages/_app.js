import "../styles/globals.scss";
import Head from "next/head";
import React from "react";
import { Workbox } from "workbox-window";
import Header from "../components/App/Header";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Progressive Web App support is disabled");
      return;
    }
    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  }, []);
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
        <Header />
        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
