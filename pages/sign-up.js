import React, { useEffect, useRef } from "react";
import AuthProvider from "../contexts/AuthContext";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import { isAuthentictedUser } from "../services/utils";
import { useRouter } from "next/router";
import Head from "next/head";

export default function SignUp(props) {
  const router = useRouter();
  // const RenderViews = useCallback(
  //   function () {
  //     var respCode = code || SignUpState.subscribeResponseCode;
  //     if (respCode == 1) {
  //       return (
  //         <>
  //           <VerifyOTP newUser={SignUpState.newUser ? true : false} />
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <SignUpComponent tab={tab} packageId={packageId} />
  //         </>
  //       );
  //     }
  //   },
  //   [SignUpState.subscribeResponseCode]
  // );
  useEffect(() => {
    // if (isAuthentictedUser()) {
    //   router.push("/");
    // }
  }, []);
  return (
    <div>
      <Head>
        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
      </Head>
      <Register {...props} />
    </div>
  );
}

export function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  return {
    props: {
      noSideBar: true,
      auth: true,
      userHeader: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
