import {
  getFeaturedBannerDetail,
  getFeaturedHomePage,
  getFeaturedHomepageWithRE,
  getWebTabBanners,
} from "../../../services/apilinks";
import { get } from "../../../services/http-service";
import { handleResponse } from "../../../services/http-service";

async function getFeaturedHomePageData(ip) {
  const resp = await get(getFeaturedHomePage, ip);
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

async function getFeaturedBannerDetailData(ip) {
  const resp = await get(getFeaturedBannerDetail);
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

async function getWebTabBannersData(ip) {
  const resp = await get(getWebTabBanners);
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

async function getFeaturedHomepageWithRe(from, to) {
  let url = getFeaturedHomepageWithRE(from, to);
  const resp = await get(url);
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

function modifyHomePageResponse(movies) {
  if (movies && movies.Sections && movies.Sections.length > 0) {
    return {
      Sections: {
        Movies: movies.Sections,
        totalSections: movies.totalSections,
      },
    };
  }
  return {
    Sections: {
      Movies: [],
      totalSections: 0,
    },
  };
}
export const HomeService = {
  getFeaturedHomePageData,
  getFeaturedBannerDetailData,
  getWebTabBannersData,
  getFeaturedHomepageWithRe,
  modifyHomePageResponse,
};
