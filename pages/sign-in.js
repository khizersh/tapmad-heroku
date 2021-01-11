import React from "react";
import Login from "../modules/auth/Login";

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      noSideBar: true,
    },
  };
}
