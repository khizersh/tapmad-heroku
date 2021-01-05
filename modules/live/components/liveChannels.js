import React, { useState } from "react";
import Slider from "react-slick";
import ScrollComponent from "../../../components/scrollComponent";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import HomepageSlider from "../../home/components/HomepageSlider";
import { get } from "../../../services/http-service";

export default function LiveChannels({ channel }) {
  var bannerSettings = basicSliderConfig(1);
  const [localMovies, setLocalMovies] = useState(channel);
  const [currentRow, setCurrentRow] = useState(5);
  const modifiedResponse = modifyLivePageResponse(channel);

  React.useEffect(() => {
    setLocalMovies(modifiedResponse);
  }, []);

  async function fetchNewMovies() {
    if (currentRow == channel.totalSections) {
      return;
    }
    let rowData = calculateRowsToFetch(currentRow, modifiedResponse);
    setCurrentRow(rowData.rowsTo);
    var moviesList = await get(
      `https://api.tapmad.com/api/getChannelWithPagination/${rowData.rowFrom}/${
        rowData.rowsTo - rowData.rowFrom
      }/0/16`
    );
    var newMovies = await moviesList.data;
    if (localMovies.Sections.Movies && localMovies.Sections.Movies.length > 0) {
      let modifiedNewMovies = modifyLivePageResponse(newMovies);
      let updatedListOfMovies = pushNewMoviesIntoList(
        localMovies,
        modifiedNewMovies
      );
      console.log("channels updated", updatedListOfMovies);
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
    <div>
      <Slider {...bannerSettings}>
        {channel.Banner.map((e, index) => {
          return (
            <div key={index}>
              <img src={e.WebBannerImage} style={{ width: "100%" }} />
            </div>
          );
        })}
      </Slider>
      <HomepageSlider movies={localMovies.Sections.Movies} />
      {currentRow !== localMovies.Sections.totalSections && (
        <ScrollComponent loadMore={fetchNewMovies} />
      )}
    </div>
  );
}
