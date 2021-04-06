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
export const paymentProcess = BASEURL + "api/processPaymentTransaction";
export const setUserPinCode = BASEURL + "api/setUserPinCode";
export const verifyUserPinCode = BASEURL + "api/verifyUserPinCode";
export const SignUpORSignInMobileOperatorToken =
  BASEURLAPP + "api/SignUpORSignInMobileOperatorToken";
export const Logout = BASEURLAPP + "api/logout";

export const getShowsWithPagination =
  BASEURL + "api/getShowsWithPagination/0/5/0/16";
export const getEventPredicationGameChannel =
  BASEURL + "api/getEventPredicationGameChannel";

export const updateUserProfile = BASEURL + "api/updateUserProfile";
export const creditCard = BASEURLAPP + "api/CardUserOrderTest";
export const initialPaymentTransaction =
  BASEURL + "api/initiatePaymentTransaction";
export const getSeasonVodByCategoryId =
  BASEURL + "api/getSeasonVodByCategoryId/V1/en/web/";
export const unsubscribePaymentTransaction =
  BASEURL + "api/unsubscribePaymentTransaction";
export const getMoviesWithPagination = (from, to) => {
  return BASEURL + `api/getMoviesWithPagination/${from}/${to - from}/0/16`;
};
export const getRelatedChannelsOrVODs = (videoId, vidChannel) => {
  return `https://api.tapmad.com/api/getRelatedChannelsOrVODs/V1/en/web/${videoId}/${vidChannel}`;
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

// catchup

export const getCatchupTv = BASEURL + "api/getCatchupTV/V1/en/web";
export const getCatchupVideoData = BASEURL + "api/getCatchupTVURL/V1/en/web/";

// ads setting

export const localHost = "http://localhost:3000/";
export const getFaqs = "/api/faq";
export const getAboutus = "/api/about-us";
export const getAdDetails = "/api/ads";
export const getCredentials = "/api/credentials";
export const homepageAds = "/api/homepage-ads";

export const adCsvFile = "public/ads.csv";
export const faqCsvFile = "public/faq.csv";
export const aboutUsCsvFile = "public/about-us.csv";
export const credentialsCsvFile = "public/credentials.csv";
export const homePageAdsCsvFile = "public/homepage-ads.csv";

// logging request
export const loggingBaseURl = "http://staging.simpaisa.com:1234";
export const actionRequest = "http://staging.simpaisa.com:1234/monitor";
export const actionRequestView = "http://staging.simpaisa.com:1234/view";
export const actionRequestSignUp = "http://staging.simpaisa.com:1234/signup";
export const loggingRequest = loggingBaseURl + "/analytics";

export const loggingTags = {
  search: "search",
  fetch: "fetch",
  login: "login",
  click: "click",
  signup: "signup",
};
