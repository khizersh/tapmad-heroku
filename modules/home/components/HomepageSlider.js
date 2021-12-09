import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IsCategory, IsLiveChannel } from "../../../services/constants";
import {
  basicSliderConfig,
  setUrlAccordingToVideoType,
  viewMoreCleanUrls,
} from "../../../services/utils";
import Image from "next/image";

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
          let viewMoreSlug = viewMoreCleanUrls(
            movieSection.SectionName,
            movieSection.SectionId,
            name
          );
          return (
            <>
              <div className="col-12 p-lg-1 p-0" key={row}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="ml-2 my-3">{movieSection.SectionName}</h5>
                  {name != "Homepage" ? (
                    movieSection.Videos.length > 8 ? (
                      <Link href={viewMoreSlug} passHref={true} shallow={true}>
                        <a>
                          <span
                            className="badge badge-primary"
                            onClick={() => getMoreSections(movieSection)}
                          >
                            View More
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
                          console.log(mov.PackageImage);
                          console.log(mov.VideoName);
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
                                    <Image
                                      src={mov.NewChannelThumbnailPath}
                                      height={304}
                                      width={228}
                                      loader={() => mov.NewChannelThumbnailPath}
                                      loading={"eager"}
                                      // layout='fill'
                                      alt={"tapmad-" + mov.VideoName}
                                    />
                                    {/* {mov.IsVideoFree ? (
                                      mov.IsVideoChannel == true ||
                                      mov.IsVideoChannel == "1" ? (
                                        <div className="live_side">Live</div>
                                      ) : null
                                    ) : (
                                      <div className="live_side">Premium</div>
                                    )} */}
                                    <div className="live_side">
                                      {/* {mov.PackageName} */}
                                      <img src={mov.PackageImage} width={20} />
                                    </div>
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
                          console.log(mov.PackageImage);
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
                                    <Image
                                      src={mov.NewCategoryImage}
                                      height={304}
                                      width={228}
                                      loader={() => mov.NewCategoryImage}
                                      loading={"eager"}
                                      // layout='fill'
                                      alt={"tapmad-" + mov.VideoName}
                                    />
                                    {mov.IsVideoFree
                                      ? null
                                      : mov.PackageImage && (
                                          <div className="live_side">
                                            {/* {mov.PackageName} */}
                                            <img
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
            </>
          );
        })}
    </div>
  );
};

export default HomepageSlider;
