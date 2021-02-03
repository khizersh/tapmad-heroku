import React, { useState, useContext, useEffect } from "react";
import TaxView from "./sign-up/TaxView";
import "./auth.module.css";
import PaymentMethodComponent from "./sign-up/PaymentMethod";
import PaymentInfo from "./sign-up/PaymentInfo";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpComponent from "./sign-up/SignUpComponent";

export default function Register() {
  const { authState } = useContext(Authcontext);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (authState && authState.signUpComponent) {
      setComponent(authState.signUpComponent);
    }
  }, [authState.signUpComponent]);

  if (component && component == "signUp") {
    return (
      <div>
        <SignUpComponent></SignUpComponent>
      </div>
    );
  } else {
    return <></>;
  }
}
