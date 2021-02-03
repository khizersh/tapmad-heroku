import React, { useState, useContext, useEffect, memo } from "react";
import TaxView from "./sign-up/TaxView";
import "./auth.module.css";
import PaymentMethodComponent from "./sign-up/PaymentMethod";
import PaymentInfo from "./sign-up/PaymentInfo";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpComponent from "./sign-up/SignUpComponent";
import SignUpLayout from "./sign-up/SignUpLayout";
import Otp from "./sign-up/Otp";
import Pin from "./sign-up/Pin";

export default function Register() {
  const { authState } = useContext(Authcontext);
  const [component, setComponent] = useState(null);

  function RenderViews() {
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
  }

  return (
    <div>
      <SignUpLayout>
        <RenderViews />
      </SignUpLayout>
    </div>
  );
}
