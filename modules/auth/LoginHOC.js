import { LoginTag } from "../../services/gtm";
import { AuthService } from "./auth.service";
import { useRouter } from "next/router";
import { Cookie } from "../../services/cookies";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import swal from "sweetalert";
import { SignUpContext } from "../../contexts/auth/SignUpContext";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { setLoginViews } from "../../services/auth.service";
import {
  CALL_CHANGE_PACKAGE_API,
  SET_VIEW_TO_SHOW,
  UPDATE_PACKAGE
} from "../../contexts/auth/AuthReducers";
import { LOGGED_IN } from "../../contexts/auth/SignUpReducer";

export default function withLogin(Component, data) {
  return (props) => {
    const { setLoader, checkUserAuthentication } = useContext(MainContext);
    const { SignUpState, dispatch: SignUpDispatch } = useContext(SignUpContext);
    const { AuthState, dispatch } = useContext(AuthContext);
    const router = useRouter();

    async function loginUser(userIp, callPinApi = true) {
      setLoader(true);
      var status = null;
      if (callPinApi) {
        // call api with pin
        const userPin =
          Cookie.getCookies("UserPin") || SignUpState.UserDetails.UserPin;
        var obj = {
          Language: "en",
          Platform: "web",
          Version: "V1",
          MobileNo: SignUpState.UserDetails.MobileNo,
          OperatorId: SignUpState.UserDetails.Operator,
          UserPin: userPin,
        };
        if (AuthState.CountryCode == "+92") {
          if (obj?.MobileNo.length != 10 && obj?.MobileNo.length != 11) {
            setLoader(false);
            return swal({
              title: "Enter 10 digit number",
              timer: 2500,
              icon: "error",
            });
          }
        }
        if (userPin?.length === 4) {
          status = await callLoginApi(obj, status, userIp, true);
        } else {
          setLoader(false);
          swal({
            title: "Enter 4 digit PIN",
            timer: 2500,
            icon: "error",
          });
        }
      } else {
        const obj = {
          Version: "V1",
          Language: "en",
          Platform: "android",
          OperatorId: SignUpState.UserDetails.Operator,
          MobileNo: SignUpState.UserDetails.MobileNo,
          UserPassword:
            SignUpState.UserDetails.UserPassword || Cookie.getCookies("utk"),
        };
        // call api without pin
        status = await callLoginApi(obj, status, userIp, false);
      }
      return status;
    }

    async function verifyPinCode(ip, pin, forgetPin) {
      setLoader(true);
      const pinResponse = await AuthService.verifyPinCode(pin);
      if (pinResponse && pinResponse.responseCode == 1) {
        var loginResp = loginUser(ip);
        loginResp.then((e) => {
          if (e != null && e.responseCode == 401) {
            forgetPin(SignUpState);
            setLoader(false);
          }
        });
      } else {
        setLoader(false);
        swal({
          title: pinResponse.message,
          timer: 3000,
          icon: "error",
        });
        Cookie.setCookies("isAuth", 0);
      }
    }

    async function callLoginApi(obj, status, userIp, pinApi) {
      setLoader(true);
      var response = null;
      if (pinApi) {
        response = await AuthService.signInOrSignUpMobileOperatorByPin(
          obj,
          userIp
        );
      } else {
        response = await AuthService.signInOrSignUpMobileOperator(obj);
      }
      try {
        status = setLoginViews(response, obj);
        setLoader(false);
        if (status.code == 1) {
          checkUserAuthentication();
          swal({
            timer: 2000,
            title: "Signed In Successfully",
            text: "Redirecting you..",
            icon: "success",
          });
          let backURL = Cookie.getCookies("backUrl") || "/";
          if (backURL.includes("sign-in") || backURL.includes("verify-user")) {
            router.push("/");
          } else {
            router.push(backURL);
          }
        } else if (status.code == 34) {
          dispatch({ type: SET_VIEW_TO_SHOW, data: "send-otp" });
        } else if (status.code == 31) {
          swal({
            timer: 2000,
            title: "Please enter valid PIN!",
            icon: "error",
          });
        } else if (status.code == 401) {
          // login limit reached
          let body = { Language: "en", MobileNo: obj.MobileNo };
          const userData = await AuthService.GetCardUser(body);
          // for premium user
          if (userData?.data?.User?.IsUpdgradeOrDownGrade == 3) {
            swal({
              title:
                "Oops! Looks like you have reached your active Login Limit, reset your PIN to logout from all devices",
              icon: "warning",
              buttons: ["Cancel", "Reset PIN"],
              dangerMode: false,
            }).then(async (accepted, cancel) => {
              if (accepted) {
                dispatch({ type: SET_VIEW_TO_SHOW, data: "send-otp" });
              }
            });
          } else {
            // for normal user
            swal({
              title:
                "Oops! Looks like you have reached your active Login Limit, either reset your PIN to logout from all devices or Upgrade your package to get Logins on more devices",
              icon: "warning",
              buttons: ["Reset PIN", "Upgrade"],
              dangerMode: false,
            }).then(async (accepted, cancel) => {
              if (accepted) {
                // setting user id and call change package api and send to change package
                setLoader(true);
                dispatch({ type: CALL_CHANGE_PACKAGE_API, data: true });
                await SignUpDispatch({ type: LOGGED_IN, data: true });
                await dispatch({ type: UPDATE_PACKAGE, data: true });
                Cookie.setCookies("user_mob", obj.MobileNo);
                let userId = userData?.data?.User?.UserId || "";
                Cookie.setCookies("userId", userId);
                setTimeout(() => {
                  router.push("/change-package");
                }, 1000);
              } else {
                // send to otp
                dispatch({ type: SET_VIEW_TO_SHOW, data: "send-otp" });
              }
            });
          }
        } else if (status.code == 0 || status.code == 4) {
          swal({
            title: "You are not subscribe user please subscribe yourself",
            timer: 2500,
            icon: "warning",
          }).then(() => {
            if (SignUpState?.userCountry?.ShortName === "PK") {
              router.push("/sign-up?tab=2&packageId=4");
            } else {
              router.push("/psl7");
            }
          });
        } else if (status.code == 32) {
          swal({
            title: "No Such User Exist!",
            icon: "error",
            timer: 2500,
          });
        }
        return status;
      } catch (err) {
        console.log(err);
        return status;
      }
    }

    return <Component login={loginUser} verifyPin={verifyPinCode} {...props} />;
  };
}
