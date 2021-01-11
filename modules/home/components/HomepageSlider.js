import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import {
  basicSliderConfig,
  SEOFriendlySlugsIsCategoryTrue,
  SEOFriendlySlugsIsCategoryFalse,
} from "../../../services/utils";

const HomepageSlider = ({ movies }) => {
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

  function handleOnClick(mov) {
    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
      // prevent link click if the element was dragged
      e.preventDefault();
    }
  }

  console.log("Movies: ", movies);

  return (
    <div>
      {movies &&
        movies.map((movieSection, row) => {
          return (
            <div className="col-12 p-lg-1 p-0" key={row}>
              <h5 className="ml-2 my-3">{movieSection.SectionName}</h5>
              <div>
                <Slider {...settings}>
                  {movieSection && !movieSection.IsCategories
                    ? movieSection.Videos.map((mov, index) => {
                        let slug = SEOFriendlySlugsIsCategoryFalse(
                          mov,
                          "watch/live"
                        );
                        return (
                          <Link href={slug} key={index}>
                            <a
                              onMouseDown={(e) => handleOnMouseDown(e)}
                              onClick={(e) => handleOnClick(e)}
                              // onClick={(e) => SEOFriendlySlugsIsCategoryFalse(mov, "watch/live")}
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
                    : movieSection.Categories.map((mov, index) => {
                        let slug = SEOFriendlySlugsIsCategoryTrue(
                          mov,
                          "category/season"
                        );
                        return (
                          <Link href={slug} key={index}>
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
                                  />
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
