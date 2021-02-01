import React, { useState, useEffect, useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import SubscribeButton from "./SubscribeButton";

const SignMessage = () => {
  const [paymentMethod, setPaymentMethods] = useState(null);

  const { authState } = useContext(Authcontext);
  useEffect(() => {
    if (authState && authState.selectedPaymentMethod) {
      setPaymentMethods(authState.selectedPaymentMethod);
    }
  }, [authState.selectedPaymentMethod]);

  return (
    <div className="form-group text-center pt-2 mb-0">
      <SubscribeButton />
      <p style={{ color: "#fff", padding: "10px" }}>
        {paymentMethod && paymentMethod.PaymentDescription}
      </p>
    </div>
  );
};

export default SignMessage;
