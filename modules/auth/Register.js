import React, { useState, useContext, useEffect, memo } from "react";
import TaxView from "./components/TaxView";
import "./auth.module.css";
import PaymentMethodComponent from "./components/PaymentMethod";
import PaymentInfo from "./components/PaymentInfo";
import { Authcontext } from "../../contexts/AuthContext";
import SignUpLayout from "./components/SignUpLayout";

export default function Register() {
  const { authState } = useContext(Authcontext);

  function RenderViews() {
    if (authState.subscribeResponseCode == 1) {
      return (
        <div>
          <input type="text" placeholder="Enter Pin" className="form-control" />
        </div>
      );
    } else if (!authState.subscribeResponseCode) {
      return (
        <>
          <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0">
            <TaxView />
          </ul>

          <div className="row w-100">
            <PaymentMethodComponent />
          </div>
          <PaymentInfo />
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
