import "../styles/globals.scss";
import "../styles/game.css";
import "../modules/home/sliderCard.css";
import "../components/App/Header.css";
import "../modules/dashboard/dashboard.style.css";
import "../modules/category/css/card-hor.style.css";
import "../modules/player-shop/player-shop.css";
import "../modules/auth/auth.css";
import "../modules/search/search.css";
import "../modules/my-account/myaccount.css";
import "../modules/movies/movie.css";
import "../modules/catchup/catchup.css";
import "../modules/news/news.style.css";
import "../modules/promo-code/promo-code.css";

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../components/App/Header";
import Skeleton from "../components/MainSkeleton";
import Footer from "../components/Footer";
import MainProvider, { MainContext } from "../contexts/MainContext";
import Loader from "../components/Loader";
import { Cookie } from "../services/cookies";
import DashboardLayout from "../modules/dashboard/DashboardLayout";
import { DashboardService } from "../modules/dashboard/Dashboard.Service";
import Router from "next/router";
import { setUrlToCookies } from "../services/utils";
import CatchupProvider from "../contexts/CatchupContext";
import AuthProvider from "../contexts/AuthContext";

function MyApp({ Component, pageProps, test }) {
  const router = useRouter();

  function checkUserAuthentication() {
    if (pageProps.protected) {
      const userId = Cookie.getCookies("userId");
      const isAuthenticated = Cookie.getCookies("isAuth");
      const token = Cookie.getCookies("utk");
      if (token) {
        return true;
      } else {
        router.push("/sign-in");
        return false;
      }
    }
    if (pageProps.dashboard) {
      let value = DashboardService.checkCredentials();
      if (value) {
        return true;
      } else {
        router.push("/dashboard/login");
        return false;
      }
    }
  }

  useEffect(() => {
    checkUserAuthentication();
  }, []);
  let styles =
    "font-weight: bold; font-size: 150px;color: #87c242; text-shadow: 3px 3px 0 rgb(217,31,38)  , 12px 12px 0 rgb(5,148,68)";
  let message = "tapmad ";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="//d1s7wg2ne64q87.cloudfront.net/web/images/favicon-32x32.png"
        />
        {/* <script src="./static/gtm.js"></script> */}
        {/* <script src="./static/newrelic.js"></script> */}
        <title>Tapmad - Watch LIVE TV Channels Online </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
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
      </Head>
      <>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJ4M57N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {pageProps.noSideBar ? (
          pageProps.dashboard ? (
            <>
              <MainProvider>
                <DashboardLayout>
                  <Component {...pageProps} />
                </DashboardLayout>
              </MainProvider>
            </>
          ) : (
            <MainProvider>
              <NoSideBarSkeleton>
                <Component {...pageProps} />
              </NoSideBarSkeleton>
            </MainProvider>
          )
        ) : (
          <>
            <MainProvider>
              <AuthProvider>
                <CatchupProvider>
                  <Skeleton>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                  </Skeleton>
                </CatchupProvider>
              </AuthProvider>
            </MainProvider>
          </>
        )}
      </>
    </>
  );
}

export default MyApp;

export const NoSideBarSkeleton = ({ children }) => {
  const { initialState, setLoader } = React.useContext(MainContext);

  Router.onRouteChangeStart = (url) => {
    let key = url.split("/")[1];
    setUrlToCookies(key, url);
    setLoader(true);
  };
  Router.onRouteChangeComplete = () => {
    setLoader(false);
  };

  Router.onRouteChangeError = () => {
    setLoader(false);
  };
  return (
    <div>
      {initialState.loading ? <Loader /> : null}
      {children}
    </div>
  );
};
