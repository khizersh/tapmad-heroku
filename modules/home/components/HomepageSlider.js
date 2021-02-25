import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IsCategory, IsLiveChannel } from "../../../services/constants";
import {
  basicSliderConfig,
  setUrlAccordingToVideoType,
} from "../../../services/utils";
import { GolobalService } from "../../global-service";

const HomepageSlider = ({ movies }) => {
  // const [render, setRender] = useState(false);
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
    setClientXonMouseDown(e.clientX);
    setClientYonMouseDown(e.clientY);
    e.preventDefault(); // stops weird link dragging effect
  }

  function handleOnClick(e) {
    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
      // prevent link click if the element was dragged
      e.preventDefault();
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
                              onClick={(e) => handleOnClick(e)}
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
                                    loading="lazy"
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
                              onClick={(e) => handleOnClick(e)}
                              // onClick={(e) => SEOFriendlySlugsIsCategoryTrue(mov, "category/season")}
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
                                    loading="lazy"
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
