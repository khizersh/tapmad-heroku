import React from "react";
import Register from "../modules/auth/Register";

export default function SignUp() {
  return <div>{/* <Register /> */}</div>;
}

export function getStaticProps() {
  return {
    props: {
      noSideBar: true,
    },
  };
}
