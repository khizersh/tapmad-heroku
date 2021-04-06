import React from "react";
import { AdSlot } from "react-dfp/lib/adslot";
import { DFPSlotsProvider } from "react-dfp";

const HomePageAd = ({ desktop, mobile, sizeDesktop, sizeMobile }) => {
  let widthDesktop, widthMobile, heightDesktop, heightMobile;

  widthDesktop = +sizeDesktop.split(",")[0];
  heightDesktop = +sizeDesktop.split(",")[1];

  widthMobile = +sizeMobile.split(",")[0];
  heightMobile = +sizeMobile.split(",")[1];

  return (
    <div className="text-center my-3">
      <DFPSlotsProvider dfpNetworkId="28379801">
        <div className="desktop-ads d-none d-lg-block d-md-block">
          <AdSlot sizes={[[widthDesktop, heightDesktop]]} adUnit={desktop} />
        </div>
        <div className="desktops-ads text-center d-lg-none d-md-none">
          <AdSlot sizes={[[widthMobile, heightMobile]]} adUnit={mobile} />
        </div>
      </DFPSlotsProvider>
    </div>
  );
};

export default HomePageAd;
