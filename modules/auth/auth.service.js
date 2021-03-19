import {
  sendOTP,
  setUserPinCode,
  verifyUserPinCode,
  creditCard,
  initialPaymentTransaction,
  verifyOtp,
  getCardUser,
} from "../../services/apilinks";
import { Cookie } from "../../services/cookies";
import { handleResponse, post, get } from "../../services/http-service";

var userId = Cookie.getCookies("userId");

async function setUserPin(pin) {
  var resp = await post(setUserPinCode, {
    Version: "V1",
    Language: "en",
    Platform: "Web",
    UserId: userId,
    UserPinCode: pin,
  });

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
  const resp = await post(setUserPinCode, body);
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
  console.log("body: ", body);
  const resp = await post(verifyUserPinCode, body);
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

  const resp = await post(sendOTP, body);
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
  const resp = await post(creditCard, body);
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
  const resp = await post(initialPaymentTransaction, body);
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
async function verifyOTP(body) {
  const resp = await post(verifyOtp, body);
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
};
