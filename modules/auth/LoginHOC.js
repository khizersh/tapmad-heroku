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
import { SET_VIEW_TO_SHOW } from "../../contexts/auth/AuthReducers";

export default function withLogin(Component, data) {
  return (props) => {
    const { setLoader } = useContext(MainContext);
    const { SignUpState } = useContext(SignUpContext);
    const { dispatch } = useContext(AuthContext);
    const router = useRouter();

    async function loginUser(userIp) {
      setLoader(true);
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
      if (userPin.length === 4) {
        const response = await AuthService.signInOrSignUpMobileOperatorByPin(
          obj,
          userIp
        );
        try {
          const status = setLoginViews(response, obj);
          console.log("status : ", status);
          setLoader(false);
          if (status.code == 1) {
            swal({
              timer: 2000,
              title: "Signed In Successfully",
              text: "Redirecting you..",
              icon: "success",
            });
            let backURL = Cookie.getCookies("backUrl") || "/";
            if (backURL.includes("sign-in")) {
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
            console.log("inside 401");
            swal({
              title:
                "Oops Looks like you have reached the active login limit. To continue watching on this device, verify your pin and logout of previous devices.",
              timer: 2500,
              icon: "warning",
            }).then(() => {
              dispatch({ type: SET_VIEW_TO_SHOW, data: "send-otp" });
            });
          } else if (status.code == 0 || status.code == 4) {
            swal({
              title: "You are not subscribe user please subscribe yourself",
              timer: 2500,
              icon: "warning",
            }).then(() => {
              router.push("/sign-up");
            });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setLoader(false);
        swal({
          title: "Enter 4 digit PIN",
          timer: 2500,
          icon: "error",
        });
      }
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
    return <Component login={loginUser} verifyPin={verifyPinCode} {...props} />;
  };
}
