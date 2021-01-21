import React from "react";
import { SEOFriendlySlugsForVideo } from "../../../services/utils";
import Link from "next/link";
import "../css/card-hor.style.css";
const CategoryVerticalCard = ({ video }) => {
  let slug = SEOFriendlySlugsForVideo(video);

  return (
    <div className="col-2 p-1 d-none d-sm-none d-md-block d-lg-block">
      <div className="">
        <Link href={slug} passHref={true} shallow={true}>
          <a>
            <div className="synopsis_card rounded-0 bg-transparent card">
              <div className="horizontal-card">
                <div className="img-square-wrapper">
                  <img src={video.VideoImagePath} alt={video.VideoName} />
                </div>
                <div className="card-body pt-2 pb-1 pl-1 text-light">
                  <i className="fa fa-play play_icon"></i>
                  <h5>{video.VideoName}</h5>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryVerticalCard;