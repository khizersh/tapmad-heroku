import React from "react";

import "../../css/card-hor.style.css";
import { SEOFriendlySlugsForVideo } from "../../../../services/utils";
import CategoryVerticalCard from "../CategoryVerticalCard";
import CategoryHorizontalCard from "../CategoryHorizontalCard";

const Card = ({ video }) => {
  let slug = SEOFriendlySlugsForVideo(video);

  return (
    <>
      <div className="desktop-show col-12 col-sm-4 col-md-3 col-lg-2 p-1">
        <CategoryVerticalCard video={video} />
      </div>

      <div className="mbl-hide col-12">
        <CategoryHorizontalCard video={video} />
      </div>
    </>
  );
};

export default Card;
