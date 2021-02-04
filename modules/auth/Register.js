import React, { useContext, memo, useCallback, useRef } from "react";
import "./auth.module.css";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpComponent from "./sign-up/SignUpComponent";
import SignUpLayout from "./sign-up/SignUpLayout";
import Pin from "./sign-up/Pin";

export default memo(function Register() {
  const { authState } = useContext(Authcontext);
  const RenderViews = useCallback(
    function () {
      if (authState.subscribeResponseCode == 1) {
        return (
          <>
            <Pin />
          </>
        );
      } else if (!authState.subscribeResponseCode) {
        return (
          <>
            <SignUpComponent />
          </>
        );
      }
    },
    [authState.subscribeResponseCode]
  );

  return (
    <div>
      <SignUpLayout>
        <RenderViews />
      </SignUpLayout>
    </div>
  );
});
