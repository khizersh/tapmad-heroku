import React from "react";
import NewsBage from "./NewsBage";
import { useRouter } from "next/router";

const NewsDetailCard = ({ news }) => {
  const router = useRouter();
  return (
    <div>
      <div className="tm_news_big mt-3 text-right cursor-point">
        <img src={news.Thumbnail} className="img-fluid" alt={news.Category} />
        <div className="tm_news_cat_dtls p-3">
          <label className="news-date text-muted">{news.PublishDate}</label>
          <NewsBage color={"#dc3545"}>Latest</NewsBage>
          <h4 className="text-light news-card-title">{news.Title}</h4>
          <p className="mt-2 text-muted font-meher">{news.Body}</p>
          <button
            className="btn text-white"
            onClick={() => router.push("/news")}
          >
            &#60; Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailCard;
