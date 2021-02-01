import React, { useState, useEffect, useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import SubscribeButton from "./SubscribeButton";

export default function SignMessage() {
  const { authState } = useContext(Authcontext);

  return (
    <div className="form-group text-center pt-2 mb-0">
      <SubscribeButton />
      <p style={{ color: "#fff", padding: "10px" }}>
        {authState.selectedPaymentMethod &&
          authState.selectedPaymentMethod.PaymentDescription}
      </p>
    </div>
  );
}
