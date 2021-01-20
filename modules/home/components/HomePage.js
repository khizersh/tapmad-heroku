import React, { useState } from "react";
import ScrollComponent from "../../../components/scrollComponent";
import HomepageSlider from "./HomepageSlider";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import { get } from "../../../services/http-service";
import HomepageFeatured from "./FeaturedSlider";
import Link from "next/link";

export default function HomePage({ movies, banner, featured, ip }) {
  const [localMovies, setLocalMovies] = useState(movies);
  const [currentRow, setCurrentRow] = useState(5);
  const modifiedResponse = modifyHomePageResponse(movies);

  React.useEffect(() => {
    setLocalMovies(modifiedResponse);
  }, []);

  async function fetchNewMovies() {
    if (currentRow == movies.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, modifiedResponse);
    setCurrentRow(rowData.rowsTo);
    var moviesList = await get(
      `https://api.tapmad.com/api/getFeaturedHomePageWithRE/5/${
        rowData.rowFrom
      }/${rowData.rowsTo - rowData.rowFrom}/0/16`,
      ip
    );
    var newMovies = await moviesList.data;
    if (localMovies.Sections.Movies && localMovies.Sections.Movies.length > 0) {
      let modifiedNewMovies = modifyHomePageResponse(newMovies.Tabs[0]);

      let updatedListOfMovies = pushNewMoviesIntoList(
        localMovies,
        modifiedNewMovies
      );
      setLocalMovies(updatedListOfMovies);
    }
  }
  function modifyHomePageResponse(movies) {
    if (movies.Sections && movies.Sections.length > 0) {
      return {
        Sections: {
          Movies: movies.Sections,
          totalSections: movies.totalSections,
        },
      };
    }
    return {
      Sections: {
        Movies: [],
        totalSections: 0,
      },
    };
  }
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div>
              <img
                src={banner?.Video[0]?.bannerPoster}
                style={{ width: "100%" }}
              />
            </div>

            <div className="row width-100">
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
            <HomepageSlider movies={localMovies?.Sections?.Movies} />
            {currentRow !== movies.totalSections && (
              <ScrollComponent loadMore={fetchNewMovies} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
