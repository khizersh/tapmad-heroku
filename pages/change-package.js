import React, { useEffect, useContext } from "react";
import requestIp from "request-ip";
import Head from "next/head";
import { useRouter } from "next/router";
import Register from "../modules/auth/Register";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import { AuthContext } from "../contexts/auth/AuthContext";
import { upgradeIcon } from "../services/imagesLink";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { LOGGED_IN } from "../contexts/auth/SignUpReducer";

export default function ChangePackage({ props }) {
  const router = useRouter();
  const { SignUpState, dispatch } = useContext(SignUpContext);

  const { AuthState } = useContext(AuthContext);
  useEffect(() => {
    dispatch({
      type: LOGGED_IN,
      data: 1,
    });
  }, [AuthState]);

  const onClickBack = () => {
    router.push("/");
  };
  return (
    <div>
      <Head>
        <script src="https://cdn.checkout.com/js/framesv2.min.js"></script>
      </Head>
      {/* <NavbarHOC>
        <div>
          <button
            className="btn"
            style={{
              fontSize: "13px",
              color: "black",
            }}
            onClick={onClickBack}
          >
            <img src="/icons/login-back.svg" />
          </button>
        </div>
        <div className="margin-y-auto">
          <img src={upgradeIcon} width="25" />
          <span className="pl-2">Upgrade Package</span>
        </div>
      </NavbarHOC> */}
      <Register update={true} />
    </div>
  );
}

export function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  return {
    props: {
      noSideBar: false,
      protected: true,
      auth: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
