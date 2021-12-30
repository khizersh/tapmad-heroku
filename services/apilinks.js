export var BASEURL = "https://api.tapmad.com/";
export const BASEURLAPP = "https://app.tapmad.com/";
const BASEPAYMENTURL = "https://payments.tapmad.com/";
const BASEURLDEVELOPMENT = "https://developer.tapmad.com/dev/app/";

export const EPLPaymentUrl =
  BASEURLAPP + "api/getAllPaymentMethods/V1/en/android";
export const getAllPackages =
  BASEURLAPP + "api/getAllPaymentMethodsPackages/V1/en/web";
export const getItemsByKeyword =
  BASEURL + "api/searchInAllContent/V1/en/android/";
// export const getUserByUserId = BASEURL + "api/CheckUserByUserIdNew";
export const getUserByUserId = BASEURLDEVELOPMENT + "api/getUserProfileDetail";
export const getShowsSearch = BASEURLDEVELOPMENT + "api/getShowsSearch";
export const getUserPaymentHistory =
  BASEURLDEVELOPMENT + "api/getUserPaymentHistory";
// home page api
export const getFeaturedHomePage =
  BASEURLDEVELOPMENT + "api/getFeaturedHomePageWithRE/5/0/5/0/100";
export const getFeaturedBannerDetail = BASEURL + "api/getFeaturedBannerDetail";
export const getWebTabBanners = BASEURL + "api/getWebTabBanners/V1/en/Web";
export const getCardUser = BASEURLDEVELOPMENT + "api/getCardUser";
export const getEPLCardUser = BASEURLAPP + "api/getEplCardUser";
export const sendOTP = BASEURLDEVELOPMENT + "api/sendOTP/V1/en/web";
export const verifyOtp = BASEURLDEVELOPMENT + "api/verifyOTP/V1/en/android";
export const clearTokens = BASEURLDEVELOPMENT + "api/ClearAllCache/T";
// export const paymentProcess = BASEURLAPP + "api/processEplPaymentTransaction";
export const paymentProcess =
  BASEURLDEVELOPMENT + "api/processPaymentTransactionNewPackage";
export const setUserPinCode = BASEURLDEVELOPMENT + "api/setUserPinCode";
export const verifyUserPinCode = BASEURLDEVELOPMENT + "api/verifyUserPinCode";
export const UserSignUpPromoCode =
  BASEURLDEVELOPMENT + "api/UserSignUpPromoCode";
export const SignUpORSignInMobileOperatorToken =
  BASEURLDEVELOPMENT + "api/SignUpORSignInMobileOperatorToken";
export const SignUpORSignInMobileOperatorTokenByPin =
  BASEURLDEVELOPMENT + "api/SignUpORSignInMobileOperatorTokenByPin";
export const Logout = BASEURLAPP + "api/logout";

export const getAllNews = BASEURLAPP + "api/getAllTnnNews/v1/en/android";
export const getNewsDetailBId =
  BASEURLAPP + "api/getTnnNewsDetailByNewsID/v1/en/android/";

export const getShowsWithPagination =
  BASEURLDEVELOPMENT + "api/getShowsWithPagination/0/5/0/16";
// player page wali api / movie ka data lany wali
export const getEventPredicationGameChannel =
  BASEURLDEVELOPMENT + "api/getUserStreamWithPackagesChannelsChat";

// export const getEventPredicationGameChannel =
// BASEURLDEVELOPMENT + "api/getEventPredicationGameChannelToken";

export const updateUserProfile = BASEURLDEVELOPMENT + "api/updateUserProfile";
export const creditCard = BASEURLAPP + "api/makeCheckOutPayment";
export const UBLCard = BASEURLDEVELOPMENT + "api/CardUserOrderTest";
export const initialPaymentTransaction =
  BASEURLAPP + "api/initiateEplPaymentTransaction";
export const initialPaymentTransactionNew =
  BASEURLDEVELOPMENT + "api/initiatePaymentTransactionNewPackage";

// shows api
export const getSeasonVodByCategoryId =
  BASEURLDEVELOPMENT + "api/getSeasonContentByCategoryId/v1/en/web/";
// BASEURLDEVELOPMENT + "api/getSeasonVodByCategoryId/V1/en/web/";

export const unsubscribePaymentTransaction =
  BASEURLDEVELOPMENT + "api/unsubscribeUserSubscriptiption";
