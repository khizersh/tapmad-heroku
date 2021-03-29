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

export default function HomePage({ movies, banner, featured, ip }) {
  const [localMovies, setLocalMovies] = useState(movies);
  const [currentRow, setCurrentRow] = useState(5);
  const { initialState, getCountryCode } = useContext(MainContext);
  const modifiedResponse = HomeService.modifyHomePageResponse(movies);

  React.useEffect(() => {
    setLocalMovies(modifiedResponse);
    let body = {
      event: loggingTags.fetch,
      pageName: "homepage",
    };
    actionsRequestContent(body);
  }, [movies]);

  async function fetchNewMovies() {
    if (currentRow == movies.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, modifiedResponse);
    setCurrentRow(rowData.rowsTo);
    let moviesList = await HomeService.getFeaturedHomepageWithRe(
      rowData.rowFrom,
      rowData.rowsTo
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
            {localMovies && localMovies.Sections && (
              <HomepageSlider movies={localMovies.Sections.Movies} />
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
