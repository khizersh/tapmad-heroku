import React from "react";

import "../../css/card-hor.style.css";
import { SEOFriendlySlugsForVideo } from "../../../../services/utils";
import CategoryVerticalCard from "../CategoryVerticalCard";
import CategoryHorizontalCard from "../CategoryHorizontalCard";

const Card = ({ video }) => {
  let slug = SEOFriendlySlugsForVideo(video);

  return (
    <>
      <CategoryHorizontalCard video={video} />

      <CategoryVerticalCard video={video} />
    </>
  );
};

export default Card;
