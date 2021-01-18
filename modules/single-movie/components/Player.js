import React, { useState, useEffect } from "react";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import ReactJWPlayer from "react-jw-player";
import { post } from "../../../services/http-service";
import PlayerShop from "../../player-shop/player-shop";

export default function Player({ movies }) {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const adDuration = 200000;
  const [mounted, setMounted] = useState(false);
  const [movie, setMovie] = useState(null);

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

  useEffect(async () => {
    setMounted(true);

    let userId = localStorage.getItem("userId");
    if (userId) {
      const res = await post(
        `https://api.tapmad.com/api/getEventPredicationGameChannel`,
        {
          Version: "V2",
          Language: "en",
          Platform: "web",
          ChannelOrVODId: movie.Video.VideoEntityId,
          UserId: userId,
          IsChannel: movie.Video.IsVideoChannel,
        }
      );

      setMovie(res.data);
    }
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-9">
            <div className="col-12 p-0">
              {/* Top Ad */}
              <div className="text-center my-3">
                <DFPSlotsProvider dfpNetworkId="28379801">
                  <div className="desktop-ads d-none d-lg-block d-md-block">
                    <AdSlot
                      sizes={[[728, 90]]}
                      adUnit={"Bluekai_Leaderboard_Player"}
                    />
                  </div>
                  <div className="desktops-ads text-center d-lg-none d-md-none">
                    <AdSlot
                      sizes={[[320, 100]]}
                      adUnit={"Testing_Dev_MW_320x100_Player"}
                    />
                  </div>
                </DFPSlotsProvider>
              </div>
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
                    "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/Testing_Dev_Desktop_MREC_Video&description_url=[placeholder]&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=[placeholder]&vpmute=1&vpa=auto&url=https%3A%2F%2Fwww.tapmad.com%2F&vpos=preroll"
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
            {/* Banner Add */}

            <div className="col-lg-12">
              <div>
                <PlayerShop />
                <br />
              </div>
              <DFPSlotsProvider dfpNetworkId="28379801">
                <div className="desktops-ads text-center d-none d-lg-block d-md-block">
                  <AdSlot
                    sizes={[[970, 250]]}
                    adUnit={"Testing_Dev_Player_Superleaderboard"}
                  />
                </div>
              </DFPSlotsProvider>
            </div>
          </div>
          {/* Side Add */}
          <div className="col-lg-3 text-center pt-5 ">
            <DFPSlotsProvider dfpNetworkId="28379801">
              <div className="desktop-ads">
                <AdSlot sizes={[[300, 250]]} adUnit={"BlueKai_MREC_Banner"} />
              </div>
            </DFPSlotsProvider>

            {isAutoPlay ? (
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
                    "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/Testing_Dev_Desktop_MREC_Video&description_url=[placeholder]&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=[placeholder]&vpmute=1&vpa=auto&url=https%3A%2F%2Fwww.tapmad.com%2F&vpos=preroll"
                  }
                  customProps={{
                    controls: true,
                  }}
                />
              </div>
            ) : null}
            {/* 
            <DFPSlotsProvider dfpNetworkId="108346865">
              <div className="desktop-ads">
                <AdSlot sizes={[[300, 250]]} adUnit={"Sdemo_HK01_campaign"} />
              </div>
            </DFPSlotsProvider> */}
          </div>
        </div>
      </div>
    </div>
  );
}
