import Head from "next/head";
import Router from "next/router";
import React, { useLayoutEffect, useEffect } from "react";
import Loader from "../components/Loader";
import AuthProvider from "../contexts/AuthContext";
import AuthProviderNew from "../contexts/auth/AuthContext";
import CatchupProvider from "../contexts/CatchupContext";
import GameProvider from "../contexts/GameContext";
import { useRouter } from "next/router";
import MainProvider, { MainContext } from "../contexts/MainContext";
import "../styles/globals.scss";
import "../modules/auth/auth.css";
import "../components/App/Header.css";
import "../modules/catchup/catchup.css";
import "../modules/profile-component/profile-component.css";
import "../modules/category/css/card-hor.style.css";
import "../modules/dashboard/dashboard.style.css";
import "../modules/home/sliderCard.css";
import "../modules/movies/movie.css";
import "../modules/my-account/myaccount.css";
import "../modules/news/news.style.css";
import "../modules/player-shop/player-shop.css";
import "../modules/game/components/gamestyles.css";
import "../modules/promo-code/promo-code.css";
import "../modules/samsungtv/samsung.css";
import "../components/component-styles/newSignup.css";
import "../modules/search/search.css";
import "../components/component-styles/component.css";
import { addScriptCodeInDom, setUrlToCookies } from "../services/utils";
import "../styles/game.css";
import "../modules/my-account/myaccounttest.css";
import "../styles/globals.css";
import { UserSessions } from "../services/gtm";
import SignUpProvider from "../contexts/auth/SignUpContext";
import loadable from "@loadable/component";
import BuyCoinModal from "../modules/game/components/BuyCoinModal";
import ProfileProvider from "../contexts/profile/ProfileContext";
import { checkUserIdAndToken } from "../services/auth.service";
import GlobalUserHeader from "../components/GlobalUserHeader";

const DashboardLayout = loadable(() =>
  import("../modules/dashboard/DashboardLayout")
);
import Skeleton from "../components/MainSkeleton";
const Header = loadable(() => import("../components/App/Header"));
const Footer = loadable(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useLayoutEffect(() => {
    UserSessions();
    addScriptCodeInDom(`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PJ4M57N');`);
  }, []);

  useEffect(async () => {
    setTimeout(() => {
      if (pageProps.protected) {
        let check = checkUserIdAndToken();
        if (!check.valid) {
          router.push(check.url);
        }
      }
    }, 1500);
  }, [pageProps.protected]);

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
              name: "Tapmad TV",
              alternateName: "Tapmad",
              url: "https://www.tapmad.com/",
              logo: "https://play-lh.googleusercontent.com/i8xVImpStVCQULwvGtfVkjQmdVLRMuTRfCC47CTaN_naZhk0wdwzplve7mloN0Z1iRM=s180-rw",
              sameAs: [
                "https://www.facebook.com/TapmadTV/",
                "https://twitter.com/tapmadtv",
                "https://www.instagram.com/tapmad.entertainment/",
                "https://www.youtube.com/channel/UCPHOf3lVS8bUSwR1h55EO6g",
                "https://pk.linkedin.com/company/tapmad-tv",
              ],
            }),
          }}
        />
        {pageProps.env == "staging" ? (
          <meta name="robots" content="noindex" />
        ) : null}

        {/* <link rel="canonical" href="https://www.tapmad.com" /> */}
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
              <AuthProvider>
                <AuthProviderNew>
                  <SignUpProvider>
                    <GameProvider>
                      <ProfileProvider>
                        <NoSideBarSkeleton layout={pageProps.userHeader}>
                          <Component {...pageProps} />
                        </NoSideBarSkeleton>
                      </ProfileProvider>
                    </GameProvider>
                  </SignUpProvider>
                </AuthProviderNew>
              </AuthProvider>
            </MainProvider>
          )
        ) : (
          <MainProvider>
            <AuthProvider>
              <AuthProviderNew>
                <SignUpProvider>
                  <CatchupProvider>
                    <GameProvider>
                      <Skeleton {...pageProps}>
                        <BuyCoinModal />
                        <Header />
                        <Component {...pageProps} />
                        <Footer />
                      </Skeleton>
                    </GameProvider>
                  </CatchupProvider>
                </SignUpProvider>
              </AuthProviderNew>
            </AuthProvider>
          </MainProvider>
        )}
      </>
    </>
  );
}

export default MyApp;

export const NoSideBarSkeleton = ({ children, layout }) => {
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
      {layout ? <GlobalUserHeader /> : ""}
      {initialState.loading ? <Loader /> : null}
      {children}
    </div>
  );
};
