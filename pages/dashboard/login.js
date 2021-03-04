import React from "react";

const login = () => {
  return <div></div>;
};

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}
export default login;
