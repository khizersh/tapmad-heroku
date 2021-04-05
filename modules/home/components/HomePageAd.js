import React from "react";
import { AdSlot } from "react-dfp/lib/adslot";
import { DFPSlotsProvider } from "react-dfp";

const HomePageAd = ({ desktop, mobile, sizeDesktop, sizeMobile }) => {
  return (
    <div className="text-center my-3">
      <DFPSlotsProvider dfpNetworkId="28379801">
        <div className="desktop-ads d-none d-lg-block d-md-block">
          <AdSlot sizes={[[sizeDesktop]]} adUnit={desktop} />
        </div>
        <div className="desktops-ads text-center d-lg-none d-md-none">
          <AdSlot sizes={[[sizeMobile]]} adUnit={mobile} />
        </div>
      </DFPSlotsProvider>
    </div>
  );
};

export default HomePageAd;
