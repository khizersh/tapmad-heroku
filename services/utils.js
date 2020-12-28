function manipulateUrls(router) {
  var movieId = [...router.slug].pop();
  let isChannel = movieId.charAt(movieId.length - 1);
  let OriginalMovieId = movieId.substring(0, movieId.length - 1);
  return { isChannel: isChannel, OriginalMovieId: OriginalMovieId };
}

module.exports = {
  manipulateUrls,
};
