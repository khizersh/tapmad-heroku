export var BASEURL = "https://api.tapmad.com/";
export const BASEURLAPP = "https://app.tapmad.com/";
const BASEPAYMENTURL = "https://payments.tapmad.com/";
const BASEURLDEVELOPMENT = "https://developer.tapmad.com/dev/app/";
const STAGEURL = "https://stag-backend.tapmad.com/app/";

export const EPLPaymentUrl =
  BASEURLAPP + "api/getAllPaymentMethods/V1/en/android";

export const getAllPackages =
  BASEURLAPP + "api/getAllPaymentMethodsPackages/V1/en/web";

export const getAllPackagesWithPtcl =
  STAGEURL + "api/getPaymentMethodWithPtcl/V1/en/web";

export const getItemsByKeyword =
  BASEURLAPP + "api/searchInAllContent/V1/en/android/";

// export const getUserByUserId = BASEURL + "api/CheckUserByUserIdNew";

export const getUserByUserId = BASEURLAPP + "api/getUserProfileDetail";
export const getShowsSearch = BASEURLAPP + "api/getShowsSearch";
export const getUserPaymentHistory = BASEURLAPP + "api/getUserPaymentHistory";
// home page api

export const getFeaturedHomePage =
  BASEURLAPP + "api/getHomeFeaturedPageWithRE/5/0/5/0/100";
export const getFeaturedBannerDetail =
  BASEURLAPP + "api/getFeaturedBannerDetail";
export const getWebTabBanners = BASEURLAPP + "api/getWebTabBanners/V1/en/Web";
export const getCardUser = BASEURLAPP + "api/getCardUser";
export const getEPLCardUser = BASEURLAPP + "api/getEplCardUser";
export const sendOTP = BASEURLAPP + "api/sendOTP/V1/en/web";
export const sendOTPWithOperator =
  BASEURLAPP + "api/sendOTPWithOperator/V1/en/android";
export const verifyOtp = BASEURLAPP + "api/verifyOTP/V1/en/android";
export const clearTokens = BASEURLAPP + "api/ClearAllCache/T";
// export const paymentProcess = BASEURLAPP + "api/processEplPaymentTransaction";
export const paymentProcess =
  BASEURLAPP + "api/processPaymentTransactionNewPackage";
export const setUserPinCode = BASEURLAPP + "api/setUserPinCode";
export const verifyUserPinCode = BASEURLAPP + "api/verifyUserPinCode";
export const UserSignUpPromoCode = BASEURLAPP + "api/UserSignUpPromoCode";
export const SignUpORSignInMobileOperatorToken =
  BASEURLAPP + "api/SignUpORSignInMobileOperatorToken";
export const SignUpORSignInMobileOperatorTokenByPin =
  BASEURLAPP + "api/SignUpORSignInMobileOperatorTokenByPin";
export const Logout = BASEURLAPP + "api/logout";

export const getAllNews = BASEURLAPP + "api/getAllTnnNews/v1/en/android";
export const getNewsDetailBId =
  BASEURLAPP + "api/getTnnNewsDetailByNewsID/v1/en/android/";

export const getShowsWithPagination =
  BASEURLAPP + "api/getAllShowsWithPagination/0/5/0/16";
// player page wali api / movie ka data lany wali
export const getEventPredicationGameChannel =
  BASEURLAPP + "api/getUserStreamWithPackagesChannelsChat";

// export const getEventPredicationGameChannel =
// BASEURLDEVELOPMENT + "api/getEventPredicationGameChannelToken";

export const updateUserProfile = BASEURLAPP + "api/updateUserProfile";
export const creditCard = BASEURLAPP + "api/makeCheckOutPayment";
export const UBLCard = BASEURLAPP + "api/CardUserOrderTest";
export const initialPaymentTransaction =
  BASEURLAPP + "api/initiateEplPaymentTransaction";
export const initialPaymentTransactionNew =
  BASEURLAPP + "api/initiatePaymentTransactionNewPackage";

// shows api
export const getSeasonVodByCategoryId =
  BASEURLAPP + "api/getSeasonContentByCategoryId/v1/en/web/";
// BASEURLDEVELOPMENT + "api/getSeasonVodByCategoryId/V1/en/web/";

