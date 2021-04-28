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
    setLoader,
  } = useContext(MainContext);

  useEffect(async () => {
    setLoader(true);
    const data = await AuthService.checkUser("3368250350");
    console.log("data in verify: ", data);
    if (data && data.data.User) {
      let userOperator = Cookie.getCookies("uop");
      let userNumber = Cookie.getCookies("unum");
      updateUserOperator(userOperator);
      updateUserPassword(data.data.User.UserPassword);
      updateUserNumber(userNumber);

      console.log(data.data.User.UserPassword);

      if (initialState.User.Password) {
        let loginResp = login();
        setLoader(false);
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
      setLoader(false);
    }
    setLoader(false);
  }, [initialState.User.Password]);
  return <div></div>;
}

const EnhancedEnterPin = withLogin(VerifyUser);
export default EnhancedEnterPin;

export function getStaticProps() {
  return {
    props: {
      noSideBar: true,
    },
  };
}
