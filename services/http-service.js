const { default: axios } = require("axios");

function get(url, ip = null) {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": "43.245.204.44",
    },
  });
}

function post(url, body) {
  return axios.post(url, body);
}

module.exports = {
  get,
  post,
};
