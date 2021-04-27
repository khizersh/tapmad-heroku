import React, { useState, useEffect, useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";
import withLogin from "../modules/auth/LoginHOC";
import { Cookie } from "../services/cookies";

function VerifyUser({ login }) {
  const {
    initialState,
    updateUserNumber,
    updateUserPassword,
    updateUserOperator,
  } = useContext(MainContext);

  //   Language: "en",
  //   Platform: "web",
  //   Version: "V1",
  //   MobileNo: initialState.User.MobileNo,
  //   OperatorId: initialState.User.OperatorId,
  //   UserPassword: initialState.User.Password,

  useEffect(async () => {
    let body = { Language: "en", MobileNo: "3368250350" };
    const data = await AuthService.GetCardUser(body);
    if (data && data.data.User) {
      let userOperator = Cookie.getCookies("uop");
      let userNumber = Cookie.getCookies("unum");
      updateUserOperator("100005");
      updateUserPassword(data.data.User.UserPassword);
      updateUserNumber("3368250350");

      console.log(data);

      if (initialState.User.Password) {
        let loginResp = login();
        loginResp.then((e) => {
          if (e != null && e.responseCode == 401) {
            swal({
              title: "Something went wrong!",
              icon: "error",
              timer: 2500,
            });
          }
        });
      }
    }
  }, [initialState.User.Password]);
  return <div></div>;
}

const EnhancedEnterPin = withLogin(VerifyUser);
export default EnhancedEnterPin;
