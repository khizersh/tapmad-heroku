import React, { useContext, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import { useRouter } from "next/router";
import AuthViews from "../modules/auth/login/authViews";
import requestIp from "request-ip";
import Head from "next/head";

export default function LoginPage(props) {
  const { initialState } = useContext(MainContext);
  const router = useRouter();
  useEffect(() => {
    if (initialState.isAuthenticated) {
      router.push("/");
    }
  }, [initialState.isAuthenticated]);
  return (
    <div>
      <Head>
        <title>Sign in</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://wwww.tapmad.com/sign-in" />
      </Head>
      <AuthViews {...props} />
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
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
