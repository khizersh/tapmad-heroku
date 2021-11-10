import { LoginTag } from "../../services/gtm";
import { AuthService } from "./auth.service";
import { useRouter } from "next/router";
import { Cookie } from "../../services/cookies";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { encryptWithAES } from "../../services/utils";
import swal from "sweetalert";
import { setCookiesForLogin } from "./sign-up/authHelper";
import { SignUpContext } from "../../contexts/auth/SignUpContext";

export default function withLogin(Component, data) {
  return (props) => {
    const { checkUserAuthentication, setLoader, initialState } =
      useContext(MainContext);
    const { SignUpState } = useContext(SignUpContext);
    const router = useRouter();

    async function loginUser(userIp) {
      setLoader(true);
      let obj = {
        Language: "en",
        Platform: "web",
        Version: "V1",
        MobileNo: SignUpState.UserDetails.MobileNo,
        OperatorId: SignUpState.UserDetails.Operator,
        UserPassword: Cookie.getCookies("content-token"),
      };
      let response = await AuthService.signInOrSignUpMobileOperator(
        obj,
        userIp,
        false
      );
      try {
        if (response && response.data && response.data.UserId) {
          swal({
            timer: 2000,
            title: "Signed In Successfully",
            text: "Redirecting you...",
            icon: "success",
          });
          setCookiesForLogin(response);
          LoginTag(obj, response.response);
          setLoader(false);
          Cookie.setCookies("user_mob", encryptWithAES(obj.MobileNo));
          checkUserAuthentication();
          let backURL = Cookie.getCookies("backUrl") || "/";
          if (backURL == "sign-in") {
            router.push("/");
          } else {
            router.push(backURL);
          }
          setLoader(false);
          return null;
        } else {
          setLoader(false);
          swal({
            title: response.message,
            icon: "error",
            timer: 3000,
          });
          return response;
        }
      } catch (err) {
        console.log(err);
      }
    }
    async function verifyPinCode(ip, pin, forgetPin) {
      setLoader(true);
      const pinResponse = await AuthService.verifyPinCode(pin);
      if (pinResponse && pinResponse.responseCode == 1) {
        var loginResp = loginUser(ip);
        loginResp.then((e) => {
          if (e != null && e.responseCode == 401) {
            forgetPin(initialState);
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
