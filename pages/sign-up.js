import React, { useCallback, useEffect, useRef, useState } from "react";
import SubscribeInternational from "../pages/subscribe-international";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import { useRouter } from "next/router";
import Head from "next/head";
import { AuthService } from "../modules/auth/auth.service";

export default function SignUp(props) {
  const [country, setCountry] = useState(null);
  const router = useRouter();
  const RenderViews = useCallback(
    function () {
      if (country) {
        return (
          <>
            <SubscribeInternational />
          </>
        );
      } else {
        return (
          <>
            <Register {...props} />
          </>
        );
      }
    },
    [country]
  );
  useEffect(async () => {
    const country = await AuthService.getGeoInfo();
    setCountry(country);
  }, [country]);
  return (
    <div>
      <Head>
        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
      </Head>
      <RenderViews />
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
