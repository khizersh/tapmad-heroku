import React from "react";
import Card from "./card/Card";

export default function CategoryDetail({ video, videoList }) {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 mt-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              {video && video["NewVideoImageThumbnail"] ? (
                <div
                  style={{
                    background: `url('${video["NewVideoImageThumbnail"]}')`,
                    height: "400px",
                    border: "1px solid black",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
              ) : null}
              <div
                className="bg-color"
                style={{ width: "100%", height: "600px" }}
              ></div>
              <div className="video-syno-text">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-11">
                    <h2>{video && video.VideoName}</h2>
                    <div>{video && video.VideoCategoryName}</div>
                    <div className="text-dark">
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
        </div>
      </div>
      <div className="row mt-3">
        {videoList && videoList.length > 0 && videoList[0].Videos
          ? videoList[0].Videos.map((vid, i) => <Card key={i} video={vid} />)
          : null}
      </div>
    </>
  );
}
