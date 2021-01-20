import React from "react";
import Card from "./card/Card";

const CategoryDetail = ({ video, videoList }) => {
  console.log(video);
  return (
    <>
      <div className="row">
        <div className="col-sm-12 mt-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              {video && video["NewVideoImageThumbnail"] ? (
                <div
                  style={{
                    background: `url(${video["VideoImagePathLarge"]})`,
                    height: "400px",
                    border: "1px solid black",
                  }}
                ></div>
              ) : null}
              <div
                className="bg-color"
                style={{ width: "100%", height: "600px" }}
              ></div>
              <div className="video-syno-text">
                <h2>{video && video.VideoName}</h2>
                <div>{video && video.VideoCategoryName}</div>
                <div className="text-white">
                  {video && video.VideoDescription}
                </div>
                <br />
                <div>
                  <button className="btn btn-primary">Play</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {videoList && videoList.length > 0 && videoList[0].Videos
          ? videoList[0].Videos.map((vid, i) => <Card key={i} video={vid} />)
          : null}
      </div>
    </>
  );
};

export default CategoryDetail;
