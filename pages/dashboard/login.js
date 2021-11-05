import React from "react";
import LoginComponent from "../../modules/dashboard/LoginComponent";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>{" "}
      <LoginComponent />
    </>
  );
};

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}
export default login;
