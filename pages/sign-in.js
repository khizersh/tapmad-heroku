import React, { useContext, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import { useRouter } from "next/router";
import AuthViews from "../modules/auth/login/authViews";
import requestIp from "request-ip";

export default function LoginPage(props) {
  const { initialState } = useContext(MainContext);
  const router = useRouter();
  useEffect(() => {
    if (initialState.isAuthenticated) {
      router.push("/");
    }

    fetch(
      "https://developer.tapmad.com/dev/app/api/getMoreContentWithPagination/0/5/511/3"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [initialState.isAuthenticated]);

  return (
    <div>
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
