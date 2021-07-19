const { IsLiveChannel, IsSyno, IsCategory } = require("./constants");
const { Cookie } = require("./cookies");
const CryptoJS = require("crypto-js");

function manipulateUrls(router) {
  var movieId = [...router.slug].pop();
  let isChannel = movieId.charAt(movieId.length - 1);
  let OriginalMovieId = movieId.substring(0, movieId.length - 1);
  let isFree = OriginalMovieId.slice(0, 1);
  let cleanVODId = OriginalMovieId.slice(1, OriginalMovieId.length);
  return {
    isChannel: isChannel,
    OriginalMovieId: OriginalMovieId,
    isFree: isFree,
    CleanVideoId: cleanVODId,
  };
}

function manipulateUrlsForCatgeory(router) {
  var categoryId = [...router.slug].pop();
  return { categoryId: categoryId };
}

function basicSliderConfig(slidesToShow, mobileView) {
  return {
    dots: false,
    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: mobileView ? mobileView : 5,
          slidesToScroll: mobileView ? mobileView : 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: mobileView ? mobileView : 3,
          slidesToScroll: mobileView ? mobileView : 3,
          arrows: false,
        },
      },
    ],
  };
}

function SEOFriendlySlugsForVideo(event, catchup = false) {
  let vidChannel;
  if (event.IsVideoChannel == "0") {
    vidChannel = 0;
  } else {
    vidChannel = 1;
  }

  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `${catchup ? "/catchup-watch" : "/watch"}/${cleanName}/${event.IsVideoFree ? "1" : "0"
    }${event.VideoEntityId}${event.IsVideoChannel ? "1" : "0"}`;

  return slug;
}

function SEOFriendlySlugsIsCategoryFalse(event) {
  let prefix = "play";
  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/${prefix}/${cleanName}/${event.VideoEntityId}${event.IsVideoChannel ? "1" : "0"
    }`;
  return slug;
}
function viewMoreCleanUrls(sectionName, sectionId, name) {
  var pageId = "";
  if (name == "Live") {
    pageId = 1;
  } else if (name == "Movies") {
    pageId = 2;
  } else if (name == "Shows") {
    pageId = 3;
  }
  var cleanName = sectionName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  var slug = `/more/${cleanName}/${sectionId}/${pageId}`;
  return slug;
}

function findImageInVODObject(video) {
  if (video.hasOwnProperty('VideoImageThumbnail')) {
    return video.VideoImageThumbnail;
  } else if (video.hasOwnProperty('ChannelTVImage')) {
    return video.ChannelTVImage;
  } else if (video.hasOwnProperty('VideoOnDemandThumb')) {
    return video.VideoOnDemandThumb;
  } else {
    return video.NewChannelThumbnailPath;
  }
}
function SEOFriendlySlugsIsCategoryTrue(event) {
  let prefix = "category";
  let name = event.VideoName ? event.VideoName : event.CategoryName;
  let cleanName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/${prefix}/${cleanName}/${event.VoDCategoryId}`;
  return slug;
}

function setUrlAccordingToVideoType(movie, type) {
  let slug = "";
  if (type == IsLiveChannel) {
    if (!movie.IsVideoChannel) {
      slug = SEOFriendlySlugsIsCategoryFalse(movie);
    } else {
      slug = SEOFriendlySlugsForVideo(movie);
    }
  } else if (type == IsCategory) {
    slug = SEOFriendlySlugsIsCategoryTrue(movie);
  }
  return slug;
}

// catchup
function SEOFriendlySlugsForCatchupVideo(event) {
  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/catchup/${cleanName}/${event.IsVideoFree ? "1" : "0"}${event.VideoEntityId
    }${event.IsVideoChannel ? "1" : "0"}`;

  return slug;
}

function SEOFriendlySlugsForCatchup(event) {
  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/catchup/${cleanName}/${event.IsVideoFree ? "1" : "0"}${event.VideoEntityId
    }${event.IsVideoChannel ? "1" : "0"}`;

  return slug;
}

function calculateRowsToFetch(currentRow, movies) {
  let rowFrom = currentRow;
  let rowsTo = 0;
  var noOfRowsToFetch = movies.Sections.totalSections - rowFrom;
  if (noOfRowsToFetch > 1) {
    rowsTo = rowFrom + 2;
    return { rowsTo: rowsTo, rowFrom: currentRow };
  } else {
    rowsTo = rowFrom + noOfRowsToFetch;
    return { rowsTo: rowsTo, rowFrom: currentRow };
  }
}

function pushNewMoviesIntoList(localMovies, newMovies) {
  let movieClone = localMovies;
  movieClone = {
    ...movieClone,
    Sections: {
      Movies: [...localMovies.Sections.Movies, ...newMovies.Sections.Movies],
    },
  };
  return movieClone;
}

function setUrlToCookies(key, url) {
  if (url != "/sign-up" && url != "/sign-in" && url != "/myaccount") {
    Cookie.setCookies("backUrl", url);
  }
}

function isAuthentictedUser() {
  let userId = Cookie.getCookies("userId");
  let isAuth = Cookie.getCookies("isAuth");
  if (userId && isAuth == 1) {
    return true;
  } else {
    return false;
  }
}

function isAuthentictedServerSide(req) {
  let cookie = Cookie.parseCookies(req);

  if (cookie.userId && cookie.isAuth == 1) {
    return true;
  } else {
    return false;
  }
}
function closeNavBar() {
  document.getElementsByClassName("nav-toggle")[0].classList.remove("openNav");
  document.getElementsByClassName("menu")[0].classList.remove("active-nav");
}
const encryptWithAES = (text) => {
  const passphrase = "My Secret Passphrase";
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};
//The Function Below To Decrypt Text
const decryptWithAES = (ciphertext) => {
  const passphrase = "My Secret Passphrase";
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
function getUserDetails() {
  var mobile = Cookie.getCookies("user_mob");
  var userId = Cookie.getCookies("userId");
  if (mobile && userId) {
    return { mobile: decryptWithAES(mobile), userId: userId };
  } else {
    return { mobile: "", userId: "" };
  }
}
function SignOutUser() { }
function addScriptUrlInDom(src) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  document.getElementsByTagName("head")[0].appendChild(script);
}
function addScriptCodeInDom(src) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.setAttribute("defer", true);
  script.innerHTML = src;
  document.getElementsByTagName("head")[0].appendChild(script);
}
function log() {
  console.log(arguments);
}
module.exports = {
  manipulateUrls,
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
  manipulateUrlsForCatgeory,
  setUrlAccordingToVideoType,
  SEOFriendlySlugsForVideo,
  isAuthentictedUser,
  setUrlToCookies,
  isAuthentictedServerSide,
  SEOFriendlySlugsForCatchupVideo,
  closeNavBar,
  encryptWithAES,
  decryptWithAES,
  getUserDetails,
  SignOutUser,
  addScriptCodeInDom,
  addScriptUrlInDom,
  viewMoreCleanUrls,
  findImageInVODObject,
  log
};
