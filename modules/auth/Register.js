import React, { useState, useContext, useEffect } from "react";
import TaxView from "./components/TaxView";
import "./auth.module.css";
import PaymentMethodComponent from "./components/PaymentMethod";
import PaymentInfo from "./components/PaymentInfo";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpLayout from "./components/SignUpLayout";

export default function Register() {
  const { authState } = useContext(Authcontext);

  return (
    <div>
      <SignUpLayout>
        <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0">
          <TaxView />
        </ul>

        <div className="row w-100">
          <PaymentMethodComponent />
        </div>
        <PaymentInfo />
      </SignUpLayout>
    </div>
  );
}
