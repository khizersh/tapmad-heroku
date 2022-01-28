import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { IsCategory, IsLiveChannel } from "../../../services/constants";
import {
  basicSliderConfig,
  checkForBoolean,
  setUrlAccordingToVideoType,
  viewMoreCleanUrls,
} from "../../../services/utils";
import Image from "next/image";
import axios from "axios";

const Slider = dynamic(() => import("react-slick"));
const HomePageAd = dynamic(() => import("./HomePageAd"), { ssr: false });

const HomepageSlider = ({ movies, ads, name }) => {
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
  function getMoreSections(sectionDetails) {}
  function handleOnMouseDown(e) {
    e.preventDefault(); // stops weird link dragging effect
    setClientXonMouseDown(e.clientX);
    setClientYonMouseDown(e.clientY);
  }
  async function sendToAnalytics(sectionName, index, videoName) {
    const { UserEngagemnent } = await import("../../../services/gtm");
    UserEngagemnent(name, sectionName, index + 1, videoName);
  }

  function handleOnClick(e, mov) {
    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
      e.preventDefault();
      // prevent link click if the element was dragged
    } else {
    }
  }

  useEffect(async () => {
    const { getHomePageAdsDetail } = (
      await import("../../../modules/auth/auth.service")
    ).AuthService;
    getHomePageAdsDetail()
      .then((res) => {
        if (res.data.responseCode == 1) {
          setAdsRow(res.data.data);
        } else {
          setAdsRow([]);
        }
      })
      .catch((e) => {
        console.log(e);
        setAdsRow([]);
      });
    return () => [];
  }, []);
  return (
    <div>
      {movies &&
        movies.length > 0 &&
        movies.map((movieSection, row) => {
          let viewMoreSlug = viewMoreCleanUrls(
            movieSection.SectionName,
            movieSection.SectionId,
            name
          );
          return (
            <Fragment key={row}>
              <div className="col-12 p-lg-1 p-0" key={row}>
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="ml-2 my-3 h5">{movieSection.SectionName}</h2>
                  {name != "Homepage" ? (
                    movieSection.Videos.length > 8 ? (
                      <Link href={viewMoreSlug} passHref={true} shallow={true}>
                        <a>
                          <span
                            className="btn view-more-btn"
                            onClick={() => getMoreSections(movieSection)}
                          >
                            View All
                          </span>
                        </a>
                      </Link>
                    ) : null
                  ) : null}
                </div>
                <div>
                  <Slider {...settings}>
                    {movieSection &&
                    !movieSection.IsCategories &&
                    movieSection.Videos &&
                    movieSection.Videos.length > 0
                      ? movieSection.Videos.map((mov, index) => {
                          let slug = setUrlAccordingToVideoType(
                            mov,
                            name == "Shows" ? IsCategory : IsLiveChannel
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
                                onClick={(e) => (
                                  handleOnClick(e, mov),
                                  sendToAnalytics(
                                    movieSection.SectionName,
                                    index,
                                    mov.VideoName
                                  ).then(() => {})
                                )}
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
                                  />*/}
                                    {mov.NewChannelThumbnailPath ? (
                                      <Image
                                        src={mov.NewChannelThumbnailPath}
                                        height={304}
                                        width={228}
                                        loader={() =>
                                          mov.NewChannelThumbnailPath
                                        }
                                        // loading={"lazy"}
                                        // layout='fill'
                                        alt={"tapmad-" + mov.VideoName}
                                      />
                                    ) : null}

                                    {/* Crowns for Hompage to be done when backend adds to api  */}
                                    {checkForBoolean(mov.IsVideoChannel) ? (
                                      <div className="row">
                                        <div className="live_side">Live</div>
                                        <img
                                          className="live_side2 crown-img-live"
                                          src={mov.PackageImage}
                                          width={40}
                                        />
                                      </div>
                                    ) : checkForBoolean(
                                        mov.IsVideoFree
                                      ) ? null : (
                                      <div className="row">
                                        <img
                                          className="live_side2 crown-img-only"
                                          src={mov.PackageImage}
                                          width={40}
                                        />
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
                                onClick={(e) => (
                                  handleOnClick(e, mov),
                                  sendToAnalytics(
                                    movieSection.SectionName,
                                    index,
                                    mov.CategoryName
                                  )
                                )}
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
                                    {mov.NewCategoryImage ? (
                                      <Image
                                        src={mov.NewCategoryImage}
                                        height={304}
                                        width={228}
                                        loader={() => mov.NewCategoryImage}
                                        loading={"eager"}
                                        // layout='fill'
                                        alt={"tapmad-" + mov.VideoName}
                                      />
                                    ) : null}

                                    {mov.IsVideoFree
                                      ? null
                                      : mov.PackageImage && (
                                          <div className="live_side3 ">
                                            {/* {mov.PackageName} */}
                                            <img
                                              className="crown-img-only"
                                              src={mov.PackageImage}
                                              width={30}
                                            />
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
                ? adsRow.map((m, i) =>
                    m.row == row + 1 ? (
                      <HomePageAd
                        key={i}
                        desktop={m.desktop}
                        mobile={m.mobile}
                        sizeDesktop={m.desktopSize}
                        sizeMobile={m.mobileSize}
                      />
                    ) : null
                  )
                : null}
            </Fragment>
          );
        })}
    </div>
  );
};

export default HomepageSlider;
