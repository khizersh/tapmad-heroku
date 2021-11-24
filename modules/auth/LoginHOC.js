import { LoginTag } from "../../services/gtm";
import { AuthService } from "./auth.service";
import { useRouter } from "next/router";
import { Cookie } from "../../services/cookies";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import swal from "sweetalert";
import { setCookiesForLogin } from "./sign-up/authHelper";
import { SignUpContext } from "../../contexts/auth/SignUpContext";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { setLoginViews } from "../../services/auth.service";
import { SET_VIEW_TO_SHOW } from "../../contexts/auth/AuthReducers";

export default function withLogin(Component, data) {
  return (props) => {
    const {  setLoader } = useContext(MainContext);
    const { SignUpState } = useContext(SignUpContext);
    const { dispatch } = useContext(AuthContext);
    const router = useRouter();

    async function loginUser(userIp) {
      setLoader(true);
      let obj = {
        Language: "en",
        Platform: "web",
        Version: "V1",
        MobileNo: SignUpState.UserDetails.MobileNo,
        OperatorId: SignUpState.UserDetails.Operator,
        UserPin: SignUpState.UserDetails.UserPin || Cookie.getCookies('userPin'),
      };
      if(obj.UserPin.length  == 4){
      const response = await AuthService.signInOrSignUpMobileOperatorByPin( obj , userIp);
      try {
        const status = setLoginViews(response, obj);
        setLoader(false);
        if (status.code == 1) {
          swal({
            timer: 2000,
            title: "Signed In Successfully",
            text: "Redirecting you..",
            icon: "success",
          });
          let backURL = Cookie.getCookies("backUrl") || "/";
          if (backURL == "sign-in") {
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
        } else if (status.code == 0) {
          swal({
            title: "You are not subscribed user. please subscribe!",
            timer: 2500,
            icon: "warning",
          }).then(() => {
            router.push("/sign-up");
          });
        }
        
      } catch (err) {
        console.log(err);
      }
    }else{
      swal({
        title: "Enter 4 digit PIN",
        timer: 2500,
        icon: "error",
      })
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
