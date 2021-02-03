import React, { useRef } from "react";
import AuthProvider from "../contexts/AuthContext";
import Register from "../modules/auth/Register";

export default function SignUp() {
  return (
    <div>
      {/*
       */}
      <AuthProvider>
        <Register />
      </AuthProvider>
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
