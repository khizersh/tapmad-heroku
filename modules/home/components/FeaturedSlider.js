import React from "react";
import Slider from "react-slick";
import { basicSliderConfig } from "../../../services/utils";

export default function HomepageFeatured({ featured }) {
  var settings = basicSliderConfig(3, 2);

  return (
    <div>
      <h5>Featured</h5>
      <Slider {...settings}>
        {featured.WebBanners.map((e, i) => {
          return (
            <div key={i}>
              <img src={e.TabPosterPath} className="img-fluid" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
