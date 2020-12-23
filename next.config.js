const withWorkbox = require("next-with-workbox");

module.exports = withWorkbox({
  workbox: {
    dest: "public",
    swDest: "sw.js",
    swSrc: "worker.js",
    force: true,
    maximumFileSizeToCacheInBytes: 50000000
  }
});
