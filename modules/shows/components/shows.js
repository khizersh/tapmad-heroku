import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { basicSliderConfig } from "../../../services/utils";
import HomepageSlider from "../../home/components/HomepageSlider";

export default function Shows({ shows }) {
  var bannerSettings = basicSliderConfig(1, 1);
  return (
    <div>
      <Slider {...bannerSettings}>
        {shows.Banner.map((e, index) => {
          return (
            <Link href={e.BannerURL ? e.BannerURL : "/shows"} key={index} passHref>
              <a>
                <img
                  src={e.WebBannerImage}
                  style={{ width: "100%" }}
                  alt="Banner"
                />
              </a>
            </Link>
          );
        })}
      </Slider>
      <HomepageSlider movies={shows.Sections.Shows} ads={false} name={"Shows"}/>
    </div>
  );
}
