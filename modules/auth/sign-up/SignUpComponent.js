import React, { useContext, useEffect, useState } from "react";
import TaxView from "./TaxView";
import PaymentMethodComponent from "./PaymentMethod";
import PaymentInfo from "./PaymentInfo";
import { Authcontext } from "../../../contexts/AuthContext";

const SignUpComponent = () => {
  const { authState, updateSelectedPackageId } = useContext(Authcontext);

  function taxChangeView(params) {
    console.log(authState.selectedPaymentMethod);
    const PackageId = authState.selectedPaymentMethod.PaymentId;
    const { id, amount, name } = (params);
    if (PackageId == 1) {
      updateSelectedPackageId(id, amount, name);
    } else if (PackageId == 2) {

    }
  }
  return (
    <div>
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
