import React, { useEffect, useState, useContext } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_PAYMENT_PRICE } from "../../../contexts/auth/SignUpReducer";

export default function TaxView({ onChange }) {
  const { dispatch, SignUpState } = useContext(SignUpContext);
  const [PackagePrice, setPackagePrice] = useState([]);
  const [SelectedPrice, setSelectedPrice] = useState({});

  useEffect(() => {
    if (SignUpState?.SelectedPackage?.PaymentTabMethods) {
      setPackagePrice(SignUpState.SelectedPackage.PaymentTabMethods);
      dispatch({ type: UPDATE_PAYMENT_PRICE, data: SignUpState.SelectedPackage.PaymentTabMethods[0] });
    }
  }, [SignUpState.SelectedPackage]);

  useEffect(() => {
    if (SignUpState.SelectedPrice.PackageId) {
      setSelectedPrice(SignUpState.SelectedPrice);
    }
  }, [SignUpState.SelectedPrice])

  const onChangePackage = (m) => {
    onChange(m);
  };

  return (
    <>
      {PackagePrice &&
        PackagePrice.length > 0 &&
        PackagePrice.map((m, i) => {
          return (
            <li
              key={i}
              className={`list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted ${SelectedPrice.ProductId ? (SelectedPrice.ProductId == m.ProductId ? "pr_active" : "") : ""
                }`}
              onClick={() =>
                onChangePackage(m)
              }>
              <span className="font-weight-bold">{m.PackageName}</span>
              <span className="d-block d-md-none"></span>
              {m.PackageDescription}
            </li>
          );
        })}
    </>
  );
}
