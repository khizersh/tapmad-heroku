import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React, { useLayoutEffect } from "react";
import Loader from "../components/Loader";
import AuthProvider from "../contexts/AuthContext";
import CatchupProvider from "../contexts/CatchupContext";
import GameProvider from "../contexts/GameContext";
import MainProvider, { MainContext } from "../contexts/MainContext";
import "../styles/globals.scss";
import "../modules/auth/auth.css";
import "../components/App/Header.css";
import "../modules/catchup/catchup.css";
import "../modules/category/css/card-hor.style.css";
import "../modules/dashboard/dashboard.style.css";
import "../modules/home/sliderCard.css";
import "../modules/movies/movie.css";
import "../modules/my-account/myaccount.css";
import "../modules/news/news.style.css";
import "../modules/player-shop/player-shop.css";
import "../modules/promo-code/promo-code.css";
import "../modules/samsungtv/samsung.css";
import "../modules/search/search.css";
import { addScriptCodeInDom, setUrlToCookies } from "../services/utils";
import "../styles/game.css";
import "../styles/globals.css";
import { UserSessions } from "../services/gtm";


const DashboardLayout = dynamic(() => import("../modules/dashboard/DashboardLayout"));
const Skeleton = dynamic(() => import("../components/MainSkeleton"));
const Header = dynamic(() => import("../components/App/Header"));
const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {

  useLayoutEffect(() => {
    UserSessions();
    addScriptCodeInDom(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PJ4M57N');`)
  }, [])
  // Hello
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tapmad TV",
              "alternateName": "Tapmad",
              "url": "https://www.tapmad.com/",
              "logo": "https://play-lh.googleusercontent.com/i8xVImpStVCQULwvGtfVkjQmdVLRMuTRfCC47CTaN_naZhk0wdwzplve7mloN0Z1iRM=s180-rw",
              "sameAs": [
                "https://www.facebook.com/TapmadTV/",
                "https://twitter.com/tapmadtv",
                "https://www.instagram.com/tapmad.entertainment/",
                "https://www.youtube.com/channel/UCPHOf3lVS8bUSwR1h55EO6g",
                "https://pk.linkedin.com/company/tapmad-tv"
              ]
            }
            ),
          }}
        />
        {pageProps.env == 'staging' ? <meta name="robots" content="noindex" /> : null}

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

        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
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
              <AuthProvider>
                <NoSideBarSkeleton>
                  <Component {...pageProps} />
                </NoSideBarSkeleton>
              </AuthProvider>
            </MainProvider>
          )
        ) : (
          <>
            <MainProvider>
              <AuthProvider>
                <CatchupProvider>
                  <GameProvider>
                    <Skeleton>
                      <Header />
                      <Component {...pageProps} />
                      <Footer />
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
