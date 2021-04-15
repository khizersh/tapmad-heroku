import React, { useEffect, useState } from "react";
import {
  getAllNewsData,
  topCategoriesColor,
} from "../modules/news/news.service";
import NewsCard from "../modules/news/newsCard";
import requestIp from "request-ip";
import NewsMainCard from "../modules/news/NewsMainCard";
import VerticalCard from "../modules/news/verticalCard";
import { DFPSlotsProvider } from "react-dfp";
import { AdSlot } from "react-dfp/lib/adslot";
import NewsBage from "../modules/news/NewsBage";

const news = ({ news, newsArray }) => {
  const [newsList, setNewsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [topTrending, setTopTrending] = useState([]);

  const onCLickCategory = (category) => {
    let array = newsArray.filter((f) => f.CategoryTitle == category);
    setNewsList(array);
  };

  useEffect(() => {
    if (news) {
      setNewsList(newsArray);
      // trendng work
      let trending = [];
      let sport = {
        color: "#28a745",
      };

      sport = {
        ...sport,
        ...newsArray.filter((m) => m.CategoryTitle == "Sports")[0],
      };
      let business = {
        color: "#17a2b8",
      };

      business = {
        ...business,
        ...newsArray.filter((m) => m.CategoryTitle == "Business")[0],
      };
      trending.push(sport);
      trending.push(business);
      setTopTrending(trending);

      // trending end

      // category work
      let obj = {};
      newsArray.map((m) => {
        obj[m.CategoryTitle] = "";
      });
      let cat = Object.keys(obj);
      setCategoryList(cat);

      // category end
    }
  }, [news]);

  return (
    <div className="container-fluid">
      <div className="text-center my-3">
        <DFPSlotsProvider dfpNetworkId="28379801">
          <div className="desktop-ads d-none d-lg-block d-md-block">
            <AdSlot sizes={[[728, 90]]} adUnit={"Tapmad_LB_BTF"} />
          </div>
          <div className="desktops-ads text-center d-lg-none d-md-none">
            <AdSlot
              sizes={[[320, 100]]}
              adUnit={"Testing_Dev_MW_320x100_Player"}
            />
          </div>
        </DFPSlotsProvider>
      </div>

      <div className="row">
        <div className="col-12 col-sm-2 col-md-4 col-lg-2 pr-3 pr-sm-3 pr-md-0 pr-lg-0 ">
          <h5 className="text-light pl-2 border-left">Top Categories</h5>

          <ul className="list-group tm_news_cat_list">
            {categoryList.length &&
              categoryList.map((m, i) => (
                <li
                  className={`list-item cursor-point text-white`}
                  style={{ borderBottom: `3px solid ${topCategoriesColor[i]}` }}
                  onClick={() => onCLickCategory(m)}
                >
                  <a>{m == "News" ? "Latest" : m} News</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-8 col-lg-6">
          {news && <NewsMainCard news={news} />}
        </div>
        <div className="col-12 col-sm-4 col-md-12 col-lg-4 pl-3 pl-sm-3 pl-md-3 pl-lg-0">
          <h5 className="text-light pl-2 border-left">Top Trending</h5>
          {topTrending.length &&
            topTrending.map((m, i) => {
              if (m.NewsId) {
                return <VerticalCard key={i} news={m} />;
              }
            })}
          <div className="row">
            <div className="col-12">
              <div className="text-center my-3">
                <DFPSlotsProvider dfpNetworkId="28379801">
                  <div className="desktop-ads">
                    <AdSlot
                      sizes={[[300, 250]]}
                      adUnit={"Tapmad_MREC_2_Desktop"}
                    />
                  </div>
                </DFPSlotsProvider>
              </div>
            </div>
          </div>
        </div>
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
