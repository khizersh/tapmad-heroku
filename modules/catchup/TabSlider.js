import React from "react";
import Slider from "react-slick";
import { basicSliderConfig } from "../../services/utils";

const TabSlider = ({ tabs }) => {
  const settings = basicSliderConfig(7, 5);

  const onClickTab = (tab) => {
    console.log("click: ", tab);
  };
  return (
    <div className="">
      {tabs && tabs.length && (
        <Slider {...settings}>
          {tabs.map((m) => (
            <div
              className={`tab p-3 btn m-2 active-tab`}
              onClick={() => onClickTab(m)}
            >
              <img src={m.TabPosterPath} width="100%" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default TabSlider;
