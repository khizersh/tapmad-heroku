import React, { useContext } from "react";
import Slider from "react-slick";
import { CatchupContext } from "../../contexts/CatchupContext";
import { basicSliderConfig } from "../../services/utils";

const TabSlider = () => {
  const { updateSelectedTab, catchupState } = useContext(CatchupContext);
  const settings = basicSliderConfig(7, 2);
  console.log("catchupState: ", catchupState);

  const onClickTab = (tab) => {
    updateSelectedTab(tab);
  };

  return (
    <div className="">
      {catchupState.tabs && catchupState.tabs.length && (
        <Slider {...settings}>
          {catchupState.tabs
            ? catchupState.tabs.map((m) => (
                <div
                  className={`tab p-3 btn m-2 ${
                    catchupState.selectedTab.TabId == m.TabId
                      ? "active-tab"
                      : ""
                  }`}
                  onClick={() => onClickTab(m)}
                >
                  <img src={m.TabPosterPath} width="100%" />
                </div>
              ))
            : null}
        </Slider>
      )}
    </div>
  );
};

export default TabSlider;
