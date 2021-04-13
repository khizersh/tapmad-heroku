import {
  sendOTP,
  setUserPinCode,
  verifyUserPinCode,
  creditCard,
  initialPaymentTransaction,
  verifyOtp,
  getCardUser,
  paymentProcess,
  SignUpORSignInMobileOperatorToken,
  homepageAds,
  Logout,
  UserSignUpPromoCode,
} from "../../services/apilinks";
import { Cookie } from "../../services/cookies";
import { handleResponse, post, get } from "../../services/http-service";

var userId = Cookie.getCookies("userId");

async function setUserPin(pin) {
  let resp;
  try {
    resp = await post(setUserPinCode, {
      Version: "V1",
      Language: "en",
      Platform: "Web",
      UserId: userId,
      UserPinCode: pin,
    });
  } catch (error) {
    resp = null;
  }

  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function setNewPin(pin) {
  const userId = Cookie.getCookies("userId");
  let body = {
    Language: "en",
    Platform: "web",
    UserId: userId,
    UserPinCode: pin,
    Version: "V1",
  };

  let resp;
  try {
    resp = await post(setUserPinCode, body);
  } catch (error) {
    resp = null;
  }

  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function verifyPinCode(pin) {
  var userId = Cookie.getCookies("userId");
  let body = {
    Language: "en",
    Platform: "web",
    UserId: userId,
    UserPinCode: pin,
    Version: "V1",
  };

  let resp;
  try {
    resp = await post(verifyUserPinCode, body);
  } catch (error) {
    resp = null;
  }

  const data = handleResponse(resp);

  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function forgetPin(mobile, OperatorId) {
  let body = {
    MobileNo: mobile,
    OperatorId: OperatorId,
  };

  let resp;
  try {
    resp = await post(sendOTP, body);
  } catch (error) {
    resp = null;
  }

  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function creditCardOrder(body) {
  let resp;
  try {
    resp = await post(creditCard, body);
  } catch (error) {
    resp = null;
  }
  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function initialTransaction(body) {
  let resp;
  try {
    resp = await post(initialPaymentTransaction, body);
  } catch (error) {
    resp = null;
  }
  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function logoutUser(body) {
  let resp;
  try {
    resp = await post(Logout, body);
  } catch (error) {
    return (resp = null);
  }
  return resp.data;
}

async function getHomePageAdsDetail() {
  let resp;
  try {
    resp = await get(homepageAds, "", false);
  } catch (error) {
    resp = null;
  }

  return resp;
}

async function addHomePageAds(body) {
  let resp;
  try {
    resp = await post(homepageAds, body);
  } catch (error) {
    resp = null;
  }

  return resp;
}

async function verifyOTP(body) {
  let resp;
  try {
    resp = await post(verifyOtp, body);
  } catch (error) {
    resp = null;
  }
  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}
async function paymentProcessTransaction(body) {
  const resp = await post(paymentProcess, body);
  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}
async function userPromoCode(body) {
  const resp = await post(UserSignUpPromoCode, body);
  const data = handleResponse(resp);
  if (data != null) {
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

async function loginUser(body) {
  const resp = await post(getCardUser, body);
  const data = handleResponse(resp);
  if (data != null) {
    try {
      dataLayer.push({
        event: "Login_2",
        product_id: "0",
        device_category: "Web_Mobile",
        response: {},
        user_id: "123",
        tracking: "Registered User 1294",
        telco: "100004",
      });
    } catch (e) {
      console.log(e);
    }
    if (data.responseCode == 1) {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    } else {
      return {
        data: data,
        responseCode: data.responseCode,
        message: data.message,
      };
    }
  } else {
    return null;
  }
}

function validateUser(data) {
  var user = data.User;
  if (user.UserId) {
    Cookie.setCookies("userId", user.UserId);
    if (user.IsSubscribe) {
      if (user.IsPinSet) {
        return "enter-pin";
      } else {
        return "send-otp";
      }
    } else {
      return "sign-up";
    }
  } else {
    return "sign-up";
  }
}

async function loginUserFetchApi(body) {
  let options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const resp = await fetch(SignUpORSignInMobileOperatorToken, options);
  const data = await resp.json();
  if (data && data.Response) {
    return data;
  } else {
    return null;
  }
}

async function signInOrSignUpMobileOperator(
  body,
  ip = "",
  withMultiCredentials
) {
  const resp = await post(
    "/api/authentication",
    body,
    ip,
    withMultiCredentials
  );
  const data = handleResponse(resp);
  if (data && data.data.jwtToken) {
    Cookie.setCookies("content-token", data.data.jwtToken);
  }
  return data;
}

async function getGeoInfo() {
  let obj = {};
  const response = await get("http://ip-api.com/json/");
  let data = response.data;

  if (data) {
    obj = {
      countryName: data.country,
      countryCode: data.countryCode,
    };
  } else {
    obj = {
      countryName: "Pakistan",
      countryCode: "PK",
    };
  }

  return obj;
}

const checkUser = async (num) => {
  let body = { Language: "en", MobileNo: num };
  try {
    const data = await loginUser(body);
    if (data) {
      if (data.data) {
        if (data.data.User) {
          if (data.data.User.IsSubscribe) {
            if (data.data.User.IsPinSet) {
              return { code: 11, message: "Already subscribe!" };
            } else {
              return { code: 34, message: "Set your pin!" };
            }
          } else {
            return { code: 0, message: "Go!" };
          }
        } else {
          return { code: 0, message: "Go!" };
        }
      }
    } else {
      return 0;
    }
  } catch (error) {}
};

export const AuthService = {
  validateUser,
  setUserPin,
  setNewPin,
  verifyPinCode,
  forgetPin,
  creditCardOrder,
  initialTransaction,
  verifyOTP,
  loginUser,
  getGeoInfo,
  loginUserFetchApi,
  paymentProcessTransaction,
  signInOrSignUpMobileOperator,
  getHomePageAdsDetail,
  addHomePageAds,
  logoutUser,
  userPromoCode,
  checkUser,
};
