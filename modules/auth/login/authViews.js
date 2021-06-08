import React, { useState, useCallback, useContext, useEffect } from "react";
import { AuthService } from "../auth.service";
import ForgetPin from "./forget-pin";
import Login from "./login";
import SetPin from "./setPin";
import { useRouter } from "next/router";
import swal from "sweetalert";
import EnhancedEnterPin from "./enterPin";
import EnhancedCombineLogin from "./combineLogin";
import { pslBackground, signinBackground } from "../../../services/imagesLink";
import { MainContext } from "../../../contexts/MainContext";

export default function AuthViews(props) {
  const [viewToShow, setViewToShow] = useState("login");
  const router = useRouter();
  const [bg, setBg] = useState(pslBackground);

  const { initialState } = useContext(MainContext);

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

  function sendToForgetPin() {
    setViewToShow("forget-pin");
  }

  const RenderViews = useCallback(() => {
    if (viewToShow == "enter-pin") {
      return <EnhancedEnterPin forgetPin={sendToForgetPin} />;
    } else if (viewToShow == "forget-pin") {
      return <ForgetPin updateView={setViewToShow} />;
    } else if (viewToShow == "set-pin") {
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
      console.log("initialState: ",initialState);
    if (
      initialState &&
      initialState.AuthDetails &&
      initialState.AuthDetails.CountryCode
    ) {
      setBg(pslBackground);
    } else {
      if (!initialState.AuthDetails  ) {
        setBg(signinBackground);
      }
    }
  }, [initialState.AuthDetails]);

  return (
    <div>
      <div className="bg_dark" style={{ background: `url('${bg}')` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
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
