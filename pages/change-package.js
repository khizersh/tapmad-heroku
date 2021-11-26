import React, { useEffect , useContext } from "react";
import requestIp from "request-ip";
import Head from "next/head";
import Register from "../modules/auth/Register";
import { AuthContext } from "../contexts/auth/AuthContext";

export default function ChangePackage({ props }) {
  const { AuthState } = useContext(AuthContext);
  useEffect(() => {}, [AuthState]);
  return (
    <div>
      <Head>
        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
      </Head>
      <Register update={true} />
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
      protected: true,
      auth: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
