import React, { useCallback, useEffect, useRef, useState } from "react";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import Head from "next/head";
import { AuthService } from "../modules/auth/auth.service";

export default function SignUp(props) {
  const [country, setCountry] = useState(null);
  const RenderViews = useCallback(
    function () {
      return <Register userHeader={true} {...props} />;
      // if (country == "PK") {
      //   return (
      //     <>
      //       <Register userHeader={true} {...props} />
      //     </>
      //   );
      // } else {
      //   return (
      //     <>
      //       <SubscribeInternational userHeader={false} {...props} />
      //     </>
      //   );
      // }
    },
    [country]
  );
  useEffect(async () => {
    var data = await AuthService.getGeoInfo();
    console.log(data, "Countrt");
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

export const getServerSideProps = async (context) => {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  var data = await AuthService.getGeoInfo();
  const country = data.countryCode;
  console.log("COUNTRY_", country);

  return {
    props: {
      noSideBar: true,
      auth: true,
      userHeader: country == "PK" ? true : false,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
};
