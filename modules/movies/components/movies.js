import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ScrollComponent from "../../../components/scrollComponent";
import { getMoviesWithPagination } from "../../../services/apilinks";
import { get } from "../../../services/http-service";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import { GlobalService } from "../../global-service";
import HomepageSlider from "../../home/components/HomepageSlider";

export default function Movies({ movies }) {
  var bannerSettings = basicSliderConfig(1, 1);
  const [localMovies, setLocalMovies] = useState(movies);
  const [currentRow, setCurrentRow] = useState(5);

  async function fetchNewMovies() {
    if (currentRow == movies.Sections.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, movies);
    setCurrentRow(rowData.rowsTo);
    var moviesList = await get(
      getMoviesWithPagination(rowData.rowFrom, rowData.rowsTo)
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
      list = GlobalService.customizingData(localMovies.Sections.Movies);
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
  }, [movies]);

  return (
    <div>
      <Slider {...bannerSettings}>
        {movies.Banner &&
          movies.Banner.map((e, index) => {
            return (
              // <Link
              //   href={e.BannerURL ? e.BannerURL : "/movies"}
              //   key={index}
              //   passHref
              // >
              <a>
                <img
                  src={e.TabPosterPath}
                  style={{ width: "100%" }}
                  className="banner-main"
                  alt="Banner"
                />
              </a>
              //</Link>
            );
          })}
      </Slider>{" "}
      <div className="container-fluid">
        <HomepageSlider
          movies={localMovies.Sections.Movies}
          ads={false}
          name={"Movies"}
        />
        {currentRow !== movies.Sections.totalSections && (
          <ScrollComponent loadMore={fetchNewMovies} />
        )}
      </div>
    </div>
  );
}
