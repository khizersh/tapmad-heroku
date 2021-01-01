import React from "react";
import Slider from "react-slick";
import { basicSliderConfig } from "../../../services/utils";
export default function HomepageFeatured({ featured }) {
  var settings = basicSliderConfig(3);

  return (
    <div>
      <h5>Featured</h5>
      <Slider {...settings}>
        {featured.WebBanners.map((e) => {
          return (
            <div>
              <img
                src={e.WebBanner}
                style={{ height: "200px" }}
                className="img-fluid"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
