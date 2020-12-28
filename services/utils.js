function manipulateUrls(router) {
  var movieId = [...router.slug].pop();
  let isChannel = movieId.charAt(movieId.length - 1);
  let OriginalMovieId = movieId.substring(0, movieId.length - 1);
  return { isChannel: isChannel, OriginalMovieId: OriginalMovieId };
}

function basicSliderConfig(slidesToShow) {
  return {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
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
function SEOFriendlySlugs(event, prefix) {
  let cleanName = event.VideoName.split(" ").join("-").toLowerCase();
  let slug = `/watch/${prefix}/${cleanName}/${event.VideoEntityId}${
    event.IsVideoChannel ? "1" : "0"
  }`;
  return slug;
}
module.exports = {
  manipulateUrls,
  basicSliderConfig,
  SEOFriendlySlugs,
};
