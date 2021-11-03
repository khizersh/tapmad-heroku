import React, { useState } from "react";
import Slider from "@ant-design/react-slick";
import ScrollComponent from "../../../components/scrollComponent";
import {
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
} from "../../../services/utils";
import HomepageSlider from "../../home/components/HomepageSlider";
import { get } from "../../../services/http-service";
import { getChannelsWithPagination } from "../../../services/apilinks";
import Link from "next/link";

export default function LiveChannels({ channel }) {
  var bannerSettings = basicSliderConfig(1, 1);
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
      getChannelsWithPagination(rowData.rowFrom, rowData.rowsTo)
    );
    var newMovies = await moviesList.data;
    if (
      localMovies.Sections.Channels &&
      localMovies.Sections.Channels.length > 0
    ) {
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
    <div>
      <Slider {...bannerSettings}>
        {channel.Banner.map((e, index) => {
          return (
            <Link href={e.BannerURL ? e.BannerURL : "/live"} key={index} passHref>
              <a>
                <img
                  src={e.WebBannerImage}
                  style={{ width: "100%" }}
                  alt="Banner"
                />
              </a>
            </Link>
          );
        })}
      </Slider>
      <HomepageSlider movies={localMovies.Sections.Movies} ads={false} name={"Live"} />
      {currentRow !== localMovies.Sections.totalSections && (
        <ScrollComponent loadMore={fetchNewMovies} />
      )}
    </div>
  );
}
