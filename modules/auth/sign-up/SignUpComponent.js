import React, { useContext, useEffect, useState } from "react";
import TaxView from "./TaxView";
import PaymentMethodComponent from "./PaymentMethod";
import PaymentInfo from "./PaymentInfo";
import PackageSelectView from "./packages/PackageSelectView";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_PACKAGE, UPDATE_PAYMENT_PRICE } from "../../../contexts/auth/SignUpReducer";
import PaymentMethodDesktop from "./PaymentMethodDesktop";

const SignUpComponent = () => {
  const [isMobile , setIsMobile] = useState(false)
  const { dispatch } = useContext(SignUpContext);

  function taxChangeView(PricePoint) {
    dispatch({ type: UPDATE_PAYMENT_PRICE, data: PricePoint })
  }

  function changeMainPackage(MainPack) {
    dispatch({ type: UPDATE_PACKAGE, data: MainPack });
  }
useEffect(() => {
  if(window.innerWidth < 799){
    setIsMobile(true)
  }
 
}, [])
  return (
    <div className="bit-top">
      <div className="mx-sm-2">
        <ul className="list-group-horizontal list-group pymnt_pge_pr_list center-width">
          <PackageSelectView onChange={changeMainPackage} />
        </ul>
      </div>
      <ul className="list-group-horizontal  center-width-product list-group">
        <TaxView onChange={taxChangeView} />
      </ul>

      <div className="m-lg-4 m-xl-4 m-2 m-md-4 rounded bg-dark-cstm">
        {isMobile ? <PaymentMethodComponent /> : <PaymentMethodDesktop />}
        
      </div>
    </div>
  );
};

export default SignUpComponent;
