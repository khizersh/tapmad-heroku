import React from "react";
import LoginComponent from "../../modules/dashboard/LoginComponent";

const login = () => {
  return (
    <>
      {" "}
      <LoginComponent />
    </>
  );
};

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}
export default login;
