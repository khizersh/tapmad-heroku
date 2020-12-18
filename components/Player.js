import React, { useState } from "react";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import ReactJWPlayer from "react-jw-player";

export default function Player({ movie }) {
  
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [adDuration, setAdDuration] = useState(300000);
  function onRestartAd() {
    console.log("Ad Complete");
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsAutoPlay(true);
    }, adDuration);
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-9">
            <div className="col-12">
              {/* Top Ad */}
              <div className="mt-5 text-center">
                <DFPSlotsProvider dfpNetworkId="28379801">
                  <div className="desktop-ads">
                    <AdSlot
                      sizes={[[728, 90]]}
                      adUnit={"Tapmad_LB_Desktop_HP_3"}
                    />
                  </div>
                </DFPSlotsProvider>
              </div>
              <div style={{ border: "1px solid white", marginTop: "65px" }}>
                <ReactJWPlayer
                  playerId="my-unique-id"
                  playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                  isAutoPlay={false}
                  file={
                    movie && movie.Video
                      ? movie.Video.VideoStreamUrlLQ
                      : "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8?"
                  }
                  generatePrerollUrl={() =>
                    "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/Tapmad_320x50_HP_Android_App/MastHead_Video_Andoid&description_url=%5Bplaceholder%5D&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=1"
                  }
                  customProps={{
                    controls: true,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              {movie && movie.Video ? (
                <h5 className="mt-3">{movie.Video.VideoName}</h5>
              ) : null}
            </div>
            {/* Banner Add */}
            <div className="col-lg-12">
              <DFPSlotsProvider dfpNetworkId="28379801">
                <div className="desktops-ads">
                  <AdSlot
                    sizes={[[970, 250]]}
                    adUnit={"Tapmad_SLB_Desktop_PP"}
                  />
                  {/* <AdSlot
                    sizes={[[300, 250]]}
                    adUnit={"Tapmad_MREC_2_Desktop"}
                  /> */}
                </div>
              </DFPSlotsProvider>
              {/* <DFPSlotsProvider dfpNetworkId="28379801">
                <div className="desktop-ads">
                  <AdSlot sizes={[[300, 250]]} adUnit={"Desktop_MREC"} />
                </div>
              </DFPSlotsProvider> */}
            </div>
          </div>
          {/* Side Add */}
          <div className="col-lg-3 text-center pt-5 ">
            <DFPSlotsProvider dfpNetworkId="28379801">
              <div className="desktop-ads">
                {/* <AdSlot sizes={[[728, 90]]} adUnit={"Tapmad_LB_Desktop_HP_3"} /> */}
                <AdSlot sizes={[[300, 250]]} adUnit={"Tapmad_MREC_2_Desktop"} />
              </div>
            </DFPSlotsProvider>

            {isAutoPlay ? (
              <div style={{ border: "1px solid white", marginTop: "65px" }}>
                <ReactJWPlayer
                  playerId="my-unique-id1"
                  playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
                  isAutoPlay={true}
                  isMuted={true}
                  isSkipable = {false}
                  onOneHundredPercent={onRestartAd}
                  onAdSkipped={onRestartAd}
                  file={
                    movie && movie.Video
                      ? movie.Video.VideoStreamUrlLQ
                      : "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8?"
                  }
                  // file={
                  //   movie && movie.Video
                  //     ? movie.Video.VideoStreamUrlLQ
                  //     : "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8?"
                  // }
                  onAdComplete = {onRestartAd}
                  generatePrerollUrl={() =>
                    "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/MREC_Video_Popup&description_url=[placeholder]&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=[placeholder]&vpmute=1&vpa=auto&url=https%3A%2F%2Fwww.tapmad.com&vpos=preroll"
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
