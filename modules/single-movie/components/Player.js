import React, { useState, useEffect, useContext } from "react";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import { AuthService } from "../../auth/auth.service";
import { DashboardService } from "../../dashboard/Dashboard.Service";
// import PlayerShop from "../../player-shop/player-shop";
import { PlayerService } from "../Player.service";
import { useRouter } from "next/router";
import {
  AdImpression,
  VideoQuartile,
  VideoWatched,
} from "../../../services/gtm";
import dynamic from "next/dynamic";
import ReactJWPlayer from "react-jw-player";
import RelatedProductCard from "../../../modules/movies/components/RelatedProductCard";
import {
  isAuthentictedUser,
  SEOFriendlySlugsForVideo,
  verifyURL,
} from "../../../services/utils";
import Link from "next/link";
import Head from "next/head";
var fired = false;
var fired5percent = false;
const PSLComponent = dynamic(() =>
  import("../../../components/psl/psl-component")
);

export default function Player({ movies }) {
  const router = useRouter();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [adDuration, setAdDuration] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [movie, setMovie] = useState(null);
  const [videoLink, setVideoLink] = useState(null);
  const [local, setLocal] = useState(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [adsApiCalled, setAdsApiCalled] = useState(false);
  const [relatedVideo, setRelatedVideos] = useState([]);
  const [ads, setAds] = useState({
    allow: false,
    topAd: "",
    onVideo: "",
    rightAd: "",
    bottomBannerAd: "",
    bottomBannerAdMobile: "",
    rightVideoAd: "",
    bottomMobileWidth: "",
    bottomMobileHeight: "",
  });

  // Theater mode <start>
  // useEffect(() => {
  //   if (playerReady) {
  //     setPlayerReady(true);
  //     // if (
  //     //   typeof document !== "undefined" &&
  //     //   !document.querySelector(".jw-theater-mode") && // if button do not exist
  //     //   screen.width > 992 // if mobile screen
  //     // )

  //     // create new element
  //     const elem = document.createElement("div");
  //     elem.setAttribute(
  //       "class",
  //       "jw-theater-mode jw-icon jw-icon-inline jw-button-color fa fa-desktop"
  //     );
  //     elem.role = "button";
  //     elem.tabIndex = "0";

  //     // grab target element reference
  //     const target = document.querySelectorAll(".jw-settings-sharing")[1];

  //     // insert the element before target element
  //     target && target.parentNode.insertBefore(elem, target);

  //     document
  //       .querySelector(".jw-theater-mode")
  //       .addEventListener("click", (e) => {
  //         const btn = e.target;
  //         if (btn.classList.contains("fa-desktop")) {
  //           btn.classList.remove("fa-desktop");
  //           btn.classList.add("fa-compress");
  //           const vdowrp = document.querySelector(".vdowrp");
  //           const vdonxtSib = vdowrp.nextElementSibling;
  //           vdowrp.classList.remove("col-lg-9");
  //           vdowrp.classList.add("col-lg-12");
  //           vdonxtSib.classList.remove("d-md-block");
  //           vdonxtSib.classList.remove("d-lg-block");
  //           vdonxtSib.classList.add("d-none");
  //         } else {
  //           btn.classList.add("fa-desktop");
  //           btn.classList.remove("fa-compress");
  //           const vdowrp = document.querySelector(".vdowrp");
  //           const vdonxtSib = vdowrp.nextElementSibling;
  //           vdowrp.classList.add("col-lg-9");
  //           vdowrp.classList.remove("col-lg-12");
  //           vdonxtSib.classList.add("d-md-block");
  //           vdonxtSib.classList.add("d-lg-block");
  //           vdonxtSib.classList.remove("d-none");
  //         }
  //       });
  //   }
  // }, [playerReady]);
  // Theater mode <end>

  if (!mounted) {
    if (!movie) {
      setMovie(movies);
      setMounted(true);
      if (movies.Video && movies.Video.IsVideoChannel) {
        setVideoLink({
          highQuality: movies.Video.ChannelStreamUrlWHQ,
          mediumQuality: movies.Video.ChannelStreamUrlWMQ,
          lowQuality: movies.Video.ChannelStreamUrlWLQ,
        });
      } else {
        setVideoLink({
          highQuality: movies.Video.VideoStreamUrlHQ,
          mediumQuality: movies.Video.VideoStreamUrlMQ,
          lowQuality: movies.Video.VideoStreamUrlLQ,
        });
      }
    }
  }
  function onRestartAd() {
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsAutoPlay(true);
    }, adDuration * 60000);
  }

  function fivePercentQuartile(video) {
    var duration = video.duration;
    duration = (duration / 100) * 5;
    if (video.currentTime > duration && !fired5percent) {
      VideoQuartile(movie, "25%", "video1");
      fired5percent = true;
    }
  }
  async function getRelatedChannels() {
    const res = await PlayerService.getRelatedChannelsOrVODData(
      movie.Video.VideoEntityId,
      movie.Video.IsVideoChannel ? 1 : 0
    );
    if (res.data && res?.data?.Sections?.length > 0 && res.responseCode == 1) {
      setRelatedVideos(res.data.Sections[0].Videos);
    }
  }

  // ads and related api call
  useEffect(async () => {
    verifyURL(router, movies.Video.VideoName);
    await getRelatedChannels();
    if (!adsApiCalled) {
      const country = await AuthService.getGeoInfo();
      const resp = await DashboardService.getAdData();
      let data;
      if (country) {
        if (country.countryCode == "PK") {
          data = PlayerService.checkAds(resp, "local");
          setLocal(true);
        } else {
          data = PlayerService.checkAds(resp, "international");
          setLocal(false);
        }
      } else {
        data = PlayerService.checkAds(resp, "local");
        setLocal(true);
      }
      if (data != null) {
        if (window.screen.width < 800) {
          setAds({
            allow: data.allow,
            onVideo: data.onVideo,
            topAdDesktop: data.topAdDesktop,
            topAdMobile: data.topAdMobile,
            rightAd: "",
            rightVideoAd: "",
            bottomBannerAd: data.bottomBannerAd,
            bottomBannerAdMobile: data.bottomBannerAdMobile,
            topMobileAdHieght: data.topMobileAdHieght,
            topMobileAdWidth: data.topMobileAdWidth,
            bottomMobileWidth: data.bottomMobileWidth,
            bottomMobileHeight: data.bottomMobileHeight,
            videoAdDuration: data.videoAdDuration,
          });
          setAdDuration(data.videoAdDuration);
        } else {
          setAds({
            allow: data.allow,
            onVideo: data.onVideo,
            topAdDesktop: data.topAdDesktop,
            topAdMobile: data.topAdMobile,
            rightAd: data.rightAd,
            bottomBannerAd: data.bottomBannerAd,
            rightVideoAd: data.rightVideoAd,
            bottomBannerAdMobile: "",
            bottomMobileWidth: data.bottomMobileWidth,
            bottomMobileHeight: data.bottomMobileHeight,
            videoAdDuration: data.videoAdDuration,
          });
          setAdDuration(data.videoAdDuration);
        }
      }
      setTimeout(() => {
        setAdsApiCalled(true);
      }, 400);
    }
    console.log("adsss. ", ads);
  }, [router, adsApiCalled]);
  // video links
  useEffect(() => {
    fired = false;
    setMovie(movies);
    if (movies.Video && movies.Video.IsVideoChannel) {
      setVideoLink({
        highQuality: movies.Video.ContentStreamUrlWHQ,
        mediumQuality: movies.Video.ContentStreamUrlWMQ,
        lowQuality: movies.Video.ContentStreamUrlWLQ,
      });
    } else {
      setVideoLink({
        highQuality: movies.Video.ContentStreamUrlHQ,
        mediumQuality: movies.Video.ContentStreamUrlMQ,
        lowQuality: movies.Video.ContentStreamUrlLQ,
      });
    }
  }, [movies]);

  function videoQuartile(movie) {
    return {
      onTwentyFivePercent: (event) => {
        VideoQuartile(movie, "50%", "video2");
      },
      onFiftyPercent: (event) => {
        VideoQuartile(movie, "75%", "video3");
      },
      onSeventyFivePercent: (event) => {
        VideoQuartile(movie, "95%", "video4");
      },
      // onNinetyFivePercent: () => {
      //   VideoQuartile(movie, "95%")
      // }
    };
  }

  useEffect(() => {
    const header = document.getElementById("player-div1");
    const sticky = header.offsetTop + 100;

    const scrollCallBack = window.addEventListener("scroll", () => {
      // if (window.pageYOffset > sticky) {
      //   if (window.screen.width < 639) {
      //     header.classList.add("sticky-value");
      //   } else {
      //     header.classList.remove("sticky-value");
      //   }
      // } else {
      //   header.classList.remove("sticky-value");
      // }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.screen.width < 639);
    if (movies.Video.IsVideoFree == false) {
      if (!isAuthentictedUser()) {
        router.push("/sign-up?tab=1&packageId=2");
      }
    }
  }, []);

  return (
    <>
      <Head>
        <style>
          {`
        @media(max-width:640px) {
          #my-unique-id {
              max-height: 200px
          }
          .vdowrp {
            top: 80px;
            z-index: 9;
            position: sticky !important;
          }
          .vdobox {
            position: sticky !important;
            top: 77px;
            z-index: 9;
          }
          div.d-sm-none {
            display: none !important
          }
        }
        `}
        </style>
      </Head>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 vdowrp">
              {/* Top Ad */}
              {ads.allow ? (
                <div className="text-center my-3">
                  <DFPSlotsProvider dfpNetworkId="28379801">
                    {ads.topAdDesktop && (
                      <div className="desktop-ads d-none d-lg-block d-md-block">
                        <AdSlot
                          sizes={[[728, 90]]}
                          adUnit={ads.topAdDesktop}
                          onSlotIsViewable={(dfpEventData) => AdImpression()}
                        />
                      </div>
                    )}
                    {ads.topAdMobile &&
                    ads.topMobileAdWidth &&
                    ads.topMobileAdHieght ? (
                      <div className="desktops-ads text-center d-lg-none d-md-none">
                        <AdSlot
                          sizes={[
                            [ads.topMobileAdWidth, ads.topMobileAdHieght],
                          ]}
                          adUnit={ads.topAdMobile}
                          onSlotIsViewable={(dfpEventData) => AdImpression()}
                        />
                      </div>
                    ) : null}
                  </DFPSlotsProvider>
                </div>
              ) : null}
              <div className="col-12 p-0 vdobox">
                <div
                  id="player-div1"
                  className="player-div"
                  style={{ border: "1px solid white" }}
                >
                  <ReactJWPlayer
                    onTime={(e) => {
                      fivePercentQuartile(e);
                      if (e.currentTime) {
                        !playerReady && setPlayerReady(true);
                      }
                      if (e.currentTime > 3 && !fired) {
                        VideoWatched(movies);
                        fired = true;
                      } else {
                        return;
                      }
                    }}
                    playerId="my-unique-id"
                    playerScript="https://cdn.jwplayer.com/libraries/TPQRzCL9.js"
                    isAutoPlay={true}
                    file={
                      videoLink
                        ? videoLink.lowQuality
                        : "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8?"
                    }
                    onAdPlay={() => {
                      AdImpression();
                    }}
                    generatePrerollUrl={() =>
                      ads.onVideo && ads.allow ? ads.onVideo : ""
                    }
                    {...videoQuartile(movies)}
                    customProps={{
                      mediaid: movies && movies.Video.JWMediaId,
                      controls: true,
                      sources: [
                        {
                          file: videoLink && videoLink.lowQuality,
                          label: "HD",
                        },
                        {
                          file: videoLink && videoLink.lowQuality,
                          label: "MQ",
                        },
                        {
                          file: videoLink && videoLink.lowQuality,
                          label: "LQ",
                        },
                      ],
                    }}
                    height={300}
                  />
                </div>
              </div>
              <div className="col-lg-12 p-0">
                {movie && movie.Video ? (
                  <>
                    <h1 className="mt-3 mb-0 h5">{movie.Video.VideoName}</h1>
                    {/* <span className="text-secondary">
                    {movie.Video.VideoTotalViews} views
                  </span> */}

                    {/* Mobile Ads */}
                    {isMobile ? (
                      <AdSlot
                        sizes={[[ads.topMobileAdWidth, ads.topMobileAdHieght]]}
                        adUnit={ads.topAdMobile}
                        onSlotIsViewable={(dfpEventData) => AdImpression()}
                      />
                    ) : (
                      <></>
                    )}

                    {/* Show description on desktop and mobile if chat is disabled */}
                    {!isMobile || !movie?.Video.IsChat ? (
                      <p className="mt-2 line-clamp" style={{ color: "#aaa" }}>
                        {movie.Video.VideoDescription}
                      </p>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="col-lg-12 p-0">
                {/* mobile bottom ads */}
                <div className="mt-2 ml-auto mr-auto">
                  <div>
                    {ads.allow && ads.bottomBannerAdMobile ? (
                      ads.bottomBannerAdMobile.includes("http") ? (
                        <div style={{ marginTop: "10px" }}>
                          <ReactJWPlayer
                            playerId="my-unique-id1"
                            playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                            isAutoPlay={true}
                            isMuted={true}
                            isSkipable={false}
                            onOneHundredPercent={onRestartAd}
                            onAdSkipped={onRestartAd}
                            onAdPlay={() => {
                              AdImpression();
                            }}
                            file={
                              "https://s3.eu-central-1.amazonaws.com/tapmad.com/web/videos/blank.mp4"
                            }
                            onAdComplete={onRestartAd}
                            generatePrerollUrl={() => ads.bottomBannerAdMobile}
                            customProps={{
                              controls: true,
                            }}
                          />
                        </div>
                      ) : ads.bottomBannerAdMobile &&
                        ads.bottomMobileWidth &&
                        ads.bottomMobileHeight ? (
                        <DFPSlotsProvider dfpNetworkId="28379801">
                          <div className="desktop-ads">
                            <AdSlot
                              sizes={[
                                [ads.bottomMobileWidth, ads.bottomMobileHeight],
                              ]}
                              adUnit={ads.bottomBannerAdMobile}
                              onSlotIsViewable={(dfpEventData) =>
                                AdImpression()
                              }
                            />
                          </div>
                        </DFPSlotsProvider>
                      ) : null
                    ) : null}
                  </div>
                </div>
                {movie && movie.Video.IsChat ? (
                  <div className="the-shop">
                    {/* <PlayerShop />  */}
                    <PSLComponent channel={movie.Video} />
                    <br />
                  </div>
                ) : (
                  <></>
                )}

                {/* Banner bottom Ad */}

                <div>
                  {ads.allow && ads.bottomBannerAd ? (
                    <DFPSlotsProvider dfpNetworkId="28379801">
                      <div className="desktops-ads text-center d-none d-lg-block d-md-block">
                        <AdSlot
                          sizes={[[970, 250]]}
                          adUnit={ads.bottomBannerAd}
                          onSlotIsViewable={(dfpEventData) => AdImpression()}
                        />
                      </div>
                    </DFPSlotsProvider>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            {!isMobile ? (
              <div className="col-lg-3 text-center pt-3 d-lg-block d-md-block">
                {/* Side Add desktop start*/}
                <div className="d-none d-lg-block d-md-block">
                  {ads.allow && ads.rightAd ? (
                    ads.rightAd.includes("http") ? (
                      <div style={{ marginTop: "65px" }}>
                        <ReactJWPlayer
                          playerId="my-unique-id1"
                          playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                          isAutoPlay={true}
                          isMuted={true}
                          isSkipable={false}
                          onOneHundredPercent={onRestartAd}
                          onAdSkipped={onRestartAd}
                          onAdPlay={() => {
                            AdImpression();
                          }}
                          file={
                            "https://s3.eu-central-1.amazonaws.com/tapmad.com/web/videos/blank.mp4"
                          }
                          onAdComplete={onRestartAd}
                          generatePrerollUrl={() =>
                            ads.rightAd && ads.allow ? ads.rightAd : ""
                          }
                          customProps={{
                            controls: true,
                          }}
                        />
                      </div>
                    ) : (
                      <DFPSlotsProvider dfpNetworkId="28379801">
                        <div className="desktop-ads">
                          <AdSlot
                            sizes={[[300, 250]]}
                            adUnit={ads.rightAd}
                            onSlotIsViewable={(dfpEventData) => AdImpression()}
                          />
                        </div>
                      </DFPSlotsProvider>
                    )
                  ) : null}

                  {ads.allow && isAutoPlay && ads.rightVideoAd ? (
                    ads.rightVideoAd.includes("http") ? (
                      <div style={{ marginTop: "65px" }}>
                        <ReactJWPlayer
                          playerId="my-unique-id1"
                          playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                          isAutoPlay={true}
                          isMuted={true}
                          isSkipable={false}
                          onAdPlay={() => {
                            AdImpression();
                          }}
                          onOneHundredPercent={onRestartAd}
                          onAdSkipped={onRestartAd}
                          file={
                            "https://s3.eu-central-1.amazonaws.com/tapmad.com/web/videos/blank.mp4"
                          }
                          onAdComplete={onRestartAd}
                          generatePrerollUrl={() =>
                            ads.rightVideoAd && ads.allow
                              ? ads.rightVideoAd
                              : ""
                          }
                          customProps={{
                            controls: true,
                          }}
                        />
                      </div>
                    ) : (
                      <DFPSlotsProvider dfpNetworkId="28379801">
                        <div className="desktop-ads">
                          <AdSlot
                            sizes={[[300, 250]]}
                            adUnit={ads.rightVideoAd}
                            onSlotIsViewable={(dfpEventData) => AdImpression()}
                          />
                        </div>
                      </DFPSlotsProvider>
                    )
                  ) : null}
                </div>
                {/* side add desktop end */}

                <div
                  className="text-left mt-3 related-video"
                  style={{ height: "100vh", overflow: "scroll" }}
                >
                  <h5>Related Videos</h5>
                  <div>
                    {relatedVideo.length
                      ? relatedVideo.map((video, i) => {
                          let slug = SEOFriendlySlugsForVideo(video);
                          return (
                            <>
                              <Link
                                href={slug}
                                replace={true}
                                shallow={false}
                                key={i}
                              >
                                <a>
                                  <RelatedProductCard video={video} />
                                </a>
                              </Link>
                            </>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
