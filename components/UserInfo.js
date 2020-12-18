import React from "react";
import ReactJWPlayer from "react-jw-player";
import { DFPSlotsProvider, AdSlot, DFPManager } from "react-dfp";

export default function UserInfo(props) {
  const [info, setInfo] = React.useState();
  const billboard = "Staging_billboard";

  function getIpInfo() {
    fetch(`http://ip-api.com/json/${props.clientIP}`)
      .then(e => e.json())
      .then(resp => {
        console.log(resp);
        setInfo(resp);
      });
  }
  React.useEffect(() => {
    getIpInfo();
  }, []);
  return (
    <div>
      {info
        ? `Incoming user is from ${info.country} with the ip ${props.clientIP}
`
        : "Fetching user details"}
      <div style={{ width: "500px" }}>
        <ReactJWPlayer
          playerId="my-unique-id"
          playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
          isAutoPlay={false}
          file="https://vodss.tapmad.com/vods/CokeFest/Day3/AsliHai/master.m3u8"
          generatePrerollUrl={() =>
            "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/Tapmad_320x50_HP_Android_App/MastHead_Video_Andoid&description_url=%5Bplaceholder%5D&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=1"
          }
          customProps={{
            controls: true
          }}
        />
      </div>
      <div>
        <b>Google ads</b>
        <div>
          <DFPSlotsProvider
            dfpNetworkId="108346865" //accout id
            targetingArguments={{ domain: "domain-name" }} //option: here is key value
            collapseEmptyDivs
          >
            <AdSlot
              sizes={[
                [970, 250],
                [970, 90],
                [728, 90],
                [468, 60],
                [320, 100],
                [320, 50]
              ]}
              sizeMapping={[
                {
                  viewport: [1280, 0],
                  sizes: [
                    [970, 250],
                    [970, 90]
                  ]
                },
                { viewport: [1008, 0], sizes: [[728, 90]] },
                { viewport: [600, 0], sizes: [[468, 60]] },
                {
                  viewport: [0, 0],
                  sizes: [
                    [320, 100],
                    [320, 50]
                  ]
                }
              ]}
              adUnit="Sdemo_HK01_campaign" // adunit id
            />
          </DFPSlotsProvider>
          <DFPSlotsProvider dfpNetworkId="181891612">
            <div className="desktop-ads">
              <AdSlot
                sizes={[
                  [600, 70],
                  [280, 70]
                ]}
                sizeMapping={[
                  { viewport: [600, 0], sizes: [[600, 70]] },
                  { viewport: [0, 0], sizes: [[280, 70]] }
                ]}
                adUnit={billboard}
              />
            </div>
          </DFPSlotsProvider>
        </div>
      </div>
    </div>
  );
}
