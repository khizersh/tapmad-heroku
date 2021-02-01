import React, { useEffect, useState, useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import paymentMethod from "./PaymentMethod";

export default function TaxView() {
  const { authState } = useContext(Authcontext);

  return (
    <>
      {authState.selectedPaymentMethod &&
        authState.selectedPaymentMethod.Packages.length > 0 &&
        authState.selectedPaymentMethod.Packages.map((m, i) => {
          return (
            <li
              key={i}
              className="list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted pr_active"
            >
              <span className="font-weight-bold">{m.PackagePrice}</span>
              Rs + Tax Per Week
            </li>
          );
        })}
    </>
  );
}
