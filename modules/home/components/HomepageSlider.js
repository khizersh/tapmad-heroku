import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { loggingTags } from "../../../services/apilinks";
import { IsCategory, IsLiveChannel } from "../../../services/constants";
import { actionsRequestContent } from "../../../services/http-service";
import {
  basicSliderConfig,
  setUrlAccordingToVideoType,
} from "../../../services/utils";
import { useRouter } from "next/router";
import { AuthService } from "../../../modules/auth/auth.service";
import HomePageAd from "./HomePageAd";
import Image from 'next/image'

const HomepageSlider = ({ movies, ads }) => {
  const router = useRouter();
  var settings = basicSliderConfig(8);
  const [clientXonMouseDown, setClientXonMouseDown] = React.useState(null);
  const [clientYonMouseDown, setClientYonMouseDown] = React.useState(null);
  const [adsRow, setAdsRow] = useState([]);

  function handleMouseOver(index) {
    if (window.screen.width > 992) {
      document.getElementsByClassName("slick-list")[index + 1].style.overflow =
        "visible";
      document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    }
  }

  function handleMouseOut(index) {
    if (window.screen.width > 992) {
      document.getElementsByClassName("slick-list")[index + 1].style.overflow =
        "hidden";
      document.getElementsByTagName("body")[0].style.overflowX = "visible";
    } else {
      document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    }
  }

  function handleOnMouseDown(e) {
    e.preventDefault(); // stops weird link dragging effect
    setClientXonMouseDown(e.clientX);
    setClientYonMouseDown(e.clientY);
  }

  function handleOnClick(e, mov) {
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

  useEffect(() => {
    AuthService.getHomePageAdsDetail()
      .then((res) => {
        if (res.data.responseCode == 1) {
          setAdsRow(res.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    //  className="mt-lg-5 pt-lg-5 pt-md-5 mt-md-5 pt-5"
    <div>
      {movies &&
        movies.length > 0 &&
        movies.map((movieSection, row) => {
          return (
            <>
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
                                  {/* <img
                                    src={mov.NewChannelThumbnailPath}
                                    style={{ width: "100%" }}
                                    alt={"tapmad-" + mov.VideoName}
                                  /> */}
                                  <Image
                                    src={mov.NewChannelThumbnailPath}
                                    // style={{ width: "100%" }}
                                    className="w-100"
                                    height={304}
                                    width={228}
                                    // layout='fill'
                                    alt={"tapmad-" + mov.VideoName}
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
                        let slug = setUrlAccordingToVideoType(
                          mov,
                          IsCategory
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
                                onMouseOver={() => handleMouseOver(row)}
                                onMouseOut={() => handleMouseOut(row)}
                                key={index}
                              >
                                <div className="movies-images">
                                  {/* <img
                                      src={mov.NewCategoryImage}
                                      style={{ width: "100%" }}
                                      alt={"tapmad-" + mov.VideoName}
                                    /> */}
                                  <Image
                                    src={mov.NewCategoryImage}
                                    // style={{ width: "100%" }}
                                    className="w-100"
                                    height={304}
                                    width={228}
                                    // layout='fill'
                                    alt={"tapmad-" + mov.VideoName}
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
              {ads && adsRow.length
                ? adsRow.map((m) =>
                  m.row == row + 1 ? (
                    <HomePageAd
                      desktop={m.desktop}
                      mobile={m.mobile}
                      sizeDesktop={m.desktopSize}
                      sizeMobile={m.mobileSize}
                    />
                  ) : null
                )
                : null}
            </>
          );
        })}
    </div>
  );
};

export default HomepageSlider;
