const { default: axios } = require("axios");
import swal from "sweetalert";
const {
  actionRequestView,
  actionRequestSignUp,
  loggingRequest,
} = require("./apilinks");
const { Cookie } = require("./cookies");

async function get(url, ip) {
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  var response = null;
  try {
    let headers = {
      "Content-Type": "application/json",
      "X-Forwarded-For": ip ? ip : "",
    };
    response = await axios.get(url, { headers: headers });
  } catch (error) {
    swal({
      text :'Unable to load data from server, Please try again later.',
      icon:'error',
      timer : 5e3
    })
  }
  return response;
}

async function post(url, body, ip, credentialAllowed = false) {
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  let headers = {
    "Content-Type": "application/json",
    "X-Forwarded-For": ip ? ip : "",
    ...body.headers,
  };
  delete body.headers;
  var response = null;
  try {
    response = await  axios.post(url, body, {
      withCredentials: credentialAllowed ? true : false,
      headers,
    });
  } catch (e) {
    swal({
      text :'Unable to load data from server, Please try again later.',
      icon:'error',
      timer : 5e3
    })
  }
  return response;
  // finally{
  // }
}

function put(url, body, ip) {
  return axios.put(url, body, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": ip ? ip : "",
    },
  });
}
async function actionsRequestContent(data) {
  let userId = Cookie.getCookies("userId")
    ? Cookie.getCookies("userId")
    : "guest";

  let body = {
    userId: userId,
    ...data,
  };
  // try {
  //   // await post(loggingRequest, body).then((res) => console.log(res));
  // } catch (error) {
  //   console.log(error);
  // }
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
    if (resp.data.responseCode != undefined || resp.data.responseCode != null) {
      responseCode = resp.data.responseCode;
    } else {
      responseCode = resp.data.Response.responseCode;
    }

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
  put,
  handleResponse,
  actionsRequestContent,
  actionsRequestView,
  actionsRequestSignup,
};
