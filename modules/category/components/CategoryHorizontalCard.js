import Link from "next/link";
import React from "react";
import { SEOFriendlySlugsForVideo } from "../../../services/utils";

const CategoryHorizontalCard = ({ video, type }) => {
  let slug = SEOFriendlySlugsForVideo(video);
  return (
    <>
      <Link href={slug} passHref={true} shallow={true}>
        <div className="col-12 p-1 d-lg-none d-md-none">
          <div className="d-flex">
            <div>
              <img
                src={video.VideoImagePath}
                alt={video.VideoName}
                width="130px"
              />
              {type && <div className="live_side">{type}</div>}
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
