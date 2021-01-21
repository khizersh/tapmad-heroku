const { default: axios } = require("axios");

function get(url, ip = null) {
  console.log(ip);
  return axios.get(url, {
    headers: {
      "X-Forwarded-For": ip,
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
