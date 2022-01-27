import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { basicSliderConfig, replaceCategoryToShows } from "../../../services/utils";

export default function HomepageFeatured({ featured }) {
  var settings = basicSliderConfig(3, 2);

  return (
    <div>
      <h5>{featured?.WebBanners?.length ? Featured : null}</h5>
      <Slider {...settings}>
        {featured.WebBanners.map((e, i) => {
          let url = replaceCategoryToShows(e.RedirectWebBannerImage); 
          return (
            <div key={i}>
              <Link href={url} shallow passHref>
                <a>
                  <img
                    src={e.TabPosterPath}
                    className="img-fluid"
                    alt="Featured"
                  />
                  <div className="play-btn">
                    <i className="fa fa-play rounded-circle pr-2"></i>Play
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
