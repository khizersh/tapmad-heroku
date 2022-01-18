import React from "react";
import International from "../modules/auth/international/International";
import requestIp from "request-ip";

const PSL17 = () => {
  return <International />;
};

export const getServerSideProps = (context) => {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  return {
    props: {
      noSideBar: true,
      auth: true,
      userHeader: false,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
};

export default PSL17;
