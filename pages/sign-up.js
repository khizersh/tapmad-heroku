import React, { useCallback, useEffect, useRef, useState } from "react";
import SubscribeInternational from "../pages/subscribe-international";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import { useRouter } from "next/router";
import Head from "next/head";
import { AuthService } from "../modules/auth/auth.service";

export default function SignUp(props) {
  const [country, setCountry] = useState(null);
  const RenderViews = useCallback(
    function () {
      if (country == "PK") {
        return (
          <>
            <Register {...props} />
          </>
        );
      } else {
        return (
          <>
            <SubscribeInternational />
          </>
        );
      }
    },
    [country]
  );
  useEffect(async () => {
    var data = await AuthService.getGeoInfo();
    setCountry(data.countryCode);
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

export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  var data = await AuthService.getGeoInfo();

  return {
    props: {
      noSideBar: true,
      auth: true,
      userHeader: data.countryCode == "PK" ? true : false,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
