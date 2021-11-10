import React, { useState, useCallback, useContext, useEffect } from "react";
import { AuthService } from "../auth.service";
import ForgetPin from "./forget-pin";
import SetPin from "./setPin";
import { useRouter } from "next/router";
import swal from "sweetalert";
import EnhancedEnterPin from "./enterPin";
import EnhancedCombineLogin from "./combineLogin";
import { pslBackground, signinBackground } from "../../../services/imagesLink";
import { MainContext } from "../../../contexts/MainContext";
import { AuthContext } from "../../../contexts/auth/AuthContext";

export default function AuthViews(props) {
  const [viewToShow, setViewToShow] = useState("login");
  const router = useRouter();
  const [bg, setBg] = useState(pslBackground);

  const {  setLoader } = useContext(MainContext);
  const { AuthState } = useContext(AuthContext);

  function processResponse(response) {
    let viewToRender = AuthService.validateUser(response);
    if (viewToRender == true) {
      return true;
    } else {
      if (viewToRender === "sign-up") {
        swal({
          title: "You are not subscribed user. please subscribe!",
          timer: 2500,
          icon: "warning",
        }).then(() => {
          router.push("/sign-up");
        });
      } else {
        setViewToShow(viewToRender);
      }
    }
  }

  function sendToForgetPin(state) {
    if (state.countryCode != "PK") {
      setLoader(true);
      AuthService.forgetPin(state.User.MobileNo, state.User.OperatorId)
        .then((res) => {
          setLoader(false);
          if (res && res.responseCode == 1) {
            swal({
              title: res.message,
              icon: "success",
              timer: 2500,
            });
          } else {
            swal({
              title: res.message,
              icon: "error",
              timer: 2500,
            });
          }
        })
        .catch((e) => setLoader(false));
    } else {
      setViewToShow("forget-pin");
    }
  }

  const RenderViews = useCallback(() => {
    if (viewToShow == "enter-pin") {
      return <EnhancedEnterPin forgetPin={sendToForgetPin} />;
    } else if (viewToShow == "forget-pin") {
      if (AuthState.CountryCode == "PK") {
        return <ForgetPin updateView={setViewToShow} />;
      } else {
        return (
          <EnhancedCombineLogin
            forgetPin={sendToForgetPin}
            loginResponse={processResponse}
            ip={props.ip}
          />
        );
      }
    } else if (viewToShow == "set-pin") {
      // here we will check username and update if anonymous
      return <SetPin />;
    } else if (viewToShow == "login") {
      return (
        <EnhancedCombineLogin
          forgetPin={sendToForgetPin}
          loginResponse={processResponse}
          ip={props.ip}
        />
      );
      // return <Login loginResponse={processResponse} />;
    } else if (viewToShow == "send-otp") {
      return <ForgetPin updateView={setViewToShow} />;
    }
  }, [viewToShow]);

  useEffect(() => {
    // if (initialState.countryCode && initialState.countryCode == "PK") {
    if (AuthState && AuthState.CountryCode) {
      setBg(pslBackground);
    } else {
      if (!AuthState) {
        setBg(signinBackground);
      }
    }
  }, [AuthState]);

  return (
    <div>
      {/* <div className="bg_dark" style={{ background: `url('${bg}')` }}> */}
      <div className="bg_dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="tm_login_pg">
                <RenderViews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
