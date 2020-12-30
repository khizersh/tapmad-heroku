import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { basicSliderConfig, SEOFriendlySlugs } from "../../../services/utils";

const HomepageSlider = ({ movies }) => {
  var settings = basicSliderConfig(8);
  function handleMouseOver(index) {
    document.getElementsByClassName("slick-list")[index].style.overflow =
      "visible";
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
  }
  function handleMouseOut(index) {
    document.getElementsByClassName("slick-list")[index].style.overflow =
      "hidden";
    document.getElementsByTagName("body")[0].style.overflowX = "visible";
  }
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
                    ? movieSection.Videos.map((e, index) => {
                        let slug = SEOFriendlySlugs(e, "live");
                        return (
                          <Link href={slug} key={index}>
                            <a>
                              <div
                                className="tm-mv-bx"
                                key={index}
                                onMouseOver={() => handleMouseOver(row)}
                                onMouseOut={() => handleMouseOut(row)}
                              >
                                <div className="movies-images">
                                  <img
                                    src={e.NewChannelThumbnailPath}
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
                                      {e.VideoName}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        );
                      })
                    : movieSection.Categories.map((e, index) => {
                        let slug = SEOFriendlySlugs(e, "season");
                        return (
                          <Link href={slug} key={index}>
                            <a>
                              <div
                                className="tm-mv-bx"
                                onMouseOver={() => handleMouseOver(row)}
                                onMouseOut={() => handleMouseOut(row)}
                                key={index}
                              >
                                <div className="movies-images">
                                  <img
                                    src={e.NewCategoryImage}
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
                                      {e.CategoryName}
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
