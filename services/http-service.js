const { default: axios } = require("axios");

function get(url) {
  return axios.get(url);
}

function post(url, body) {
  return axios.post(url, body);
}

module.exports = {
  get,
  post,
};
