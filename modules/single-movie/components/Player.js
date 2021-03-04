import React, { useState, useEffect } from "react";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import ReactJWPlayer from "react-jw-player";
import { getAdDetails } from "../../../services/apilinks";
import { get, post } from "../../../services/http-service";
import PlayerShop from "../../player-shop/player-shop";
import { PlayerService } from "../Player.service";

export default function Player({ movies }) {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [adDuration, setAdDuration] = useState(200000);
  const [mounted, setMounted] = useState(false);
  const [movie, setMovie] = useState(null);
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
      setMovie(movies);
    }
  }
  function onRestartAd() {
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsAutoPlay(true);
    }, adDuration);
  }

  async function getRelatedChannels() {
    const res = await PlayerService.getRelatedChannelsOrVODData(
      movie.Video.VideoEntityId,
      movie.Video.IsVideoChannel
    );

    if (res.data && res.responseCode == 1) {
      setRelatedVideos(res.data.Sections[0].Videos);
    }
  }

  useEffect(async () => {
    setMounted(true);
    let userId = localStorage.getItem("userId");
    let body = {
      Version: "V2",
      Language: "en",
      Platform: "web",
      ChannelOrVODId: movie.Video.VideoEntityId,
      UserId: userId,
      IsChannel: movie.Video.IsVideoChannel,
    };
    if (userId) {
      const res = await PlayerService.getVideoData(body);
      setMovie(res.data);
    }
  }, []);
  useEffect(async () => {
    await getRelatedChannels();
    const resp = await get("http://localhost:3000/" + getAdDetails);
    const data = PlayerService.checkAds(resp.data.data, "local");
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
  }, []);
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
              <div style={{ border: "1px solid white" }}>
                <ReactJWPlayer
                  playerId="my-unique-id"
                  playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                  isAutoPlay={true}
                  file={
                    movie && movie.Video
                      ? movie.Video.VideoStreamUrlLQ
                      : "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8?"
                  }
                  generatePrerollUrl={() =>
                    ads.onVideo && ads.allow ? ads.onVideo : ""
                  }
                  customProps={{
                    controls: true,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12 p-0">
              {movie && movie.Video ? (
                <>
                  <h5 className="mt-3">{movie.Video.VideoName}</h5>
                  <span className="text-secondary">
                    {movie.Video.VideoTotalViews} views
                  </span>
                  <p style={{ color: "#aaa" }}>
                    {movie.Video.VideoDescription}
                  </p>
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
                  <AdSlot sizes={[[300, 250]]} adUnit={"BlueKai_MREC_Banner"} />
                </div>
              </DFPSlotsProvider>
            )}

            {ads.allow && isAutoPlay && ads.rightVideoAd ? (
              <div style={{ border: "1px solid white", marginTop: "65px" }}>
                <ReactJWPlayer
                  playerId="my-unique-id1"
                  playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                  isAutoPlay={true}
                  isMuted={true}
                  isSkipable={false}
                  onOneHundredPercent={onRestartAd}
                  onAdSkipped={onRestartAd}
                  file={
                    movie && movie.Video
                      ? movie.Video.VideoStreamUrlLQ
                      : "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8?"
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
            ) : null}
            <div
              className="text-left mt-3"
              style={{ height: "100vh", overflow: "scroll" }}
            >
              <h5>Related Videos</h5>
              <div>
                {relatedVideo.length
                  ? relatedVideo.map((video, i) => {
                      return (
                        <div className="col-12 p-1" key={i}>
                          <div className="d-flex ">
                            <div>
                              <img
                                src={video.VideoImagePath}
                                alt={video.VideoName}
                                width="130px"
                              />
                            </div>
                            <div>
                              <div className="pl-2">
                                <h5
                                  className="card-title mb-1"
                                  style={{ fontSize: "13px" }}
                                >
                                  {video.VideoName}
                                </h5>
                                <p
                                  className="card-desc synopsis-card-text m-0"
                                  style={{ fontSize: "12px", color: "#6c757d" }}
                                >
                                  {video.VideoDescription}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
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
