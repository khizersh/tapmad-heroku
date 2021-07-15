import React, { useRef } from "react";
import AuthProvider from "../contexts/AuthContext";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";

export default function SignUp(props) {
  return (
    <div>
      <AuthProvider>
        <Register {...props} />
      </AuthProvider>
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
      env: process.env.TAPENV
    },
  };
}
