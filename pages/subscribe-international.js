import React from "react";
import International from "../modules/auth/international/InternationalMobile";

const SubscribeInternational = (props) => {
  console.log(props);
  return <International />;
};

export const getServerSideProps = (context) => {
  return {
    props: {
      noSideBar: true,
      userHeader: false,
    },
  };
};

export default SubscribeInternational;
