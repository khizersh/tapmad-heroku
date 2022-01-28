import React from "react";
import NewsBage from "./NewsBage";
import { useRouter } from "next/router";
import ReactJWPlayer from "react-jw-player";
import { langDetect } from "../../services/utils";

const NewsDetailCard = ({ news }) => {
  const router = useRouter();

  return (
    <div className="tm_news_big mt-3 text-right cursor-point">
      {news.fileUrl == null ? (
        <img src={news.Thumbnail} className="w-100" alt={news.Category} />
      ) : (
        <>
          {/* <video src={news.fileUrl} autoPlay={true} controls></video> */}
          <ReactJWPlayer
            playerId="tapmad-news"
            playerScript="https://cdn.jwplayer.com/libraries/uilg5DFs.js"
            isAutoPlay={true}
            file={news.fileUrl}
            customProps={{
              controls: true,
            }}
            generatePrerollUrl={() => ""}
          />
        </>
      )}
      {langDetect(news.Title) ? (
        <div className="spacing text-left p-3">
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
      ) : (
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
      )}
    </div>
  );
};

export default NewsDetailCard;
