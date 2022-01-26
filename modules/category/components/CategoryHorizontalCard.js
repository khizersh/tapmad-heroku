import Link from "next/link";
import React from "react";
import { SEOFriendlySlugsForVideo } from "../../../services/utils";

const CategoryHorizontalCard = ({ video, type, slug }) => {
  return (
    <>
      <style jsx>
        {`
          .package {
            position: absolute !important;
            top: 5px;
            left: 5px;
            width: 15px !important;
            height: 15px !important;
          }
        `}
      </style>
      <Link href={slug} passHref={true} shallow={true}>
        <div className="col-12 p-1 d-lg-none d-md-none">
          <div className="d-flex">
            <div>
              {type ? (
                <span className="live_side" style={{ top: 4, left: 4 }}>
                  {type}
                </span>
              ) : (
                <></>
              )}
              <img
                src={video.VideoImagePath}
                alt={video.VideoName}
                width="130px"
              />
              {video.IsVideoFree ? (
                <></>
              ) : video.PackageImage ? (
                <img
                  src={video.PackageImage}
                  alt="Package"
                  width={30}
                  height={30}
                  className="package"
                />
              ) : (
                <></>
              )}
            </div>
            <div>
              <div className="card-desc-div">
                <h5 className="card-title">{video.VideoName}</h5>
                <p className="card-desc synopsis-card-text m-0">
                  {video.VideoDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryHorizontalCard;
