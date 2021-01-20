import React from "react";
import Card from "./card/Card";

const CategoryDetail = ({ video, videoList }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 col-sm-12">
              <h2>{video && video.VideoName}</h2>
              <div className="text-white">
                {video && video.VideoDescription}
              </div>
              <div>
                <button className="btn btn-primary">Play</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-none d-sm-none d-lg-block d-md-block">
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
      <div className="row mt-3">
        {videoList && videoList.length > 0 && videoList[0].Videos
          ? videoList[0].Videos.map((vid, i) => <Card key={i} video={vid} />)
          : null}
      </div>
    </>
  );
};

export default CategoryDetail;
