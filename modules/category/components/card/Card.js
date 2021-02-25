import React from "react";

import "../../css/card-hor.style.css";
import { SEOFriendlySlugsForVideo } from "../../../../services/utils";
import CategoryVerticalCard from "../CategoryVerticalCard";
import CategoryHorizontalCard from "../CategoryHorizontalCard";

const Card = ({ video, type }) => {
  let slug = SEOFriendlySlugsForVideo(video);
  return (
    <>
      <CategoryHorizontalCard video={video} type={type} />

      <CategoryVerticalCard video={video} type={type} />
    </>
  );
};

export default Card;
