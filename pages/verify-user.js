import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import withLogin from "../modules/auth/LoginHOC";
import { useRouter } from "next/router";
import requestIp from "request-ip";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import {
  UPDATE_USER_DETAILS,
} from "../contexts/auth/SignUpReducer";

function VerifyUser({ login, ip }) {
  const { setLoader } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);

  const router = useRouter();
  const { number, operator } = router.query;

  useEffect(() => {
    if (number && operator ) {
      dispatch({
        type: UPDATE_USER_DETAILS,
        data: { MobileNo: number, Operator: operator },
      });
    }
  }, []);

  useEffect(async () => {
    if (SignUpState.UserDetails.MobileNo) {
      // setting pin api false for login
      let loginResp = await login(ip , false);
      if (loginResp.code && loginResp.code != 1) {
        router.push(loginResp.view);
      }
      setLoader(false);
    }
  }, [SignUpState.UserDetails.MobileNo]);
  return <div></div>;
}

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
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
