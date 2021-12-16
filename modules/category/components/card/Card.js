import React from "react";

import { SEOFriendlySlugsForVideo } from "../../../../services/utils";
import CategoryVerticalCard from "../CategoryVerticalCard";
import CategoryHorizontalCard from "../CategoryHorizontalCard";

const Card = ({ video, type, catchup }) => {
  let slug = SEOFriendlySlugsForVideo(video, catchup);
  return (
    <>
      <CategoryHorizontalCard video={video} type={type} slug={slug} />

      <CategoryVerticalCard video={video} type={type} slug={slug} />
    </>
  );
};

export default Card;
