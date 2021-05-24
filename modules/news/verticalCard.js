import React from "react";
import NewsBage from "./NewsBage";

const verticalCard = ({ news }) => {
  return (
    <div className="row ml-0 my-3">
      <div className="col-6 col-sm-6 col-md-8 col-lg-8 pr-0 text-right text-light pr-2 trending-bg">
        <NewsBage color={news.color}>{news.CategoryTitle}</NewsBage>
        <h6
          className="text-light news-card-title text-right mt-3"
          style={{ fontSize: "14px" }}
        >
          {news.Title}
        </h6>
      </div>
      <div className="col-6 col-sm-6 col-md-4 col-lg-4 pl-0">
        <img src={news.ThumbnailURL} className="w-100" alt={news.Title} />
      </div>
    </div>
  );
};

export default verticalCard;
