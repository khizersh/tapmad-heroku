import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ScrollComponent from "../../../components/scrollComponent";
import { get } from "../../../services/http-service";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import { GolobalService } from "../../global-service";
import HomepageSlider from "../../home/components/HomepageSlider";

export default function Movies({ movies }) {
  var bannerSettings = basicSliderConfig(1);
  const [localMovies, setLocalMovies] = useState(movies);
  const [currentRow, setCurrentRow] = useState(5);

  async function fetchNewMovies() {
    if (currentRow == movies.Sections.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, movies);
    setCurrentRow(rowData.rowsTo);
    var moviesList = await get(
      `https://api.tapmad.com/api/getMoviesWithPagination/${rowData.rowFrom}/${
        rowData.rowsTo - rowData.rowFrom
      }/0/16`
    );
    var newMovies = await moviesList.data;
    if (localMovies.Sections.Movies && localMovies.Sections.Movies.length > 0) {
      let updatedListOfMovies = pushNewMoviesIntoList(localMovies, newMovies);
      setLocalMovies(updatedListOfMovies);
    }
  }

  useEffect(() => {
    let list = [];
    if (localMovies && localMovies.Sections && localMovies.Sections.Movies) {
      list = GolobalService.customizingData(localMovies.Sections.Movies);
    }
    let obj = {
      ...localMovies,
      Sections: { Movies: list },
    };
    setLocalMovies({
      ...localMovies,
      Sections: {
        Movies: list,
      },
    });

    console.log("check: ", obj);
  }, [movies]);

  return (
    <div>
      <Slider {...bannerSettings}>
        {movies.Banner.map((e, index) => {
          return (
            <div key={index}>
              <img src={e.WebBannerImage} style={{ width: "100%" }} />
            </div>
          );
        })}
      </Slider>{" "}
      <HomepageSlider movies={localMovies.Sections.Movies} />
      {currentRow !== movies.Sections.totalSections && (
        <ScrollComponent loadMore={fetchNewMovies} />
      )}
    </div>
  );
}
