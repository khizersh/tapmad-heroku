const { default: axios } = require("axios");
const {
  actionRequest,
  actionRequestView,
  actionRequestSignUp,
  loggingRequest,
} = require("./apilinks");
const { Cookie } = require("./cookies");

function get(url, ip) {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": ip ? ip : "",
    },
  });
}

function post(url, body, ip) {
  return axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": ip ? ip : "",
    },
  });
}

async function actionsRequestContent(data) {
  let userId = Cookie.getCookies("userId") ? Cookie.getCookies("userId") : "";

  let body = {
    userId: userId,
    ...data,
  };
  try {
    await post(loggingRequest, body).then((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
}

async function actionsRequestView(countryCode, contentId, contentName) {
  let userId = Cookie.getCookies("userId") ? Cookie.getCookies("userId") : "";

  let body = {
    userId,
    countryCode,
    contentId,
    contentName,
  };
  post(actionRequestView, body).then((res) => console.log(res));
}

async function actionsRequestSignup(body) {
  let userId = Cookie.getCookies("userId") ? Cookie.getCookies("userId") : "";

  let { productId, operatorId, mobileNo, countryCode } = body;
  let data = {
    userId,
    countryCode,
    productId,
    operatorId,
    mobileNo,
  };
  post(actionRequestSignUp, data).then((res) => console.log(res));
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
  actionsRequestContent,
  actionsRequestView,
  actionsRequestSignup,
};
