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
    });

    return config;
  },
};
const withCSS = require("@zeit/next-css");
// const withSCSS = require("@zeit/next-sass");
const withImages = require("next-images");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withImages();
module.exports = withCSS();

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
module.exports = {
  images: {
    domains: [
      "d34080pnh6e62j.cloudfront.net",
      "images.tapmad.com",
      "images004-a.erosnow.com",
    ],
    // deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = withBundleAnalyzer({})