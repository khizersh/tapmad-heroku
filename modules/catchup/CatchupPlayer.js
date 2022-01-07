import React, { useState, useEffect, useContext } from "react";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import ReactJWPlayer from "react-jw-player";
import Link from "next/link";
import { AuthService } from "../auth/auth.service";
import { DashboardService } from "../dashboard/Dashboard.Service";
import RelatedProductCard from "../movies/components/RelatedProductCard";
import PlayerShop from "../player-shop/player-shop";
import { PlayerService } from "../../modules/single-movie/Player.service";
import { useRouter } from "next/router";
import { isAuthentictedUser, SEOFriendlySlugsForVideo } from "../../services/utils";
import { VideoWatched } from "../../services/gtm";
var fired = false;
export default function CatchupPlayer({ video, videoList }) {

  const router = useRouter();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [adDuration, setAdDuration] = useState(200000);
  const [mounted, setMounted] = useState(false);
  const [movie, setMovie] = useState(null);
  const [local, setLocal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLink, setVideoLink] = useState(null);
  const [adsApiCalled, setAdsApiCalled] = useState(false);
  const [relatedVideo, setRelatedVideos] = useState([]);
  const [ads, setAds] = useState({
    allow: false,
    topAd: "",
    onVideo: "",
    rightAd: "",
    bottomBannerAd: "",
    rightVideoAd: "",
  });

  if (!mounted) {
    if (!movie) {
      setMovie(video);
      setMounted(true);

      if (video.IsVideoChannel) {
        setVideoLink({
          highQuality: video.ChannelStreamUrlWHQ,
          mediumQuality: video.ChannelStreamUrlWMQ,
          lowQuality: video.ChannelStreamUrlWLQ,
        });
      } else {
        setVideoLink({
          highQuality: video.VideoStreamUrlHQ,
          mediumQuality: video.VideoStreamUrlMQ,
          lowQuality: video.VideoStreamUrlLQ,
        });
      }
    }
  }
  function onRestartAd() {
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsAutoPlay(true);
    }, adDuration * 1000);
  }

  useEffect(() => {
    setIsMobile(window.screen.width < 639);
    if (video.IsVideoFree == false) {
      if (!isAuthentictedUser()) {
        router.push("/sign-up?tab=1&packageId=2");
      }
    }
  }, []);


  async function getRelatedChannels() {
    if (videoList && videoList.length) {
      setRelatedVideos(videoList);
    }
  }
  useEffect(async () => {
    // verifyURL(router, movies.Video.VideoName);
    // await getRelatedChannels();
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
  }, [router, adsApiCalled]);

  useEffect(() => {
    fired = false;
    setMovie(video);
    if (video.IsVideoChannel) {
      setVideoLink({
        highQuality: video.ChannelStreamUrlWHQ,
        mediumQuality: video.ChannelStreamUrlWMQ,
        lowQuality: video.ChannelStreamUrlWLQ,
      });
    } else {
      setVideoLink({
        highQuality: video.VideoStreamUrlHQ,
        mediumQuality: video.VideoStreamUrlMQ,
        lowQuality: video.VideoStreamUrlLQ,
      });
    }
  }, [video]);


  return (
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
                        
                          sizes={[[728,90]]}
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
                    if (e.currentTime > 3 && !fired) {
                      VideoWatched({ Video: video });
                      fired = true;
                    } else {
                      return
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
                  generatePrerollUrl={() =>
                    ads.onVideo && ads.allow ? ads.onVideo : ""
                  }
                  customProps={{
                    controls: true,
                    sources: [
                      {
                        file: videoLink && videoLink.lowQuality,
                        label: "HD",
                      },
                      {
                        file: videoLink && videoLink.lowQuality,
                        label: "LQ",
                      },
                      {
                        file: videoLink && videoLink.lowQuality,
                        label: "MQ",
                      },
                    ],
                  }}
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
                {movie?.Video ? <PSLComponent channel={movie.Video} /> : null}
                {/* {movie && movie.Video.IsChat ? (
                  <div className="the-shop"> */}
                    {/* <PlayerShop />  */}
                  
                    {/* <br />
                  </div>
                ) : (
                  <></>
                )} */}

                {/* Banner bottom Ad */}

                {/* <div>
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
                </div> */}
                {/* Banner bottom Ad end*/}
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

                  {/* side 3rd ad */}
                  {/* <div className="mt-3 d-sm-none d-md-block">
                    <DFPSlotsProvider dfpNetworkId="28379801">
                      <div className="desktop-ads">
                        <AdSlot
                          sizes={[[320, 50]]}
                          adUnit={"MobileBannerFeatured"}
                          onSlotIsViewable={(dfpEventData) => AdImpression()}
                        />
                      </div>
                    </DFPSlotsProvider>
                  </div> */}
                  {/* side 3rd ad end*/}

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

                {/* <div
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
                </div> */}
              </div>
            ) : null}
          </div>
        </div>
      </div>
  );
}