export const unsubscribePaymentTransaction =
  BASEURLAPP + "api/unsubscribeUserSubscriptiption";
export const getMoviesWithPagination = (from, to) => {
  return (
    BASEURLAPP + `api/getAllMoviesWithPagination/${from}/${to - from}/0/16`
  );
};
export const getRelatedChannelsOrVODs = (videoId, vidChannel) => {
  return `${BASEURLAPP}api/getAllRelatedChannelsOrVODs/V1/en/web/${videoId}/${vidChannel}`;
};
export const getFeaturedHomepageWithRE = (from, to) => {
  return (
    BASEURLAPP + `api/getFeaturedHomePageWithRE/5/${from}/${to - from}/0/100`
  );
};
export const getChannelsWithPagination = (from, to) => {
  return (
    BASEURLAPP + `api/getAllChannelWithPagination/${from}/${to - from}/0/16`
  );
};

export const getMoviesWithPaginationInitial =
  BASEURLAPP + "api/getAllMoviesWithPagination/0/5/0/16";
export const getChannelWithPaginationInitial =
  BASEURLAPP + "api/getAllChannelWithPagination/0/5/0/16";

// catchup

export const getCatchupTv = BASEURLAPP + "api/getCatchupTV/V1/en/android";
export const getCatchupVideoData =
  BASEURLAPP + "api/getCatchupTVURL/V1/en/web/";

// SEO settings

export const SEOTvSeriesData = BASEURLAPP + "api/getSeoTvSeriesData";
export const SEOTvShowsByCategory =
  BASEURLAPP + "api/getSeoTvShowsByCategoryId";
export const SEOLiveChannelData = BASEURLAPP + "api/getSeoLiveChannelsData";

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
export const getPSLTabs = BASEURLAPP + "api/getAllTabs/v1/en/android";
// export const getPSLTabsForWeb = BASEURLAPP + "api/getAllWebChatTabs/v1/en/web";
export const getPSLTabsForWeb =
  BASEURLAPP + "api/getAllNewWebChatTabs/v1/en/web";
export const submitMatchBids =
  BASEURLAPP + "api/updateNewUserEventQuestionAnswers";
export const getUserRooms = (userId, channelId) =>
  BASEURLAPP + `api/getAllChatRoomList/v1/en/android/${userId}/${channelId}`;
export const createRoom = BASEURLAPP + "api/createNewChatRoom";
export const joinRoom = BASEURLAPP + "api/joinChatRoom";

// PSL bids / game
export const deleteRoom = BASEURLAPP + "api/leaveUserChatRoom";
// PSL bids
export const getAllMatches = BASEURLAPP + "api/getMatchDetail";
export const getMatchBetsByUserId = BASEURLAPP + "api/getMatchBetsByUserId";
export const getAllLeagues = BASEURLAPP + "api/getAllOnlineLeagues";
export const getLeaderBoardByLeagueId =
  BASEURLAPP + "api/getLeaderBoardByLeagueId";
export const getBuyCoinsPackages =
  BASEURLAPP + "api/getBuyCoinsPackages/v1/en/web";
export const makeCoinTransaction =
  BASEURLAPP + "api/makeCoinsPaymentTransaction";
export const rewardPredicationCoda = BASEURLAPP + "api/rewardPredicationCoda";
export const updateRewardStore = BASEURLAPP + "api/updateRewardsStoreTestV2";
export const getUserChallenges = BASEURLAPP + "api/getUserChallenges";

// get all country
export const getAllowRegions = BASEURLAPP + "api/getAllCountries/v1/en/web";

export const viewMoreContent = (from, to, sectionId, pageId) =>
  BASEURLAPP +
  `api/getExtraContentWithPagination/${from}/${to}/${sectionId}/${pageId}`;

export const loggingTags = {
  search: "search",
  fetch: "fetch",
  login: "login",
  click: "click",
  signup: "signup",
};

// New login design apis

export const PaymentPackages = getAllPackagesWithPtcl;
  // BASEURLAPP + "api/getPackagePaymentMethods/V1/en/android";

export const PaymentPackagesByUserId =
  BASEURLAPP + "api/getPackagePaymentMethodsByUserId/V1/en/android/";

export const isUserSubscribe = BASEURLAPP + "api/isUserSubscribe";
