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
import { SEOFriendlySlugsForVideo } from "../../services/utils";

export default function CatchupPlayer({ video, videoList }) {
  const router = useRouter();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [adDuration, setAdDuration] = useState(200000);
  const [mounted, setMounted] = useState(false);
  const [movie, setMovie] = useState(null);
  const [videoLink, setVideoLink] = useState(null);
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

  async function getRelatedChannels() {
    if (videoList && videoList.length) {
      setRelatedVideos(videoList);
    }
  }

  useEffect(async () => {
    await getRelatedChannels();
    const resp = await DashboardService.getAdData();
    const country = await AuthService.getGeoInfo();
    let data;

    if (country) {
      if (country.countryCode == "PK") {
        data = PlayerService.checkAds(resp, "local");
      } else {
        data = PlayerService.checkAds(resp, "international");
      }
    } else {
      data = PlayerService.checkAds(resp, "local");
    }
    if (data != null) {
      setAdDuration(data.videoAdDuration);
      setAds({
        allow: data.allow,
        onVideo: data.onVideo,
        topAdDesktop: data.topAdDesktop,
        topAdMobile: data.topAdMobile,
        rightAd: data.rightAd,
        bottomBannerAd: data.bottomBannerAd,
        rightVideoAd: data.rightVideoAd,
      });
    }
  }, [router, videoList]);

  useEffect(() => {
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
        lowQuality: movie.VideoStreamUrlLQ,
      });
    }
  }, [video]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-9">
            <div className="col-12 p-0">
              {/* Top Ad */}
              {ads.allow && ads.topAdDesktop && (
                <div className="text-center my-3">
                  <DFPSlotsProvider dfpNetworkId="28379801">
                    <div className="desktop-ads d-none d-lg-block d-md-block">
                      <AdSlot sizes={[[728, 90]]} adUnit={ads.topAdDesktop} />
                    </div>
                    <div className="desktops-ads text-center d-lg-none d-md-none">
                      <AdSlot sizes={[[320, 100]]} adUnit={ads.topAdMobile} />
                    </div>
                  </DFPSlotsProvider>
                </div>
              )}
              <div id="player-div2" className="player-div2" style={{ border: "1px solid white" }}>
                <ReactJWPlayer
                  playerId="my-unique-id"
                  playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
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
              {movie ? (
                <>
                  <h5 className="mt-3">{movie.VideoName}</h5>
                  <span className="text-secondary">
                    {movie.VideoTotalViews} views
                  </span>
                  <p style={{ color: "#aaa" }}>{movie.VideoDescription}</p>
                </>
              ) : null}
            </div>

            <div className="col-lg-12 p-0">
              {movie && movie.CookFeed ? (
                <div className="the-shop">
                  <PlayerShop />
                  <br />
                </div>
              ) : null}

              {/* Banner Add */}
              {ads.allow && ads.bottomBannerAd && (
                <DFPSlotsProvider dfpNetworkId="28379801">
                  <div className="desktops-ads text-center d-none d-lg-block d-md-block">
                    <AdSlot sizes={[[970, 250]]} adUnit={ads.bottomBannerAd} />
                  </div>
                </DFPSlotsProvider>
              )}
            </div>
          </div>
          {/* Side Add */}
          <div className="col-lg-3 text-center pt-5 ">
            {ads.allow && ads.rightAd && (
              <DFPSlotsProvider dfpNetworkId="28379801">
                <div className="desktop-ads">
                  <AdSlot sizes={[[300, 250]]} adUnit={ads.rightAd} />
                </div>
              </DFPSlotsProvider>
            )}

            {ads.allow && isAutoPlay && ads.rightVideoAd ? (
              <div style={{ marginTop: "65px" }}>
                <ReactJWPlayer
                  playerId="my-unique-id1"
                  playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                  isAutoPlay={true}
                  isMuted={true}
                  isSkipable={false}
                  onOneHundredPercent={onRestartAd}
                  onAdSkipped={onRestartAd}
                  file={"https://www.tapmad.com/tapmad.mp4"}
                  onAdComplete={onRestartAd}
                  generatePrerollUrl={() =>
                    ads.rightVideoAd && ads.allow ? ads.rightVideoAd : ""
                  }
                  customProps={{
                    controls: true,
                  }}
                />
              </div>
            ) : null}
            <div
              className="text-left mt-3"
              style={{ height: "100vh", overflow: "scroll" }}
            >
              <h5>Related Videos</h5>
              <div>
                {relatedVideo.length
                  ? relatedVideo.map((video, i) => {
                    let slug = SEOFriendlySlugsForVideo(video, true);
                    return (
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
                    );
                  })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
