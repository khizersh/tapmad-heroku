import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>{" "}
    </>
  );
};

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}

export default index;
