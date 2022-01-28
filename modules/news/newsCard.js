import React from "react";
import Link from "next/link";
import { langDetect } from "../../services/utils";

const newsCard = ({ news }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
      {langDetect(news.Title) ? (
        <Link href={`news-detail/${news.NewsId}`} shallow passHref>
          <a>
            <div className="tm_news_trndng mt-3 text-right cursor-point">
              <img
                src={news.ThumbnailURL}
                className="w-100"
                alt={news.CategoryTitle}
              />
              <div className="spacing text-left_dtls p-3">
                <label className="news-date text-muted">{news.PostDate}</label>
                <span className="news-cat text-white">
                  {news.CategoryTitle}
                </span>
                <h6 className="text-light news-card-title">{news.Title}</h6>
                <p className="mt-2 text-muted news-card-desc">
                  {news.Headline}
                </p>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <Link href={`news-detail/${news.NewsId}`} shallow passHref>
          <a>
            <div className="tm_news_trndng mt-3 text-right cursor-point">
              <img
                src={news.ThumbnailURL}
                className="w-100"
                alt={news.CategoryTitle}
              />
              <div className="tm_news_cat_dtls p-3">
                <label className="news-date text-muted">{news.PostDate}</label>
                <span className="news-cat text-white">
                  {news.CategoryTitle}
                </span>
                <h6 className="text-light news-card-title">{news.Title}</h6>
                <p className="mt-2 text-muted news-card-desc">
                  {news.Headline}
                </p>
              </div>
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default newsCard;
