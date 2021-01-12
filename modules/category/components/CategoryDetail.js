import React from "react";
import CardHorizontal from "./CardHorizontal";

const CategoryDetail = ({ video, videoList }) => {
  console.log("Video List: ");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-6">
              <h1>{video && video.VideoName}</h1>
              <div className="txt-grey">{video && video.VideoDescription}</div>
              <div>
                <button className="btn  banner-btn">Play</button>
              </div>
            </div>
            <div className="col-6">
              {video && video["NewVideoImageThumbnail"] ? (
                <div>
                  <img src={video["NewVideoImageThumbnail"]} />
                </div>
              ) : null}
            </div>
            <div className="col-12">
              <div
                className="bg-color"
                style={{ width: "100%", height: "600px" }}
              ></div>
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

export default CategoryDetail;
