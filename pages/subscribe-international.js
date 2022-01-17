import React from "react";
import International from "../modules/auth/International";

const SubscribeInternational = () => {
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
