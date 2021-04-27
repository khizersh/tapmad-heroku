import { SEOTvSeriesData, SEOTvShowsByCategory } from "./apilinks";
import { post } from "./http-service";

export async function getSEOData(videoId, url) {
    let SEOBody = { "Version": "v1", "Language": "en", "Platform": "web", "VodId": videoId, "url": `https://www.tapmad.com${url.split('?')[0]}` }
    let SEOData = await post(SEOTvSeriesData, SEOBody);
    return SEOData.data.Vod ? SEOData.data.Vod[0] : "";
}
export async function getSEODataByCategory(videoId, url) {
    let SEOBody = { "Version": "v1", "Language": "en", "Platform": "web", "CategoryId": videoId, "url": `https://www.tapmad.com${url.split('?')[0]}` }
    let SEOData = await post(SEOTvShowsByCategory, SEOBody);
    return SEOData.data.Vod ? SEOData.data.Vod[0] : "";
}