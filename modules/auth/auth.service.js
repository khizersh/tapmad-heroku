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
  getAllowRegions,
  getEPLCardUser,
  UBLCard,
} from "../../services/apilinks";
import { Cookie } from "../../services/cookies";
import { handleResponse, post, get } from "../../services/http-service";

async function setUserPin(pin, username) {
  let resp;

  try {
    const userId = Cookie.getCookies("userId");
    let body = {
      Version: "V1",
      Language: "en",
      Platform: "Web",
      UserId: userId,
      UserPinCode: pin,
      ProfileUserName: username
    }
    if (!username) {
      delete body.ProfileUserName
    }

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

async function setNewPin(pin, username) {
  const userId = Cookie.getCookies("userId");
  let body = {
    Version: "V1",
    Language: "en",
    Platform: "Web",
    UserId: userId,
    UserPinCode: pin,
    ProfileUserName: username
  }
  if (!username) {
    delete body.ProfileUserName
  }

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
    resp = await post(UBLCard, body);
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

async function GetCardUser(body) {
  const resp = await post(getCardUser, body);
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
async function GetEPLCardUser(body) {
  const resp = await post(getEPLCardUser, body);
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
async function getAllowRegionsList(body) {
  const data = await get(getAllowRegions);

  if (data != null) {
    if (data.data) {
      return {
        data: data.data.Countries,
        responseCode: data.data.Response.responseCode,
        message: data.data.Response.message,
      };
    }
  } else {
    return {
      data: "",
      responseCode: 0,
      message: "Something went wrong",
    };
  }
}

function validateUser(data) {
  var user = data.User;
  if (user.UserId) {
    Cookie.setCookies("userId", user.UserId);
    if (user.IsSubscribe) {
      if (user.IsPinSet) {
        // return "enter-pin";
        return true;
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
      "X-Forwarded-For": body.userIp ? body.userIp : "",
    },
  };
  const resp = await post(SignUpORSignInMobileOperatorToken, body, body.userIp);

  if (resp.data && resp.data.Response) {
    return resp.data;
  } else {
    return null;
  }
}

async function signInOrSignUpMobileOperator(
  body,
  ip = "",
  withMultiCredentials
) {
  let obj = { ...body, userIp: ip };
  const resp = await post("/api/authentication", obj, ip, withMultiCredentials);
  const data = handleResponse(resp);
  if (data && data.data.jwtToken) {
    Cookie.setCookies("content-token", data.data.jwtToken);
  }
  return data;
}
async function clearUserToken(number) {
  const response = await get(
    `https://app.tapmad.com/api/ClearAllCache/T${number}`
  );
  return response;
}
async function getGeoInfo() {
  let obj = {};
  const response = await get("https://api.tapmad.com/api/getLoginDetail");
  let data = response.data;

  if (data) {
    obj = {
      countryCode: data.LoginDetail.country,
    };
  } else {
    obj = {
      countryCode: "PK",
    };
  }

  return obj;
}

const checkUser = async (num) => {
  let body = { Language: "en", MobileNo: num };
  try {
    const data = await GetCardUser(body);
    if (data) {
      if (data.data) {
        if (data.data.User) {
          Cookie.setCookies("userId", data.data.User.UserId);
          Cookie.setCookies("content-token", data.data.User.UserPassword);
          if (data.data.User.IsSubscribe) {
            if (data.data.User.IsPinSet) {
              return {
                code: 11,
                message: "Already subscribed!",
                data: data.data,
              };
            } else {
              return { code: 34, message: "Set your pin!", data: data.data };
            }
          } else {
            return { code: 0, message: "Go!", data: data.data };
          }
        } else {
          return { code: 0, message: "Go!", data: data.data };
        }
      }
    } else {
      return 0;
    }
  } catch (error) { }
};
const checkEPLUser = async (num) => {
  let body = { Language: "en", MobileNo: num };
  try {
    const data = await GetEPLCardUser(body);
    if (data) {
      if (data.data) {
        if (data.data.User) {
          Cookie.setCookies("userId", data.data.User.UserId);
          Cookie.setCookies("content-token", data.data.User.UserPassword);
          console.log("Epl ", data.data.User);
          if (data.data.User.EplSubscribe) {
            if (data.data.User.IsPinSet) {
              return {
                code: 11,
                message: "Already subscribed!",
                data: data.data,
              };
            } else {
              return { code: 34, message: "Set your pin!", data: data.data };
            }
          } else {
            return { code: 0, message: "Go!", data: data.data };
          }
        } else {
          return { code: 0, message: "Go!", data: data.data };
        }
      }
    } else {
      return 0;
    }
  } catch (error) { }
}
export const AuthService = {
  validateUser,
  setUserPin,
  setNewPin,
  verifyPinCode,
  forgetPin,
  creditCardOrder,
  initialTransaction,
  verifyOTP,
  GetCardUser,
  getGeoInfo,
  loginUserFetchApi,
  paymentProcessTransaction,
  signInOrSignUpMobileOperator,
  getHomePageAdsDetail,
  addHomePageAds,
  logoutUser,
  userPromoCode,
  checkUser,
  clearUserToken,
  getAllowRegionsList,
  checkEPLUser
};
