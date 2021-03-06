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
import { SET_VIEW_TO_SHOW } from "../../../contexts/auth/AuthReducers";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";

export default function AuthViews(props) {
  const [viewToShow, setViewToShow] = useState("login");
  const router = useRouter();
  const [bg, setBg] = useState("bg-dark-pk");
  const { setLoader } = useContext(MainContext);
  const { AuthState, dispatch } = useContext(AuthContext);


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

  async function sendToForgetPin(state) {
    setLoader(true);
    if (state?.userCountry?.ShortName !== "PK") {
      AuthService.forgetPin(
        state.UserDetails.MobileNo,
        state.UserDetails.Operator
      )
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
      setLoader(false);
      dispatch({ type: SET_VIEW_TO_SHOW, data: "forget-pin" });
    }
  }

  const RenderViews = useCallback(() => {
    if (AuthState.ViewToShow == "enter-pin") {
      return <EnhancedEnterPin forgetPin={sendToForgetPin} />;
    } else if (AuthState.ViewToShow == "forget-pin") {
      if (AuthState.CountryCode == "+92") {
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
    } else if (AuthState.ViewToShow == "set-pin") {
      // here we will check username and update if anonymous
      return <SetPin />;
    } else if (AuthState.ViewToShow == "sign-in") {
      return (
        <EnhancedCombineLogin
          forgetPin={sendToForgetPin}
          loginResponse={processResponse}
          ip={props.ip}
        />
      );
      // return <Login loginResponse={processResponse} />;
    } else if (AuthState.ViewToShow == "send-otp") {
      return <ForgetPin updateView={setViewToShow} />;
    }
  }, [AuthState.ViewToShow]);

  useEffect(() => {
    if (AuthState && AuthState.CountryCode?.length) {
      // country pk
      setBg("bg-dark-pk");
    } else {
      // country international
      setBg("bg-dark-int");
    }
  }, [AuthState.CountryCode]);

  const onclickBack = () => {
    if (AuthState.ViewToShow == "sign-in") {
      router.push("/");
    } else {
      dispatch({ type: SET_VIEW_TO_SHOW, data: "sign-in" });
    }
  };

  return (
    <div>
      <div className={`bg_dark ${bg}`}>
        {/* <div className="bg_dark"> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8">
              <button
                type="button"
                className="btn btn_submit text-light rounded-pill d-inline-block mx-3 py-1 px-4 font-14 back-btn-login"
                onClick={onclickBack}
              >
                Back
              </button>
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
