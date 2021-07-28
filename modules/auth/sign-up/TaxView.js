import React, { useEffect, useState, useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import paymentMethod from "./PaymentMethod";

export default function TaxView() {
  const { authState, updateSelectedPackageId } = useContext(Authcontext);

  const [packageId, setPackageId] = useState(null);

  useEffect(() => {
    if (authState.selectedPaymentMethod) {
      updateSelectedPackageId(
        authState.selectedPaymentMethod.Packages[0].ProductId,
        authState.selectedPaymentMethod.Packages[0].PackagePrice,
        authState.selectedPaymentMethod.Packages[0].PackageName
      );
      // setPackageId(authState.selectedPaymentMethod.Packages[0].ProductId);
    }

  }, [authState.selectedPaymentMethod]);

  const onChangePackage = (id, amount, name) => {
    updateSelectedPackageId(id, amount, name);

  };

  return (
    <>
      {authState.selectedPaymentMethod &&
        authState.selectedPaymentMethod.Packages.length > 0 &&
        authState.selectedPaymentMethod.Packages.map((m, i) => {
          return (
            <li
              key={i}
              className={`list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted ${authState.selectedPackageId ? (authState.selectedPackageId == m.ProductId ? "pr_active" : "") : ""
                }`}
              onClick={() =>
                onChangePackage(m.ProductId, m.PackagePrice, m.PackageName)
              }
            >
              <span className="font-weight-bold">{m.PackagePrice}</span>
              <span className="d-block d-md-none"></span>
              {m.PackageDescription}
            </li>
          );
        })}
    </>
  );
}
