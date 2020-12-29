import React, { useState } from "react";
import ScrollComponent from "../../../components/scrollComponent";
import HomepageSlider from "./HomepageSlider";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import { get } from "../../../services/http-service";
export default function HomePage({ movies, banner }) {
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
    console.log(rowData);
    setCurrentRow(rowData.rowsTo);
    var moviesList = await get(
      `https://api.tapmad.com/api/getFeaturedHomePageWithRE/5/${
        rowData.rowFrom
      }/${rowData.rowsTo - rowData.rowFrom}/0/16`
    );
    var newMovies = await moviesList.data;
    if (localMovies.Sections.Movies && localMovies.Sections.Movies.length > 0) {
      let modifiedNewMovies = modifyHomePageResponse(newMovies.Tabs[0]);

      let updatedListOfMovies = pushNewMoviesIntoList(
        localMovies,
        modifiedNewMovies
      );
      console.log(updatedListOfMovies);

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
            <HomepageSlider movies={localMovies.Sections.Movies} />
            <ScrollComponent loadMore={fetchNewMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}
