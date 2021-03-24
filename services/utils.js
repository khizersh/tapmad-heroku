const { IsLiveChannel, IsSyno, IsCategory } = require("./constants");
const { Cookie } = require("./cookies");

function manipulateUrls(router) {
  var movieId = [...router.slug].pop();
  let isChannel = movieId.charAt(movieId.length - 1);
  let OriginalMovieId = movieId.substring(0, movieId.length - 1);
  let isFree = OriginalMovieId.slice(0, 1);
  let cleanVODId = OriginalMovieId.slice(1, OriginalMovieId.length - 1);
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

function SEOFriendlySlugsForVideo(event) {
  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/watch/${cleanName}/${event.IsVideoFree ? "1" : "0"}${
    event.VideoEntityId
  }${event.IsVideoChannel ? "1" : "0"}`;

  return slug;
}

function SEOFriendlySlugsIsCategoryFalse(event) {
  let prefix = "syno/season";
  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/${prefix}/${cleanName}/${event.VideoEntityId}${
    event.IsVideoChannel ? "1" : "0"
  }`;
  return slug;
}
function SEOFriendlySlugsIsCategoryTrue(event) {
  let prefix = "category/season";
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
  if (key != "watch" && url != "/sign-up") {
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
};
