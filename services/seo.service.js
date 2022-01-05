import {
  SEOLiveChannelData,
  SEOTvSeriesData,
  SEOTvShowsByCategory,
} from "./apilinks";
import { post } from "./http-service";

export async function getSEOData(videoId, url) {
  let SEOBody = {
    Version: "v1",
    Language: "en",
    Platform: "web",
    VodId: videoId,
    url: `https://www.tapmad.com${url.split("?")[0]}`,
  };
  console.log("SEOBody : ",SEOBody);
  let SEOData = await post(SEOTvSeriesData, SEOBody);
  console.log("SEOData : ",SEOData.data);
  return SEOData.data.Vod
    ? { ...SEOData.data, url: `https://www.tapmad.com${url.split("?")[0]}` }
    : "";
}
export async function getSEODataByCategory(videoId, url) {
  let SEOBody = {
    Version: "v1",
    Language: "en",
    Platform: "web",
    CategoryId: videoId,
    url: `https://www.tapmad.com${url.split("?")[0]}`,
  };
  let SEOData = await post(SEOTvShowsByCategory, SEOBody);

  return SEOData.data.Vod
    ? { ...SEOData.data, url: `https://www.tapmad.com${url.split("?")[0]}` }
    : "";
}
export async function getSEODataForLiveChannel(videoId, url) {
  let SEOBody = {
    Version: "v1",
    Language: "en",
    Platform: "web",
    ChannelId: videoId,
    embedUrl: `https://www.tapmad.com${url.split("?")[0]}`,
    contentURL: `https://www.tapmad.com${url.split("?")[0]}`,
  };
  let SEOData = await post(SEOLiveChannelData, SEOBody);
  return SEOData.data.Channels
    ? { ...SEOData.data, url: `https://www.tapmad.com${url.split("?")[0]}` }
    : "";
}
