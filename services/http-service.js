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

function handleResponse(resp) {
  let responseCode, message;
  if (resp && resp.data) {
    responseCode = resp.data.responseCode || resp.data.Response.responseCode;
    message = resp.data.message || resp.data.Response.message;
    if (responseCode != null || responseCode != undefined) {
      return {
        ...resp.data,
        responseCode: responseCode,
        message: message ? message : "Something went wrong!",
      };
    }
  } else {
    return null;
  }
}
module.exports = {
  get,
  post,
  handleResponse,
};
