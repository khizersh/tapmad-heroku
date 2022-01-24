import { useContext } from "react";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { setCookiesForLogin } from "../modules/auth/sign-up/authHelper";
import { PaymentPackages, PaymentPackagesByUserId } from "./apilinks";
import { Cookie } from "./cookies";
import { LoginTag } from "./gtm";
import { get } from "./http-service";

export async function getAllPaymentPackages() {
  return (await get(PaymentPackages))?.data;
}
export async function getAllPaymentPackagesByUserId(userID) {
  return (await get(PaymentPackagesByUserId + userID))?.data;
}

export function setLoginViews(response, obj) {
  if (response?.responseCode == 11) {
    if (
      response.data.UserActiveSubscription &&
      response.data.UserActiveSubscription.length
    ) {
      if (response.data.User.UserId) {
        if (response.data.User.IsPinSet) {
          setCookiesForLogin(response.data);
          LoginTag(obj, response.data);

          Cookie.setCookies("user_mob", obj.MobileNo);
          return { code: 1, view: "home" };
        } else {
          return { code: 34, view: "send-otp" };
        }
      } else {
        return { code: 0, view: "sign-up" };
      }
    } else {
      return { code: 0, view: "sign-up" };
    }
  } else {
    if (response.responseCode == 4) {
      return { code: 4, view: "sign-up" };
    }
    if (response.responseCode == 31) {
      return { code: 31, view: "sign-in" };
    } else if (response.responseCode == 32) {
      return { code: 0, view: "sign-up" };
    } else if (response.responseCode == 401) {
      return { code: 401, view: "send-otp" };
    }
  }
}

export function checkUserIdAndToken() {
  const token = Cookie.getCookies("content-token");
  const isAuth = Cookie.getCookies("isAuth");
  const backurl = Cookie.getCookies("backURL");
  if (token && token.length > 50 && isAuth == 1) {
    return { valid: true, url: "/" };
  } else {
    return { valid: false, url: backurl ? backurl : "/" };
  }
}
