import React, { useContext, memo, useCallback, useRef, useEffect } from "react";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpComponent from "./sign-up/SignUpComponent";
import SignUpLayout from "./sign-up/SignUpLayout";
import Pin from "./sign-up/VerifyOTP";
import EnterPinToVerify from "./sign-up/EnterPinToVerify";
import SetYourNewPin from "./sign-up/SetYourNewPin";
import { useRouter } from "next/router";
import { MainContext } from "../../contexts/MainContext";

export default memo(function Register(props) {
  const router = useRouter();
  const { code, number, payment } = router.query;
  const { authState, updateResponseCode, updateSelectedPaymentMethod } =
    useContext(Authcontext);
  const { updateUserNumber, initialState } = useContext(MainContext);
  const RenderViews = useCallback(
    function () {
      var respCode = code || authState.subscribeResponseCode;
      if (respCode == 1) {
        return (
          <>
            <Pin newUser={authState.newUser ? true : false} />
          </>
        );
      } else if (!respCode) {
        return (
          <>
            <SignUpComponent />
          </>
        );
      } else if (respCode == 11) {
        return <EnterPinToVerify />;
      } else if (respCode == 34) {
        // Response code 34 is not coming from backend. This is only for frontend logic to display setPinView
        return (
          <>
            <SetYourNewPin {...props} />
          </>
        );
      }
    },
    [authState.subscribeResponseCode]
  );

  useEffect(() => {
    updateResponseCode(code);
    updateUserNumber(number);
  }, [code, number]);

  useEffect(() => {
    var selectedPayment = payment;
    if (authState?.paymentMethods.length > 1) {
      if (selectedPayment == "credit") {
        document.getElementsByClassName("Credit/Debit Card")[0].click();
        return (
          <>
            <SignUpComponent />
          </>
        );
      } else if (selectedPayment == "dcb") {
        document.getElementsByClassName("Sim Card")[0].click();
        return (
          <>
            <SignUpComponent />
          </>
        );
      } else if (selectedPayment == "easypaisa") {
        document.getElementsByClassName("Easypaisa")[0].click();
        return (
          <>
            <SignUpComponent />
          </>
        );
      } else if (selectedPayment == "jazzcash") {
        document.getElementsByClassName("JazzCash")[0].click();
        return (
          <>
            <SignUpComponent />
          </>
        );
      }
    }
  }, [authState.paymentMethods]);

  return (
    <div>
      <SignUpLayout bgImage={initialState?.currentPackage?.PackageImage}>
        <RenderViews />
      </SignUpLayout>
    </div>
  );
});