export const getMoviesWithPagination = (from, to) => {
  return (
    BASEURLDEVELOPMENT + `api/getMoviesWithPagination/${from}/${to - from}/0/16`
  );
};
export const getRelatedChannelsOrVODs = (videoId, vidChannel) => {
  return `${BASEURLDEVELOPMENT}api/getRelatedChannelsOrVODs/V1/en/web/${videoId}/${vidChannel}`;
};
export const getFeaturedHomepageWithRE = (from, to) => {
  return (
    BASEURLDEVELOPMENT +
    `api/getFeaturedHomePageWithRE/5/${from}/${to - from}/0/100`
  );
};
export const getChannelsWithPagination = (from, to) => {
  return (
    BASEURLDEVELOPMENT +
    `api/getChannelWithPagination/${from}/${to - from}/0/16`
  );
};
export const getMoviesWithPaginationInitial =
  BASEURLDEVELOPMENT + "api/getMoviesWithPagination/0/5/0/16";
export const getChannelWithPaginationInitial =
  BASEURLDEVELOPMENT + "api/getChannelWithPagination/0/5/0/16";

// catchup

export const getCatchupTv = BASEURL + "api/getCatchupTV/V1/en/web";
export const getCatchupVideoData = BASEURL + "api/getCatchupTVURL/V1/en/web/";

// SEO settings

export const SEOTvSeriesData = BASEURL + "api/getSeoTvSeriesData";
export const SEOTvShowsByCategory = BASEURL + "api/getSeoTvShowsByCategoryId";
export const SEOLiveChannelData = BASEURL + "api/getSeoLiveChannelsData";

// ads setting

export const localHost = "http://localhost:3000/";
export const getFaqs = "/api/faq";
export const getAboutus = "/api/about-us";
export const getAdDetails = "/api/ads";
export const getCredentials = "/api/credentials";
export const homepageAds = "/api/homepage-ads";

export const adCsvFile = "public/ads.csv";
export const campaignFCsvFile = "public/campaign-pages.csv";
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

// PSL Chat Bids
export const getPSLTabs = BASEURLDEVELOPMENT + "api/getAllTabs/v1/en/android";
export const submitMatchBids =
  BASEURLDEVELOPMENT + "api/updateNewUserEventQuestionAnswers";
export const getUserRooms = (userId, channelId) =>
  BASEURLDEVELOPMENT +
  `api/getAllChatRoomList/v1/en/android/${userId}/${channelId}`;
export const createRoom = BASEURLDEVELOPMENT + "api/createNewChatRoom";
export const joinRoom = BASEURLDEVELOPMENT + "api/joinChatRoom";

// PSL bids / game
export const deleteRoom = BASEURLDEVELOPMENT + "api/leaveUserChatRoom";
// PSL bids
export const getAllMatches = BASEURLDEVELOPMENT + "api/getMatchDetail";
export const getMatchBetsByUserId =
  BASEURLDEVELOPMENT + "api/getMatchBetsByUserId";
export const getAllLeagues = BASEURLDEVELOPMENT + "api/getAllOnlineLeagues";
export const getLeaderBoardByLeagueId =
  BASEURLDEVELOPMENT + "api/getLeaderBoardByLeagueId";
export const getBuyCoinsPackages =
  BASEURLDEVELOPMENT + "api/getBuyCoinsPackages/v1/en/web";
export const makeCoinTransaction =
  BASEURLDEVELOPMENT + "api/makeCoinsPaymentTransaction";
export const rewardPredicationCoda =
  BASEURLDEVELOPMENT + "api/rewardPredicationCoda";
export const updateRewardStore =
  BASEURLDEVELOPMENT + "api/updateRewardsStoreTestV2";
export const getUserChallenges = BASEURLDEVELOPMENT + "api/getUserChallenges";

// get all country
export const getAllowRegions = BASEURLAPP + "api/getAllCountries/v1/en/web";

export const viewMoreContent = (from, to, sectionId, pageId) =>
  BASEURLAPP +
  `api/getMoreContentWithPagination/${from}/${to}/${sectionId}/${pageId}`;

export const loggingTags = {
  search: "search",
  fetch: "fetch",
  login: "login",
  click: "click",
  signup: "signup",
};

// New login design apis

export const PaymentPackages =
  BASEURLDEVELOPMENT + "api/getPackagePaymentMethods/V1/en/android";
BASEURLDEVELOPMENT + "api/getPackagePaymentMethods/V1/en/android";
export const PaymentPackagesByUserId =
  BASEURLDEVELOPMENT + "api/getPackagePaymentMethodsByUserId/V1/en/android/";
