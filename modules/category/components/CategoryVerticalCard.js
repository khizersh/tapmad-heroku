import React from "react";
import { SEOFriendlySlugsForVideo } from "../../../services/utils";
import Link from "next/link";
const CategoryVerticalCard = ({ video, type, slug, packageImage }) => {
  return (
    <div className="col-2 p-1 d-none d-sm-none d-md-block d-lg-block">
      <style jsx>
        {`
          .package {
            position: absolute !important;
            top: 5px;
            right: 5px;
            width: 20px !important;
            height: 20px !important;
          }
        `}
      </style>
      <div>
        <Link href={slug} passHref={true} shallow={true}>
          <a>
            <div className="synopsis_card rounded-0 bg-transparent card">
              <div className="horizontal-card">
                <div className="img-square-wrapper">
                  <img src={video.VideoImagePath} alt={video.VideoName} />
                  {type && <div className="live_side">{type}</div>}
                  {packageImage ? (
                    <img
                      src={packageImage}
                      alt="Package"
                      width={30}
                      height={30}
                      className="package"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="card-body pt-2 pb-1 pl-1 text-light">
                  <i className="fa fa-play play_icon"></i>
                  <div>{video.VideoName}</div>
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
