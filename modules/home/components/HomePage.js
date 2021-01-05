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

export default function HomePage({ movies, banner, featured, ip }) {
  const [localMovies, setLocalMovies] = useState(movies);
  const [currentRow, setCurrentRow] = useState(5);
  const modifiedResponse = modifyHomePageResponse(movies);

  React.useEffect(() => {
    console.log("Movies ", movies);
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
    return {
      Sections: {
        Movies: movies.Sections,
        totalSections: movies.totalSections,
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
                src={banner.Video[0].bannerPoster}
                style={{ width: "100%" }}
              />
            </div>
            <div className="tm-upcmng">
              <div className="row w-100">
                <div className="col-10 offset-1">
                  <HomepageFeatured featured={featured} />
                </div>
              </div>
            </div>
            <HomepageSlider movies={localMovies.Sections.Movies} />
            {currentRow !== movies.totalSections && (
              <ScrollComponent loadMore={fetchNewMovies} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
