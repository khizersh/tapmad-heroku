import Link from "next/link";
import React, { useState, useEffect } from "react";
import Card from "../category/components/card/Card";
import { SEOFriendlySlugsForVideo } from "../../services/utils";

export default function VideoDetail({ video, videoList }) {
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    if (video) {
      let slugPlay = SEOFriendlySlugsForVideo(video, true);
      setSlug(slugPlay);
    }
  }, [video, videoList]);

  return (
    <>
      <div className="row">
        <div className="col-12 mt-2">
          <div className="row mr-0">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              {/* <div
                className="bg-color"
                style={{ width: "100%", height: "600px" }}
              ></div> */}
              <div className="video-syno-text">
                <div className="row m-0 mt-5">
                  <div className="col-lg-6 col-md-6 col-12 pad-mbl">
                    <h2>{video && video.VideoName}</h2>
                    <div className="text-dark">
                      {video &&
                      video.VideoDescription &&
                      video.VideoDescription.length > 200
                        ? video.VideoDescription.slice(0, 220) + "..."
                        : video.VideoDescription}
                    </div>
                    <br />
                    <div>
                      {slug && (
                        <Link href={slug} passHref shallow>
                          <a className="btn tm_wishlst_btn">
                            <i className="fa fa-play rounded-circle pr-2"></i>
                            Play
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 d-none d-sm-block pr-0">
                    {video && video["VideoImagePathLarge"] ? (
                      <div
                        className="category-bg-img"
                        style={{
                          background: `url('${video["VideoImagePathLarge"]}')`,
                        }}
                      ></div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        {videoList && videoList.length > 0
          ? videoList.map((vid, i) => {
              let type = "";
              if (!vid.IsVideoFree) {
                type = vid.PackageName ? vid.PackageName : "";
              }
              return <Card catchup={true} key={i} video={vid} type={type} />;
            })
          : null}
      </div>
    </>
  );
}
