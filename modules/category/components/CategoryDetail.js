import Link from "next/link";
import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import { SEOFriendlySlugsForVideo } from "../../../services/utils";

export default function CategoryDetail({ video, videoList, syno }) {
  const [slug, setSlug] = useState(null);
  useEffect(() => {
    if (
      videoList.length > 0 &&
      videoList[0].Videos &&
      videoList[0].Videos.length > 0
    ) {
      let vid;
      if (syno) {
        vid = video;
      } else {
        vid = videoList[0].Videos[videoList[0].Videos.length - 1];
      }
      let slugPlay = SEOFriendlySlugsForVideo(vid);
      setSlug(slugPlay);
    }
  }, [videoList]);
  return (
    <>
      <div className="row">
        <div className="col-12 mt-2">
          <div className="row mr-0">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              {video && video["NewVideoImageThumbnail"] ? (
                <div
                  className="category-bg-img"
                  style={{
                    background: `url('${video["NewVideoImageThumbnail"]}')`,
                  }}
                ></div>
              ) : null}
              <div className="bg-color"></div>
              <div className="video-syno-text">
                <div className="row m-0 mar-5">
                  <div className="col-lg-4 col-md-4 col-11 pad-mbl">
                    <h2 className="font-20">{video && video.VideoName}</h2>
                    <div className="font-20">
                      {video && video.VideoCategoryName}
                    </div>
                    <div className="text-dark line-height">
                      {video
                        ? video.VideoDescription &&
                          video.VideoDescription.length > 200
                          ? video.VideoDescription.slice(0, 220) + "..."
                          : video.VideoDescription
                        : null}
                    </div>
                    <br />
                    <div>
                      {slug && (
                        <Link
                          href={slug}
                          passHref
                          shallow
                          className="z-index-play"
                        >
                          <a className="btn tm_wishlst_btn">
                            <i className="fa fa-play rounded-circle pr-2"></i>
                            Play
                          </a>
                        </Link>
                      )}
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
