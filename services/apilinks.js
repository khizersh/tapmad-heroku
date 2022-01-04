export var BASEURL = "https://api.tapmad.com/";
export const BASEURLAPP = "https://app.tapmad.com/";
const BASEPAYMENTURL = "https://payments.tapmad.com/";
const BASEURLDEVELOPMENT = "https://developer.tapmad.com/dev/app/";
const STAGEURL = "https://stag-backend.tapmad.com/app/";

export const EPLPaymentUrl =
  STAGEURL + "api/getAllPaymentMethods/V1/en/android";
export const getAllPackages =
  STAGEURL + "api/getAllPaymentMethodsPackages/V1/en/web";
export const getItemsByKeyword =
  STAGEURL + "api/searchInAllContent/V1/en/android/";
// export const getUserByUserId = BASEURL + "api/CheckUserByUserIdNew";
export const getUserByUserId = STAGEURL + "api/getUserProfileDetail";
export const getShowsSearch = STAGEURL + "api/getShowsSearch";
export const getUserPaymentHistory = STAGEURL;
STAGEURL + "api/getUserPaymentHistory";
// home page api

export const getFeaturedHomePage =
  STAGEURL + "api/getHomeFeaturedPageWithRE/5/0/5/0/100";
export const getFeaturedBannerDetail = STAGEURL + "api/getFeaturedBannerDetail";
export const getWebTabBanners = STAGEURL + "api/getWebTabBanners/V1/en/Web";
export const getCardUser = STAGEURL + "api/getCardUser";
export const getEPLCardUser = STAGEURL + "api/getEplCardUser";
export const sendOTP = STAGEURL + "api/sendOTP/V1/en/web";
export const verifyOtp = STAGEURL + "api/verifyOTP/V1/en/android";
export const clearTokens = STAGEURL + "api/ClearAllCache/T";
// export const paymentProcess = BASEURLAPP + "api/processEplPaymentTransaction";
export const paymentProcess =
  STAGEURL + "api/processPaymentTransactionNewPackage";
export const setUserPinCode = STAGEURL + "api/setUserPinCode";
export const verifyUserPinCode = STAGEURL + "api/verifyUserPinCode";
export const UserSignUpPromoCode = STAGEURL + "api/UserSignUpPromoCode";
export const SignUpORSignInMobileOperatorToken =
  STAGEURL + "api/SignUpORSignInMobileOperatorToken";
export const SignUpORSignInMobileOperatorTokenByPin =
  STAGEURL + "api/SignUpORSignInMobileOperatorTokenByPin";
export const Logout = STAGEURL + "api/logout";

export const getAllNews = STAGEURL + "api/getAllTnnNews/v1/en/android";
export const getNewsDetailBId =
  STAGEURL + "api/getTnnNewsDetailByNewsID/v1/en/android/";

export const getShowsWithPagination =
  STAGEURL + "api/getAllShowsWithPagination/0/5/0/16";
// player page wali api / movie ka data lany wali
export const getEventPredicationGameChannel =
  STAGEURL + "api/getUserStreamWithPackagesChannelsChat";

// export const getEventPredicationGameChannel =
// BASEURLDEVELOPMENT + "api/getEventPredicationGameChannelToken";

export const updateUserProfile = STAGEURL + "api/updateUserProfile";
export const creditCard = STAGEURL + "api/makeCheckOutPayment";
export const UBLCard = STAGEURL + "api/CardUserOrderTest";
export const initialPaymentTransaction =
  STAGEURL + "api/initiateEplPaymentTransaction";
export const initialPaymentTransactionNew =
  STAGEURL + "api/initiatePaymentTransactionNewPackage";

// shows api
export const getSeasonVodByCategoryId =
  STAGEURL + "api/getSeasonContentByCategoryId/v1/en/web/";
// BASEURLDEVELOPMENT + "api/getSeasonVodByCategoryId/V1/en/web/";

export const unsubscribePaymentTransaction =
  STAGEURL + "api/unsubscribeUserSubscriptiption";
export const getMoviesWithPagination = (from, to) => {
  return STAGEURL + `api/getAllMoviesWithPagination/${from}/${to - from}/0/16`;
};
export const getRelatedChannelsOrVODs = (videoId, vidChannel) => {
  return `${STAGEURL}api/getAllRelatedChannelsOrVODs/V1/en/web/${videoId}/${vidChannel}`;
};
export const getFeaturedHomepageWithRE = (from, to) => {
  return (
    STAGEURL + `api/getFeaturedHomePageWithRE/5/${from}/${to - from}/0/100`
  );
};
export const getChannelsWithPagination = (from, to) => {
  return STAGEURL + `api/getAllChannelWithPagination/${from}/${to - from}/0/16`;
};

export const getMoviesWithPaginationInitial =
  STAGEURL + "api/getAllMoviesWithPagination/0/5/0/16";
export const getChannelWithPaginationInitial =
  STAGEURL + "api/getAllChannelWithPagination/0/5/0/16";

// catchup

export const getCatchupTv = STAGEURL + "api/getCatchupTV/V1/en/web";
export const getCatchupVideoData = STAGEURL + "api/getCatchupTVURL/V1/en/web/";

// SEO settings

export const SEOTvSeriesData = STAGEURL + "api/getSeoTvSeriesData";
export const SEOTvShowsByCategory = STAGEURL + "api/getSeoTvShowsByCategoryId";
export const SEOLiveChannelData = STAGEURL + "api/getSeoLiveChannelsData";

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
export const getPSLTabs = STAGEURL + "api/getAllTabs/v1/en/android";
export const submitMatchBids =
  STAGEURL + "api/updateNewUserEventQuestionAnswers";
export const getUserRooms = (userId, channelId) =>
  STAGEURL + `api/getAllChatRoomList/v1/en/android/${userId}/${channelId}`;
export const createRoom = STAGEURL + "api/createNewChatRoom";
export const joinRoom = STAGEURL + "api/joinChatRoom";

// PSL bids / game
export const deleteRoom = STAGEURL + "api/leaveUserChatRoom";
// PSL bids
export const getAllMatches = STAGEURL + "api/getMatchDetail";
export const getMatchBetsByUserId = STAGEURL + "api/getMatchBetsByUserId";
export const getAllLeagues = STAGEURL + "api/getAllOnlineLeagues";
export const getLeaderBoardByLeagueId =
  STAGEURL + "api/getLeaderBoardByLeagueId";
export const getBuyCoinsPackages =
  STAGEURL + "api/getBuyCoinsPackages/v1/en/web";
export const makeCoinTransaction = STAGEURL + "api/makeCoinsPaymentTransaction";
export const rewardPredicationCoda = STAGEURL + "api/rewardPredicationCoda";
export const updateRewardStore = STAGEURL + "api/updateRewardsStoreTestV2";
export const getUserChallenges = BASEURLDEVELOPMENT + "api/getUserChallenges";

// get all country
export const getAllowRegions = STAGEURL + "api/getAllCountries/v1/en/web";

export const viewMoreContent = (from, to, sectionId, pageId) =>
  STAGEURL +
  `api/getExtraContentWithPagination/${from}/${to}/${sectionId}/${pageId}`;

export const loggingTags = {
  search: "search",
  fetch: "fetch",
  login: "login",
  click: "click",
  signup: "signup",
};

// New login design apis

export const PaymentPackages =
  STAGEURL + "api/getPackagePaymentMethods/V1/en/android";
STAGEURL + "api/getPackagePaymentMethods/V1/en/android";
export const PaymentPackagesByUserId =
  STAGEURL + "api/getPackagePaymentMethodsByUserId/V1/en/android/";
