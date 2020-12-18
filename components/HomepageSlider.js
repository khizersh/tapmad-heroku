import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const HomepageSlider = ({ movies }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,
  };
  function handleClick(event) {
    let cleanName = event.VideoName.split(" ").join("-").toLowerCase();
    let slug = `/watch/live/${cleanName}/${event.VideoEntityId}${
      event.IsVideoChannel ? "1" : "0"
    }`;
    return slug;
  }
  return (
    <div>
      {movies &&
        movies.map((movieSection, index) => {
          return (
            <div className="col-12" key={index}>
              <h5 className="my-3">{movieSection.SectionName}</h5>
              <div className="">
                <Slider {...settings}>
                  {movieSection && !movieSection.IsCategories
                    ? movieSection.Videos.map((e, index) => {
                        let slug = handleClick(e);
                        return (
                          <div className="mr-2" key={index}>
                            <Link href={slug} key={index}>
                              <a className="movies-images">
                                <img
                                  src={e.NewChannelThumbnailPath}
                                  style={{ width: "100%" }}
                                />
                              </a>
                            </Link>
                          </div>
                        );
                      })
                    : movieSection.Categories.map((e, index) => {
                        let slug = handleClick(e);
                        return (
                          <div className="mr-2" key={index}>
                            <Link href={slug} key={index}>
                              <a className="movies-images">
                                <img
                                  src={e.NewCategoryImage}
                                  style={{ width: "100%" }}
                                />
                              </a>
                            </Link>
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
