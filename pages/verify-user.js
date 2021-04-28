import React, { useState, useEffect, useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";
import withLogin from "../modules/auth/LoginHOC";
import { Cookie } from "../services/cookies";
import { useRouter } from "next/router";

function VerifyUser({ login }) {
  const {
    initialState,
    updateUserNumber,
    updateUserPassword,
    updateUserOperator,
    setLoader,
  } = useContext(MainContext);

  const router = useRouter();

  useEffect(async () => {
    setLoader(true);
    let userNumber = Cookie.getCookies("unum");
    const data = await AuthService.checkUser(userNumber);
    console.log("data in verify: ", data);
    if (data && data.code == 11) {
      let userOperator = Cookie.getCookies("uop");
      let userNumber = Cookie.getCookies("unum");
      if (userOperator && userNumber) {
        updateUserOperator(userOperator);
        updateUserPassword(data.data.User.UserPassword);
        updateUserNumber(userNumber);

        if (initialState.User.Password) {
          let loginResp = login();
          setLoader(false);
          loginResp.then((e) => {
            if (e != null && e.responseCode == 401) {
              router.push("/sign-in");
            }
          });
        }
      }
      setLoader(false);
    } else if (data.code == 0) {
      swal({
        title: "Please sign up!",
        timer: 2500,
        icon: "warning",
      }).then((r) => router.push("/sign-up"));
    } else if (data.code == 34) {
      swal({
        title: "Please sign in!",
        timer: 2500,
        icon: "warning",
      }).then((r) => router.push("/sign-in"));
    }
    setLoader(false);
  }, [initialState.User.Password, initialState.User.MobileNo]);
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
