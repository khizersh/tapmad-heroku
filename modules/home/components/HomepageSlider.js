import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { loggingTags } from "../../../services/apilinks";
import { IsCategory, IsLiveChannel } from "../../../services/constants";
import { actionsRequestContent } from "../../../services/http-service";
import {
  basicSliderConfig,
  setUrlAccordingToVideoType,
  isAuthentictedUser,
} from "../../../services/utils";
import { useRouter } from "next/router";

const HomepageSlider = ({ movies }) => {
  const router = useRouter();
  var settings = basicSliderConfig(8);
  const [clientXonMouseDown, setClientXonMouseDown] = React.useState(null);
  const [clientYonMouseDown, setClientYonMouseDown] = React.useState(null);

  function handleMouseOver(index) {
    document.getElementsByClassName("slick-list")[index + 1].style.overflow =
      "visible";
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
  }
  function handleMouseOut(index) {
    document.getElementsByClassName("slick-list")[index + 1].style.overflow =
      "hidden";
    document.getElementsByTagName("body")[0].style.overflowX = "visible";
  }

  function handleOnMouseDown(e) {
    e.preventDefault(); // stops weird link dragging effect
    setClientXonMouseDown(e.clientX);
    setClientYonMouseDown(e.clientY);
  }

  function handleOnClick(e, mov) {
    console.log("Lol");
    dataLayer.push({ "event": "related_video" });

    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
      e.preventDefault();
      // prevent link click if the element was dragged
    } else {
      let body = {
        event: loggingTags.click,
        clickedItemId: mov.VideoEntityId,
        clickedItemName: mov.VideoName,
      };
      actionsRequestContent(body);
    }
  }

  return (
    <div className="mt-lg-5 pt-lg-5 pt-md-5 mt-md-5 pt-5">
      {movies &&
        movies.length > 0 &&
        movies.map((movieSection, row) => {
          return (
            <div className="col-12 p-lg-1 p-0" key={row}>
              <h5 className="ml-2 my-3">{movieSection.SectionName}</h5>
              <div>
                <Slider {...settings}>
                  {movieSection &&
                    !movieSection.IsCategories &&
                    movieSection.Videos &&
                    movieSection.Videos.length > 0
                    ? movieSection.Videos.map((mov, index) => {
                      let slug = setUrlAccordingToVideoType(
                        mov,
                        IsLiveChannel
                      );
                      return (
                        <Link
                          href={slug}
                          key={index}
                          passHref={true}
                          shallow={true}
                        >
                          <a
                            onMouseDown={(e) => handleOnMouseDown(e)}
                            onClick={(e) => handleOnClick(e, mov)}
                          >
                            <div
                              className="tm-mv-bx"
                              key={index}
                              onMouseOver={() => handleMouseOver(row)}
                              onMouseOut={() => handleMouseOut(row)}
                            >
                              <div className="movies-images">
                                <img
                                  src={mov.NewChannelThumbnailPath}
                                  style={{ width: "100%" }}
                                />
                                {mov.IsVideoFree ? null : (
                                  <div className="live_side">Premium</div>
                                )}
                              </div>
                              <div className="tm-mv-items">
                                <div className="tm-mv-name">
                                  <div
                                    style={{
                                      fontSize: "10px",
                                      color: "white",
                                    }}
                                  >
                                    {mov.VideoName}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                    })
                    : movieSection &&
                    movieSection.Categories &&
                    movieSection.Categories.map((mov, index) => {
                      let slug = setUrlAccordingToVideoType(mov, IsCategory);
                      return (
                        <Link
                          href={slug}
                          key={index}
                          passHref={true}
                          shallow={true}
                        >
                          <a
                            onMouseDown={(e) => handleOnMouseDown(e)}
                            onClick={(e) => handleOnClick(e, mov)}
                          >
                            <div
                              className="tm-mv-bx"
                              onMouseOver={() => handleMouseOver(row)}
                              onMouseOut={() => handleMouseOut(row)}
                              key={index}
                            >
                              <div className="movies-images">
                                <img
                                  src={mov.NewCategoryImage}
                                  style={{ width: "100%" }}
                                />
                                {mov.IsVideoFree
                                  ? null
                                  : mov.PackageName && (
                                    <div className="live_side">
                                      {mov.PackageName}
                                    </div>
                                  )}
                              </div>
                              <div className="tm-mv-items">
                                <div className="tm-mv-name">
                                  <div
                                    style={{
                                      fontSize: "10px",
                                      color: "white",
                                    }}
                                  >
                                    {mov.CategoryName}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                </Slider>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomepageSlider;
