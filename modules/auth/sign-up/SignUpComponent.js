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
    <div className="bit-top">
      <div className="mx-lg-5 mx-md-5 mx-2">
        <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0 mb-1">
          <PackageSelectView onChange={changeMainPackage} />
        </ul>
      </div>
      <ul className="list-group-horizontal list-group p-0 mt-5 mx-lg-4 mx-md-4 mx-2">
        <TaxView onChange={taxChangeView} />
      </ul>

      <div className="m-lg-4 m-xl-4 m-2 m-md-4 rounded bg-dark-cstm">
        <PaymentMethodComponent />
      </div>
    </div>
  );
};

export default SignUpComponent;
