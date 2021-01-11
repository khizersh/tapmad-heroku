function manipulateUrls(router) {

  console.log("Router url: ",router);
  var movieId = [...router.slug].pop();
  let isChannel = movieId.charAt(movieId.length - 1);
  let OriginalMovieId = movieId.substring(0, movieId.length - 1);
  return { isChannel: isChannel, OriginalMovieId: OriginalMovieId };
}

function manipulateUrlsForCatgeory(router) {

  console.log("Router url: ",router);
  var categoryId = [...router.slug].pop();
  return { categoryId: categoryId};
}

function basicSliderConfig(slidesToShow) {
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
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };
}

function SEOFriendlySlugsForVideo(event, prefix){
  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/${prefix}/${cleanName}/${event.VideoEntityId}${
   event.IsVideoChannel ? "1" : "0"
 }`;

 return slug;
}

function SEOFriendlySlugsIsCategoryFalse(event, prefix) {
  let slug;
  if (event.IsVideoChannel) {
    let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
     slug = `/${prefix}/${cleanName}/${event.VideoEntityId}${
      event.IsVideoChannel ? "1" : "0"
    }`;
  }else{
    prefix = "syno/season";
    let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
     slug = `/${prefix}/${cleanName}/${event.VideoEntityId}${event.IsVideoChannel ? "1" : "0"}`;
  }

  return slug;
}
function SEOFriendlySlugsIsCategoryTrue(event, prefix) {

  let cleanName = event.VideoName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let slug = `/${prefix}/${cleanName}/${event.VoDCategoryId}`;
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

module.exports = {
  manipulateUrls,
  basicSliderConfig,
  calculateRowsToFetch,
  pushNewMoviesIntoList,
  SEOFriendlySlugsIsCategoryFalse,
  SEOFriendlySlugsIsCategoryTrue,
  manipulateUrlsForCatgeory,
  SEOFriendlySlugsForVideo
};
