export const BASEURL = "https://api.tapmad.com/";
export const BASEURLAPP = "https://app.tapmad.com/";

export const getItemsByKeyword =
  BASEURL + "api/searchInAllContent/V1/en/android/";
export const getUserByUserId = BASEURL + "api/CheckUserByUserId";
export const getUserPaymentHistory = BASEURL + "api/getUserPaymentHistory";
export const getFeaturedHomePage =
  BASEURL + "api/getFeaturedHomePageWithRE/5/0/5/0/16";
export const getFeaturedBannerDetail = BASEURL + "api/getFeaturedBannerDetail";
export const getWebTabBanners = BASEURL + "api/getWebTabBanners/V1/en/Web";
export const getCardUser = BASEURL + "api/getCardUser";
export const sendOTP = BASEURL + "api/sendOTP/V1/en/web";
export const verifyOtp = BASEURL + "api/verifyOTP/V1/en/android";
export const setUserPinCode = BASEURL + "api/setUserPinCode";
export const verifyUserPinCode = BASEURL + "api/verifyUserPinCode";
export const getShowsWithPagination =
  BASEURL + "api/getShowsWithPagination/0/5/0/16";
export const updateUserProfile = BASEURL + "api/updateUserProfile";
export const creditCard = BASEURLAPP + "api/CardUserOrderTest";
export const initialPaymentTransaction =
  BASEURL + "api/initiatePaymentTransaction";

export const getMoviesWithPagination = (from, to) => {
  return BASEURL + `api/getMoviesWithPagination/${from}/${to - from}/0/16`;
};

export const getFeaturedHomepageWithRE = (from, to) => {
  return BASEURL + `api/getFeaturedHomePageWithRE/5/${from}/${to - from}/0/16`;
};

export const getChannelsWithPagination = (from, to) => {
  return BASEURL + `api/getChannelWithPagination/${from}/${to - from}/0/16`;
};

export const getMoviesWithPaginationInitial =
  BASEURL + "api/getMoviesWithPagination/0/5/0/16";

export const getChannelWithPaginationInitial =
  BASEURL + "api/getChannelWithPagination/0/5/0/16";
