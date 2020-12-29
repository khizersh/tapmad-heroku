import React from "react";
import Slider from "react-slick";
import { basicSliderConfig } from "../../../services/utils";
import HomepageSlider from "../../home/components/HomepageSlider";

export default function LiveChannels({ channel }) {
  var bannerSettings = basicSliderConfig(1);
  return (
    <div>
      <Slider {...bannerSettings}>
        {channel.Banner.map((e, index) => {
          return (
            <div key={index}>
              <img src={e.WebBannerImage} style={{ width: "100%" }} />
            </div>
          );
        })}
      </Slider>
      <HomepageSlider movies={channel.Sections.Channels} />
    </div>
  );
}
