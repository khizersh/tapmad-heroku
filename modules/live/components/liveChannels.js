import React, { useState } from "react";
import Slider from "react-slick";
import ScrollComponent from "../../../components/scrollComponent";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import dynamic from "next/dynamic";
// import HomepageSlider from "../../home/components/HomepageSlider";
import { get } from "../../../services/http-service";
import { getChannelsWithPagination } from "../../../services/apilinks";
import Link from "next/link";

const HomepageSlider = dynamic(() =>
  import("../../home/components/HomepageSlider")
);

export default function LiveChannels({ channel }) {
  var bannerSettings = basicSliderConfig(1, 1);
  const [localMovies, setLocalMovies] = useState(channel);
  const [currentRow, setCurrentRow] = useState(5);
  const modifiedResponse = modifyLivePageResponse(channel);

  React.useEffect(() => {
    setLocalMovies(modifiedResponse);
  }, []);

  async function fetchNewMovies() {
    if (currentRow == channel.Sections.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, modifiedResponse);
    setCurrentRow(rowData.rowsTo);
    var moviesList = await get(
      getChannelsWithPagination(rowData.rowFrom, rowData.rowsTo)
    );
    var newMovies = await moviesList.data;
    if (localMovies.Sections.Movies && localMovies.Sections.Movies.length > 0) {
      let modifiedNewMovies = modifyLivePageResponse(newMovies);
      let updatedListOfMovies = pushNewMoviesIntoList(
        localMovies,
        modifiedNewMovies
      );

      setLocalMovies(updatedListOfMovies);
    }
  }

  function modifyLivePageResponse(movies) {
    return {
      Sections: {
        Movies: movies.Sections.Channels,
        totalSections: movies.Sections.totalSections,
      },
    };
  }
  return (
    <>
      <Slider {...bannerSettings}>
        {channel.Banner.map((e, index) => {
          return (
            // <Link
            //   href={e.BannerURL ? e.BannerURL : "/live"}
            //   key={index}
            //   passHref
            // >
            <a key={index}>
              <img
                src={e.TabPosterPath}
                style={{ height: "50%", width: "100vw", position: "relative" }}
                alt="Banner"
              />
            </a>
            // </Link>
          );
        })}
      </Slider>
      <div className="container-fluid">
        <p className="testing"></p>
        <HomepageSlider
          movies={localMovies.Sections.Movies}
          ads={false}
          name={"Live"}
        />
        {localMovies.Sections.totalSections && currentRow !==
        localMovies.Sections.totalSections ? (
          <ScrollComponent loadMore={fetchNewMovies} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
