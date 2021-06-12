import React from "react";
import { AdSlot } from "react-dfp/lib/adslot";
import { DFPSlotsProvider } from "react-dfp";

const HomePageAd = ({ desktop, mobile, sizeDesktop, sizeMobile }) => {
  let widthDesktop, widthMobile, heightDesktop, heightMobile;
  console.log("sizeMobile: ",sizeMobile);

  let sizeDesk = sizeDesktop.trim();
  let sizeMob = sizeMobile.trim();

  widthDesktop = +sizeDesk.split(",")[0];
  heightDesktop = +sizeDesk.split(",")[1];

  widthMobile = +sizeMob.split(",")[0];
  heightMobile = +sizeMob.split(",")[1];

  return (
    <div className="text-center my-3">
      <DFPSlotsProvider dfpNetworkId="28379801">
        <div className="desktop-ads d-none d-lg-block d-md-block">
          {desktop && (
            <AdSlot sizes={[[widthDesktop, heightDesktop]]} adUnit={desktop} />
          )}
        </div>
        <div className="desktops-ads text-center d-lg-none d-md-none">
          {mobile && (
            <AdSlot sizes={[[widthMobile, heightMobile]]} adUnit={mobile} />
          )}
        </div>
      </DFPSlotsProvider>
    </div>
  );
};

export default HomePageAd;
