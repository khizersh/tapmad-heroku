import React, { useState, useEffect, useContext } from "react";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import { AuthService } from "../../auth/auth.service";
import { DashboardService } from "../../dashboard/Dashboard.Service";
// import PlayerShop from "../../player-shop/player-shop";
import { PlayerService } from "../Player.service";
import { useRouter } from "next/router";
import { VideoWatched } from "../../../services/gtm";
import dynamic from "next/dynamic";
import ReactJWPlayer from "react-jw-player";
import RelatedProductCard from "../../../modules/movies/components/RelatedProductCard";
import { isAuthentictedUser, SEOFriendlySlugsForVideo } from "../../../services/utils";
import Link from "next/link";
var fired = false;
const PSLComponent = dynamic(() =>
  import("../../../components/psl/psl-component")
);

export default function Player({ movies }) {
  const router = useRouter();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [adDuration, setAdDuration] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [movie, setMovie] = useState(null);
  const [videoLink, setVideoLink] = useState(null);
  const [local, setLocal] = useState(null);
  const [relatedVideo, setRelatedVideos] = useState([]);
  const [ads, setAds] = useState({
    allow: false,
    topAd: "",
    onVideo: "",
    rightAd: "",
    bottomBannerAd: "",
    bottomBannerAdMobile: "",
    rightVideoAd: "",
  });

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

  async function getRelatedChannels() {
    const res = await PlayerService.getRelatedChannelsOrVODData(
      movie.Video.VideoEntityId,
      movie.Video.IsVideoChannel ? 1 : 0
    );
    if (res.data && res?.data?.Sections?.length > 0 && res.responseCode == 1) {
      setRelatedVideos(res.data.Sections[0].Videos);
    }
  }

  useEffect(async () => {
    await getRelatedChannels();

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
          topMobileAdHieght: data.topMobileAdHieght,
          topMobileAdWidth: data.topMobileAdWidth,
          videoAdDuration: data.videoAdDuration,
        });
        setAdDuration(data.videoAdDuration);
      }
    }
  }, [router, ads.topMobileAdHieght]);


  // video links
  useEffect(() => {
    fired = false;
    setMovie(movies);
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
  }, [movies]);

  useEffect(() => {
    const header = document.getElementById("player-div1");
    const sticky = header.offsetTop + 100;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        if (window.screen.width < 639) {
          header.classList.add("sticky-value");
        } else {
          header.classList.remove("sticky-value");
        }
      } else {
        header.classList.remove("sticky-value");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  useEffect(() => {
    if (movies.Video.IsVideoFree == false) {
      if (!isAuthentictedUser()) {
        router.push("/sign-up");
      }
    }
  }, [])
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <div className="col-12 p-0">
              {/* Top Ad */}
              {ads.allow ? (
                <div className="text-center my-3">
                  <DFPSlotsProvider dfpNetworkId="28379801">
                    {ads.topAdDesktop && (
                      <div className="desktop-ads d-none d-lg-block d-md-block">
                        <AdSlot sizes={[[728, 90]]} adUnit={ads.topAdDesktop} />
                      </div>
                    )}
                    {ads.topAdMobile && ads.topMobileAdWidth && (
                      <div className="desktops-ads text-center d-lg-none d-md-none">
                        <AdSlot
                          sizes={[
                            [ads.topMobileAdWidth, ads.topMobileAdHieght],
                          ]}
                          adUnit={ads.topAdMobile}
                        />
                      </div>
                    )}
                  </DFPSlotsProvider>
                </div>
              ) : null}
              <div
                id="player-div1"
                className="player-div"
                style={{ border: "1px solid white" }}
              >
                <ReactJWPlayer
                  onTime={(e) => {
                    if (e.currentTime > 3 && !fired) {
                      VideoWatched(movies);
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
                />
              </div>
            </div>
            <div className="col-lg-12 p-0">
              {movie && movie.Video ? (
                <>
                  <h1 className="mt-3 h5">{movie.Video.VideoName}</h1>
                  {/* <span className="text-secondary">
                    {movie.Video.VideoTotalViews} views
                  </span> */}
                  <p style={{ color: "#aaa" }}>
                    {movie.Video.VideoDescription}
                  </p>
                </>
              ) : null}
            </div>

            <div className="col-lg-12 p-0">
              {movie && movie.IsPsl ? (
                <div className="the-shop">
                  {/* <PlayerShop />  */}
                  <PSLComponent channel={movie.Video} />
                  <br />
                </div>
              ) : null}

              {/* Banner bottom Ad */}

              <div>
                {ads.allow && ads.bottomBannerAd && (
                  <DFPSlotsProvider dfpNetworkId="28379801">
                    <div className="desktops-ads text-center d-none d-lg-block d-md-block">
                      <AdSlot
                        sizes={[[970, 250]]}
                        adUnit={ads.bottomBannerAd}
                      />
                    </div>
                  </DFPSlotsProvider>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-3 text-center pt-5 d-none d-lg-block d-md-block">
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
                      <AdSlot sizes={[[300, 250]]} adUnit={ads.rightAd} />
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
                      onOneHundredPercent={onRestartAd}
                      onAdSkipped={onRestartAd}
                      file={
                        "https://s3.eu-central-1.amazonaws.com/tapmad.com/web/videos/blank.mp4"
                      }
                      onAdComplete={onRestartAd}
                      generatePrerollUrl={() =>
                        ads.rightVideoAd && ads.allow ? ads.rightVideoAd : ""
                      }
                      customProps={{
                        controls: true,
                      }}
                    />
                  </div>
                ) : (
                  <DFPSlotsProvider dfpNetworkId="28379801">
                    <div className="desktop-ads">
                      <AdSlot sizes={[[300, 250]]} adUnit={ads.rightVideoAd} />
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
          <div className="m-auto d-block d-sm-none">
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
                ) : (
                  ads.bottomBannerAdMobile && (
                    <DFPSlotsProvider dfpNetworkId="28379801">
                      {console.log(
                        "ads.bottomBannerAdMobile: ",
                        ads.bottomBannerAdMobile
                      )}
                      <div className="desktop-ads">
                        {ads.bottomBannerAdMobile != "" ? (
                          <AdSlot
                            adUnit={ads.bottomBannerAdMobile}
                            sizes={[[300, 250]]}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </DFPSlotsProvider>
                  )
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
