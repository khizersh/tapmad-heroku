import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { basicSliderConfig, SEOFriendlySlugs } from "../../../services/utils";

const HomepageSlider = ({ movies }) => {
  var settings = basicSliderConfig(8);
  return (
    <div>
      {movies &&
        movies.map((movieSection, index) => {
          return (
            <div className="col-12 p-lg-1 p-0" key={index}>
              <h5 className="ml-2 my-3">{movieSection.SectionName}</h5>
              <div>
                <Slider {...settings}>
                  {movieSection && !movieSection.IsCategories
                    ? movieSection.Videos.map((e, index) => {
                        let slug = SEOFriendlySlugs(e, "live");
                        return (
                          <div className="tm-mv-bx" key={index}>
                            <Link href={slug} key={index}>
                              <a className="movies-images">
                                <img
                                  src={e.NewChannelThumbnailPath}
                                  style={{ width: "100%" }}
                                />
                              </a>
                            </Link>
                            <div className="tm-mv-items">
                              <div className="tm-mv-name">
                                <div style={{ fontSize: "10px" }}>
                                  {e.VideoName}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : movieSection.Categories.map((e, index) => {
                        let slug = SEOFriendlySlugs(e, "season");
                        return (
                          <div className="tm-mv-bx" key={index}>
                            <Link href={slug} key={index}>
                              <a className="movies-images">
                                <img
                                  src={e.NewCategoryImage}
                                  style={{ width: "100%" }}
                                />
                              </a>
                            </Link>
                            <div className="tm-mv-items">
                              <div className="tm-mv-name">
                                <div style={{ fontSize: "10px" }}>
                                  {e.CategoryName}
                                </div>
                              </div>
                            </div>
                          </div>
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
