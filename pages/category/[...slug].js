import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { get } from "../../services/http-service";
import { manipulateUrls } from "../../services/utils";
import Image from "next/image";
import CardHorizontal from "../../modules/home/CardHorizontal";

const Category = () => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router && router.query) {
      getChannelData(router.query);
    }
  }, [router.query]);

  async function getChannelData(query) {
    if (query && query.slug) {
      let seriesDetail = manipulateUrls(router.query);
      getVideosByCategory(seriesDetail.OriginalMovieId, seriesDetail.isChannel);
    }
  }

  const getVideosByCategory = async (id, isChannel) => {
    const data = await get(
      `https://api.tapmad.com/api/getRelatedChannelsOrVODs/V1/en/web/${id}/${isChannel}`
    ).then(
      (res) => res
      //  {
      // console.log("Response: ", res);
      // if (res.responseCode) {
      //   setVideo(res.data.Video);
      //   setVideoList(res.data.Sections);
      // }
      // console.log("Video: ", video);
      // console.log("VideoList: ", videoList);
      // }
    );
    // console.log("Data: ", data.data["Video"]);

    setVideo(data.data["Video"]);
    setVideoList(data.data["Sections"]);
    // console.log("Video: ", video);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-6">
            <h1 >{video && video.VideoName}</h1>
            <div className="txt-grey">{video && video.VideoDescription}</div>
          <div>
            <button className="btn  banner-btn">Play</button>
          </div>
            </div>
            <div className="col-6">
            {video && video["NewVideoImageThumbnail"] ? (
              <div>
                <img  src={video["NewVideoImageThumbnail"]} />
              </div>
          ) : null}
            </div>
            <div className="col-12">
              <div className="bg-color" style={{width: '100%', height: '600px'}}></div>
            </div>
          </div>
        
        </div>
        </div>
      <div className="row mt-4">
        {videoList && videoList.length > 0 && videoList[0].Videos
          ? videoList[0].Videos.map((vid, i) => (
              <CardHorizontal key={i} video={vid} />
            ))
          : null}
      </div>
    </div>
  );
};

export default withRouter(Category);
