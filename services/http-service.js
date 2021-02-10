const { default: axios } = require("axios");

function get(url, ip = "39.44.245.125") {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": ip,
    },
  });
}

function post(url, body) {
  return axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

module.exports = {
  get,
  post,
};
