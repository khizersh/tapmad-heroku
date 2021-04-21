module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: "csv-loader",
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      },
    },
      {
        test: /\.js$/,
        include: [
          /node_modules/
        ],
        loader: 'babel-loader'
      }
    );
    return config;
  },
  images: {
    domains: [
      "d34080pnh6e62j.cloudfront.net",
      "images.tapmad.com",
      "images004-a.erosnow.com",
    ],
  },
};
const withCSS = require("@zeit/next-css");
// const withSCSS = require("@zeit/next-sass");
const withImages = require("next-images");
module.exports = withImages();
module.exports = withCSS();

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
