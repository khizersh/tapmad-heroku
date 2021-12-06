import {
  getEventPredicationGameChannel,
  getRelatedChannelsOrVODs,
} from "../../services/apilinks";
import { post, handleResponse, get } from "../../services/http-service";

async function getVideoData(body, ip) {

  const resp = await post(getEventPredicationGameChannel, body, ip);

  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function getRelatedChannelsOrVODData(id, channel) {
  const resp = await get(getRelatedChannelsOrVODs(id, channel));
  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

function checkAds(data, type) {
  if (type == "local") {
    const local = data.filter((f) => f.type == "local")[0];
    if (local != null) {
      if (local.allow && local.allow == "true") {
        return {
          allow: true,
          topAdDesktop: local.topAdDesktop ? local.topAdDesktop : null,
          topAdMobile: local.topAdMobile ? local.topAdMobile : null,
          onVideo: local.onVideo ? local.onVideo : null,
          rightAd: local.rightAd ? local.rightAd : null,
          rightVideoAd: local.rightVideoAd ? local.rightVideoAd : null,
          bottomBannerAd: local.bottomBannerAd ? local.bottomBannerAd : null,
          bottomBannerAdMobile: local.bottomBannerAdMobile
            ? local.bottomBannerAdMobile
            : null,
          videoAdDuration: local.videoAdDuration
            ? +local.videoAdDuration
            : 2,
          topMobileAdWidth: +local.topAdMobileSize.trim().split(",")[0] || 320,
          topMobileAdHieght: +local.topAdMobileSize.trim().split(",")[1] || 100,
        };
      } else {
        return null;
      }
    }
  } else {
    const int = data.filter((f) => f.type == "international")[0];
    if (int != null) {
      if (int.allow && int.allow == "true") {
        return {
          allow: true,
          topAdDesktop: int.topAdDesktop ? int.topAdDesktop : null,
          topAdMobile: int.topAdMobile ? int.topAdMobile : null,
          onVideo: int.onVideo ? int.onVideo : null,
          rightAd: int.rightAd ? int.rightAd : null,
          rightVideoAd: int.rightVideoAd ? int.rightVideoAd : null,
          bottomBannerAd: int.bottomBannerAd ? int.bottomBannerAd : null,
          bottomBannerAdMobile: int.bottomBannerAdMobile
            ? int.bottomBannerAdMobile
            : null,
          topMobileAdWidth: +int.topAdMobileSize.trim().split(",")[0] || 320,
          topMobileAdHieght: +int.topAdMobileSize.trim().split(",")[1] || 100,
          videoAdDuration: int.videoAdDuration ? +int.videoAdDuration : 2,
        };
      } else {
        return null;
      }
    }
  }
}

export const PlayerService = {
  getVideoData,
  getRelatedChannelsOrVODData,
  checkAds,
};
