module.exports = {
  images: {
    domains: [
      "d34080pnh6e62j.cloudfront.net",
      "images.tapmad.com",
      "images004-a.erosnow.com",
    ],
  },
};
const withCSS = require("@zeit/next-css");
const withSCSS = require("@zeit/next-sass");
module.exports = withCSS(withSCSS({}));
