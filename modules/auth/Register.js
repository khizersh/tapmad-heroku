import React, {
  useContext,
  memo,
  useCallback,
  useState,
  useEffect,
} from "react";
import SignUpComponent from "./sign-up/SignUpComponent";
import SignUpLayout from "./sign-up/SignUpLayout";
import VerifyOTP from "./sign-up/VerifyOTP";
import EnterPinToVerify from "./sign-up/EnterPinToVerify";
import SetYourNewPin from "./sign-up/SetYourNewPin";
import { useRouter } from "next/router";
import { SignUpContext } from "../../contexts/auth/SignUpContext";
import {
  UPDATE_SUBSCRIBE_RESPONSE,
  UPDATE_USER_DETAILS,
} from "../../contexts/auth/SignUpReducer";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { UPDATE_PACKAGE } from "../../contexts/auth/SignUpReducer";

export default memo(function Register(props) {
  const router = useRouter();
  const { code, number, payment, operator, tab, packageId } = router.query;
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const { AuthState } = useContext(AuthContext);
  const RenderViews = useCallback(
    function () {
      var respCode = code || SignUpState.subscribeResponseCode;
      if (respCode == 1) {
        return (
          <>
            <VerifyOTP newUser={SignUpState.newUser ? true : false} />
          </>
        );
      } else if (!respCode) {
        return (
          <>
            <SignUpComponent tab={tab} packageId={packageId} />
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
    [SignUpState.subscribeResponseCode]
  );

  useEffect(() => {
    dispatch({
      type: UPDATE_USER_DETAILS,
      data: { MobileNo: number, Operator: operator },
    });
    dispatch({
      type: UPDATE_SUBSCRIBE_RESPONSE,
      data: { code: code, newUser: false },
    });
  }, [code, number]);

  // select payment methods by query param
  useEffect(() => {
    var selectedPayment = payment;
    if (selectedPayment == "credit") {
      document.getElementsByClassName("Credit/Debit Card")[0]?.click();
      return (
        <>
          <SignUpComponent />
        </>
      );
    } else if (selectedPayment == "dcb") {
      document.getElementsByClassName("Sim Card")[0]?.click();
      return (
        <>
          <SignUpComponent />
        </>
      );
    } else if (selectedPayment == "easypaisa") {
      document.getElementsByClassName("Easypaisa")[0]?.click();
      return (
        <>
          <SignUpComponent />
        </>
      );
    } else if (selectedPayment == "jazzcash") {
      document.getElementsByClassName("JazzCash")[0]?.click();
      return (
        <>
          <SignUpComponent />
        </>
      );
    }
  }, [SignUpState.SelectedPrice]);

  // selecting package and product tab by default
  useEffect(() => {
    if (SignUpState.signupRender) {
      if (tab == 1) {
        dispatch({ type: UPDATE_PACKAGE, data: AuthState.PaymentPackages[0] });
      } else if (tab == 2) {
        dispatch({ type: UPDATE_PACKAGE, data: AuthState.PaymentPackages[1] });
      }
    }
    // dispatch({
    //   type: UPDATE_PAYMENT_PRICE,
    //   data: SignUpState.SelectedPackage.PaymentTabMethods[0],
    // });
  }, [SignUpState.signupRender]);

  return (
    <div>
      <SignUpLayout bgImage={SignUpState?.SelectedPackage?.PaymentTabImage}>
        <RenderViews />
      </SignUpLayout>
    </div>
  );
});
