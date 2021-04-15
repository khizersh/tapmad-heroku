import React from "react";

const NewsMainCard = ({ news }) => {
  return (
    <div>
      <div className="tm_news_big mt-3 text-right cursor-point">
        <img
          src={news.ThumbnailURL}
          className="img-fluid"
          alt={news.CategoryTitle}
        />
        <div className="tm_news_cat_dtls p-3">
          <label className="news-date text-muted">{news.PostDate}</label>
          <span className="news-cat">{news.CategoryTitle}</span>
          <h6 className="text-light news-card-title">{news.Title}</h6>
          <p className="mt-2 text-muted news-card-desc">{news.Headline}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsMainCard;
