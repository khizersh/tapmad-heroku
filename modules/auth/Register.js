import React, { useContext, memo, useCallback, useRef } from "react";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpComponent from "./sign-up/SignUpComponent";
import SignUpLayout from "./sign-up/SignUpLayout";
import Pin from "./sign-up/VerifyOTP";
import EnterPinToVerify from "./sign-up/EnterPinToVerify";
import SetYourNewPin from "./sign-up/SetYourNewPin";

export default memo(function Register() {
  const { authState } = useContext(Authcontext);

  const RenderViews = useCallback(
    function () {
      if (authState.subscribeResponseCode == 1) {
        return (
          <>
            <Pin newUser={authState.newUser ? true : false} />
          </>
        );
      } else if (!authState.subscribeResponseCode) {
        return (
          <>
            <SignUpComponent />
          </>
        );
      } else if (authState.subscribeResponseCode == 11) {
        return <EnterPinToVerify />;
      } else if (authState.subscribeResponseCode == 34) {
        // Response code 34 is not coming from backend. This is only for frontend logic to display setPinView
        return <SetYourNewPin />;
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
