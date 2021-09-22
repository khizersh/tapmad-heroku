import React, { useContext, useEffect, useState } from "react";
import TaxView from "./TaxView";
import PaymentMethodComponent from "./PaymentMethod";
import PaymentInfo from "./PaymentInfo";
import PackageSelectView from "./packages/PackageSelectView";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_PACKAGE, UPDATE_PAYMENT_PRICE } from "../../../contexts/auth/SignUpReducer";

const SignUpComponent = () => {
  const { dispatch } = useContext(SignUpContext);

  function taxChangeView(PricePoint) {
    dispatch({ type: UPDATE_PAYMENT_PRICE, data: PricePoint })
  }

  function changeMainPackage(MainPack) {
    dispatch({ type: UPDATE_PACKAGE, data: MainPack });
  }

  return (
    <div>
      <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0 mb-1">
        <PackageSelectView onChange={changeMainPackage} />
      </ul>
      <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0">
        <TaxView onChange={taxChangeView} />
      </ul>

      <div className="">
        <PaymentMethodComponent />
      </div>
      <PaymentInfo />
    </div>
  );
};

export default SignUpComponent;
