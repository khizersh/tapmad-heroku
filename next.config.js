const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: false,
    register: true,
    scope: "/",
    sw: "/sw.js"
  }
});

const withOffline = require("next-offline");

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /api/,
        handler: "NetworkFirst",
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              "x-test": "true"
            }
          }
        }
      }
    ]
  }
});
