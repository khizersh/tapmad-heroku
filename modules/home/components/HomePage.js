import React, { Fragment, useState } from "react";
import Link from "next/link";
import { HomeService } from "./home.service";
import dynamic from "next/dynamic";
import {
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import { AuthService } from "../../auth/auth.service";
import loadable from "@loadable/component";
import { replaceCategoryToShows } from "../../../services/utils";
import ScrollComponent from "../../../components/scrollComponent";

const HomepageSlider = dynamic(() => import("./HomepageSlider"));
const HomePageAd = dynamic(() => import("./HomePageAd"));
const HomepageFeatured = dynamic(() => import("./FeaturedSlider"));

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

    let moviesList = await HomeService.getFeaturedHomepageWithRe(
      rowData.rowFrom,
      rowData.rowsTo,
      ip
    );
    if (moviesList != null) {
      var newMovies = await moviesList.data;
      if (
        localMovies?.Sections?.Movies &&
        localMovies?.Sections?.Movies?.length > 0
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
  async function checAd() {
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
  }
  React.useEffect(async () => {
    await checAd();
    setLocalMovies(modifiedResponse);
  }, []);

  return (
    <div>
      <div className="container-fluid p-1">
        <div className="row no-gutters">
          <div className="col-12">
            <div>
              <img
                src={banner?.Video[0]?.bannerPoster}
                width="100%"
                alt="homepage-banner"
              />
            </div>
            <div className="width-100">
              <div className="col-12">
                <div className="home-banner-btn">
                  <Link
                    href={replaceCategoryToShows(
                      banner?.Video[0]?.bannerRedirectionURL
                    )}
                    passHref={true}
                    shallow={true}
                  >
                    <a className="tm_wishlst_btn_active">
                      <i className="fa fa-play rounded-circle pr-1"></i> Watch
                      Now
                    </a>
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
            {/* Rendering 2 homepage component for SEO and Users when they scroll */}
            <HomepageSlider
              movies={!localMovies?.Sections?.Movies ? movies.Sections : []}
              ads={false}
              name={"Homepage"}
            />
            {/* {movies && movies.Sections && !localMovies.Sections.Movies ? (
              <HomepageSlider
                movies={movies.Sections}
                ads={false}
                name={"Homepage"}
              />
            ) : (
              <span></span>
            )} */}
            {localMovies?.Sections && localMovies?.Sections.Movies ? (
              <HomepageSlider
                movies={localMovies.Sections.Movies}
                ads={true}
                name={"Homepage"}
              />
            ) : (
              <></>
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
