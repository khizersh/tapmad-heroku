import React, { useEffect, useState } from "react";
import { getAllNewsData } from "../modules/news/news.service";
import NewsCard from "../modules/news/newsCard";
import requestIp from "request-ip";

const news = ({ news, newsArray }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    if (news) {
      setNewsList(newsArray);
    }
  }, [news]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-2 mt-lg-0 col-md-4 col-lg-2 pr-3 pr-sm-3 pr-md-0 pr-lg-0 "></div>
        <div className="col-12 col-sm-6 col-md-8 col-lg-6"></div>
        <div className="col-12 col-sm-4 col-md-12 col-lg-4 pl-3 pl-sm-3 pl-md-3 pl-lg-0"></div>
      </div>
      <div className="row">
        {newsList.length
          ? newsList.map((m, i) => <NewsCard key={i} news={m} />)
          : null}
      </div>
    </div>
  );
};

export default news;

export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }

  const data = await getAllNewsData(ip);
  if (data.responseCode == 1) {
    if (data.data && data.data.TnnNews.length) {
      let array = data.data.TnnNews.filter((f, i) => i !== 0);
      return {
        props: {
          news: data.data.TnnNews[0],
          newsArray: array,
        },
      };
    }
  }
  return { props: { news: null, newsArray: [] } };
}
