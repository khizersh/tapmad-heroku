import React, { useState, useContext } from "react";
import ScrollComponent from "../../../components/scrollComponent";
import HomepageSlider from "./HomepageSlider";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import { actionsRequestContent } from "../../../services/http-service";
import HomepageFeatured from "./FeaturedSlider";
import Link from "next/link";
import { HomeService } from "./home.service";
import { MainContext } from "../../../contexts/MainContext";
import { loggingTags } from "../../../services/apilinks";
import { AuthService } from "../../auth/auth.service";
import HomePageAd from "./HomePageAd";

export default function HomePage({ movies, banner, featured, ip }) {
  const [localMovies, setLocalMovies] = useState(movies);
  const [currentRow, setCurrentRow] = useState(5);
  const [ad, setAd] = useState(null);
  const modifiedResponse = HomeService.modifyHomePageResponse(movies);

  async function fetchNewMovies() {
    if (currentRow == movies.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, modifiedResponse);
    setCurrentRow(rowData.rowsTo);

    try {
    } catch (error) {}
    let moviesList = await HomeService.getFeaturedHomepageWithRe(
      rowData.rowFrom,
      rowData.rowsTo,
      ip
    );
    if (moviesList != null) {
      var newMovies = await moviesList.data;
      if (
        localMovies.Sections.Movies &&
        localMovies.Sections.Movies.length > 0
      ) {
        let modifiedNewMovies = HomeService.modifyHomePageResponse(
          newMovies.Tabs[0]
        );
        let updatedListOfMovies = pushNewMoviesIntoList(
          localMovies,
          modifiedNewMovies
        );
        setLocalMovies(updatedListOfMovies);
      }
    }
  }

  const checAd = async () => {
    AuthService.getHomePageAdsDetail()
      .then((res) => {
        if (res.data.responseCode == 1) {
          let data = res.data.data.filter((m) => m.row == "0")[0];
          if (data) {
            setAd(data);
          }
        }
      })
      .catch((e) => console.log(e));
  };
  React.useEffect(async () => {
    await checAd();
    setLocalMovies(modifiedResponse);
    let body = {
      event: loggingTags.fetch,
      pageName: "homepage",
    };
    actionsRequestContent(body);
  }, [movies]);

  return (
    <div>
      <div className="container-fluid p-1">
        <div className="row no-gutters">
          <div className="col-12">
            <div>
              <img
                src={banner?.Video[0]?.bannerPoster}
                style={{ width: "100%" }}
              />
            </div>
            <div className="width-100">
              <div className="col-12">
                <div className="home-banner-btn">
                  <Link href="/" passHref={true} shallow={true}>
                    <a className="btn btn-primary">Watch Now</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12  col-xs-12 offset-lg-1 offset-md-1">
                <div className="tm-upcmng">
                  <HomepageFeatured featured={featured} />
                </div>
              </div>
            </div>

            {ad && (
              <div className="zero-add">
                <HomePageAd
                  desktop={ad.desktop}
                  mobile={ad.mobile}
                  sizeDesktop={ad.desktopSize}
                  sizeMobile={ad.mobileSize}
                />
              </div>
            )}
            {localMovies && localMovies.Sections && (
              <HomepageSlider movies={localMovies.Sections.Movies} ads={true} />
            )}
            {currentRow !== movies.totalSections && (
              <ScrollComponent loadMore={fetchNewMovies} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
