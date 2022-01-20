import React, { useEffect, useState } from "react";
import InternationalMobile from "./InternationalMobile";
import InternationalSignUp from "./InternationalSignup";
import Head from "next/head";

const International = () => {
  const [globalMobileNo, setGlobalMobileNo] = useState(null);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://cdn.checkout.com/js/framesv2.min.js"
          as="script"
        />
        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
      </Head>
      {globalMobileNo ? (
        <InternationalSignUp globalMobileNo={globalMobileNo} />
      ) : (
        <InternationalMobile setGlobalMobileNo={setGlobalMobileNo} />
      )}
    </>
  );
};

export default International;
