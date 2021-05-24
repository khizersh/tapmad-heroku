import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { useRouter } from "next/router";
import AuthViews from "../modules/auth/login/authViews";
import requestIp from "request-ip";

export default function LoginPage(props) {
  const { initialState } = useContext(MainContext);
  const router = useRouter();
  React.useEffect(() => {
    if (initialState.isAuthenticated) {
      router.push("/");
    }
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
      ip: ip
    },
  };
}
