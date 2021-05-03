import React, { useState, useCallback } from "react";
import { AuthService } from "../auth.service";
import ForgetPin from "./forget-pin";
import Login from "./login";
import SetPin from "./setPin";
import { useRouter } from "next/router";
import swal from "sweetalert";
import EnhancedEnterPin from "./enterPin";
import EnhancedCombineLogin from "./combineLogin";

export default function AuthViews() {
  const [viewToShow, setViewToShow] = useState("login");
  const router = useRouter();

  function processResponse(response) {
    let viewToRender = AuthService.validateUser(response);

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
        />
      );
      // return <Login loginResponse={processResponse} />;
    } else if (viewToShow == "send-otp") {
      return <ForgetPin updateView={setViewToShow} />;
    }
  }, [viewToShow]);

  return (
    <div>
      <div className="bg_dark">
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
