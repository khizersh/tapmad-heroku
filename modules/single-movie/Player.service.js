import {
  getEventPredicationGameChannel,
  getRelatedChannelsOrVODs,
} from "../../services/apilinks";
import { post, handleResponse, get } from "../../services/http-service";

async function getVideoData(body) {
  const resp = await post(getEventPredicationGameChannel, body);
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
          videoAdDuration: local.videoAdDuration
            ? +local.videoAdDuration
            : 200000,
        };
      } else {
        return null;
      }
    }
  } else {
    const int = data.filter((f) => f.type == "international")[0];
    if (int != null) {
      if (int.allow && int.allow == "true") {
        let splitTopAd = int.topAd.split("$");
        return {
          allow: true,
          topAdDesktop: int.topAdDesktop ? int.topAdDesktop : null,
          topAdMobile: int.topAdMobile ? int.topAdMobile : null,
          onVideo: int.onVideo ? int.onVideo : null,
          rightAd: int.rightAd ? int.rightAd : null,
          rightVideoAd: int.rightVideoAd ? int.rightVideoAd : null,
          bottomBannerAd: int.bottomBannerAd ? int.bottomBannerAd : null,
          videoAdDuration: int.videoAdDuration ? +int.videoAdDuration : 200000,
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
