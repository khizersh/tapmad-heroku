import React from "react";
import Card from "./card/Card";

export default function CategoryDetail({ video, videoList }) {
  console.log("videoList: ", video);
  const onClickPlay = () => {
    console.log("on play: ");
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-12 mt-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              {video && video["NewVideoImageThumbnail"] ? (
                <div
                  className="category-bg-img"
                  style={{
                    backgroundImage: `url('${video["NewVideoImageThumbnail"]}')`,
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
                      {video &&
                      video.VideoDescription &&
                      video.VideoDescription.length > 200
                        ? video.VideoDescription.slice(0, 220) + "..."
                        : video.VideoDescription}
                    </div>
                    <br />
                    <div>
                      <button
                        className="btn tm_wishlst_btn"
                        onClick={onClickPlay}
                      >
                        <i className="fa fa-play rounded-circle pr-2"></i>
                        Play
                      </button>
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
          ? videoList[0].Videos.map((vid, i) => {
              let type = "";
              if (!vid.IsVideoFree) {
                type = vid.PackageName ? vid.PackageName : "";
              }
              return <Card key={i} video={vid} type={type} />;
            })
          : null}
      </div>
    </>
  );
}
