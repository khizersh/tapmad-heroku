import React, { useContext } from "react";
import Slider from "react-slick";
import { CatchupContext } from "../../contexts/CatchupContext";
import { basicSliderConfig } from "../../services/utils";

const TabSlider = () => {
  const { updateSelectedTab, catchupState } = useContext(CatchupContext);
  const settings = basicSliderConfig(7, 2);

  const onClickTab = (tab) => {
    updateSelectedTab(tab);
  };

  return (
    <div>
      <style jsx>
        {`.slick-slide {padding: 0; }`}
      </style>
      {catchupState.tabs && catchupState.tabs.length && (
        <Slider {...settings}>
          {catchupState.tabs
            ? catchupState.tabs.map((m, i) => (
                <div
                  key={i}
                  className={`tab p-3 btn ${
                    catchupState.selectedTab.TabId == m.TabId
                      ? "active-tab"
                      : ""
                  }`}
                  onClick={() => onClickTab(m)}
                >
                  <img src={m.TabPosterPath} width="100%" alt={m.TabName} />
                </div>
              ))
            : null}
        </Slider>
      )}
    </div>
  );
};

export default TabSlider;
