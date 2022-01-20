import React from "react";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import Head from "next/head";

export default function SignUp(props) {
  return (
    <div>
      <Head>
        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
        <title>Sign up</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://wwww.tapmad.com/sign-up" />
      </Head>

      <Register userHeader={true} {...props} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
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
};
