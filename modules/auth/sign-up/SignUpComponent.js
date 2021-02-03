import React, { useContext, useEffect, useState } from "react";
import SignUpLayout from './SignUpLayout'
import TaxView from './TaxView'
import PaymentMethodComponent from './PaymentMethod'
import PaymentInfo from './PaymentInfo'

const SignUpComponent = () => {
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
};

export default SignUpComponent;
