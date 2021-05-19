import React, { useState, useEffect, useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";
import withLogin from "../modules/auth/LoginHOC";
import { Cookie } from "../services/cookies";
import { useRouter } from "next/router";
import requestIp from "request-ip";

function VerifyUser({ login, ip }) {
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
    if (data && data.code == 11) {
      let userOperator = Cookie.getCookies("uop");
      if (userOperator && userNumber) {
        updateUserOperator(userOperator);
        updateUserPassword(data.data.User.UserPassword);
        updateUserNumber(userNumber);
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
  }, []);


  useEffect(() => {
    let userNumber = Cookie.getCookies("unum");
    if (initialState.User.Password) {
      console.log("userNumber Inside condition: ", userNumber);
      let loginResp = login(ip);
      setLoader(false);
    }
  }, [initialState.User.MobileNo])
  return <div></div>;
}

// loginResp.then((e) => {
//   if (e != null && e.responseCode == 401) {
//     AuthService.forgetPin(userNumber, userOperator).then((res) => {
//       router.push(
//         {
//           pathname: "/sign-up",
//           query: { code: "1", number: userNumber },
//         },
//         "/sign-up"
//       );
//     });
//   }
// });

const EnhancedEnterPin = withLogin(VerifyUser);
export default EnhancedEnterPin;

export function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  return {
    props: {
      noSideBar: true,
      ip: ip
    },
  };
}
