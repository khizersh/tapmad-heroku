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
            <div className="w-100">
              <li
                key={i}
                className={`w-100 p-1 f-20 text-center cursor-pointer border-0 text-base ${SelectedPrice.ProductId ? (SelectedPrice.ProductId == m.ProductId ? "price-active" : "") : ""
                  }`}
                onClick={() =>
                  onChangePackage(m)
                }>

                <span className="font-weight-bold">{m.PackageName}</span>
                <div className="d-flex justify-content-center">
                  <div className="text-white per-month mt-2">
                  {m.PackagePrices[0]}
                  </div>
                  <div className="f-40 font-weight-bold text-white">{m.PackagePrices[1]}</div>
                  <div className="text-white  monthly">
                  {/* <div className="text-white d-flex flex-column justify-content-end per-month"> */}
                    {/* <span> &nbsp;&nbsp;  per</span><span>&nbsp;&nbsp;  month</span> */}
                    <span className="d-block">{m.PackagePrices[2].split(" ")[0]}</span>{m.PackagePrices[2].split(" ")[1]}
                  </div>
                </div>
                <span className="d-block d-md-none"></span>
                {m.PackageDescription}
              </li>
              {SelectedPrice.ProductId ? (SelectedPrice.ProductId == m.ProductId ? <div class="triangle-down"></div> : "") : ""}
            </div>
          );

        })}
    </>
  );
}
