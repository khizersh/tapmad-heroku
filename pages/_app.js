import "../styles/globals.css";
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
import "../modules/samsungtv/samsung.css";

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MainProvider, { MainContext } from "../contexts/MainContext";
import Loader from "../components/Loader";
import { Cookie } from "../services/cookies";
import { DashboardService } from "../modules/dashboard/Dashboard.Service";
import Router from "next/router";
import { addScriptCodeInDom, setUrlToCookies } from "../services/utils";
import CatchupProvider from "../contexts/CatchupContext";
import AuthProvider from "../contexts/AuthContext";
import dynamic from "next/dynamic";
import GameProvider from "../contexts/GameContext";

const DashboardLayout = dynamic(() =>
  import("../modules/dashboard/DashboardLayout")
);
const Skeleton = dynamic(() => import("../components/MainSkeleton"));
const Header = dynamic(() => import("../components/App/Header"));
const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps, test }) {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(true);

  function checkUserAuthentication() {
    if (pageProps.auth) {
      const token = Cookie.getCookies("content-token");
      if (token && token.length > 50) {
        router.push("/");
        return false;
      } else {
        return false;
      }
    }
    if (pageProps.protected) {
      const token = Cookie.getCookies("content-token");
      if (token && token.length > 50) {
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
    if (window.innerWidth <= 800) {
      if (
        window.parent &&
        window.parent.location &&
        window.parent.location.pathname.includes("watch")
      ) {
        setShowHeader(false);
      }
    }
  }, []);

  useLayoutEffect(() => {
    addScriptCodeInDom(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PJ4M57N');`);
  }, []);

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
        <title>Tapmad - Watch LIVE TV Channels Online </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="robots" content="noindex" />
        <meta
          name="keywords"
          content="Watch LIVE TV channels online, live psl, live cricket, watch live psl streaming, ad free stream, live sports, live sports, watch adfree psl online, hd stream, Pakistan cricket match, live cricket, live sports"
        />
        {/* <link rel="canonical" href="https://www.tapmad.com" /> */}

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
                  <GameProvider>
                    <Skeleton>
                      {showHeader && <Header />}
                      <Component {...pageProps} />
                      {showHeader && <Footer />}
                    </Skeleton>
                  </GameProvider>
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
