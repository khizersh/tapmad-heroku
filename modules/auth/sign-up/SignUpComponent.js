import React, { useContext, useEffect, useRef, useState } from "react";
import TaxView from "./TaxView";
import PaymentMethodComponent from "./PaymentMethod";
import Head from "next/head";
import PackageSelectView from "./packages/PackageSelectView";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import {
  UPDATE_PACKAGE,
  UPDATE_PAYMENT_PRICE,
} from "../../../contexts/auth/SignUpReducer";
import PaymentMethodDesktop from "./PaymentMethodDesktop";

const SignUpComponent = ({ tab, packageId }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const refContainer = useRef(null);
  const [image, setImage] = useState(null);

  function taxChangeView(PricePoint) {
    dispatch({ type: UPDATE_PAYMENT_PRICE, data: PricePoint });
  }

  function changeMainPackage(MainPack) {
    dispatch({ type: UPDATE_PACKAGE, data: MainPack });
  }
  useEffect(() => {
    setImage(SignUpState?.SelectedPrice?.PackageBannerImageWeb);
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, [SignUpState]);
  return (
    <>
      <Head>
        <style>
          {`
          .grey-background{
            background-image:url(${image}) !important;
            background-size:cover !important;
            background-position:0px 52px !important;
            background-repeat:no-repeat !important;
          }
          `}
        </style>
      </Head>
      <style jsx>
        {`
          .center-width-product {
            width: 100%;
          }
          .center-width {
            width: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .package-banner {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
        `}
      </style>
      {/* <img src={image} className="package-banner" /> */}
      <div className="bit-top">
        <div className="mx-sm-2 text-center">
          <ul className="list-group-horizontal list-group pymnt_pge_pr_list center-width">
            <PackageSelectView onChange={changeMainPackage} />
          </ul>
        </div>
        <ul className="list-group-horizontal center-width-product list-group justify-content-center">
          <TaxView onChange={taxChangeView} />
        </ul>

        <div className="m-lg-4 m-xl-4 m-2 m-md-4 rounded bg-dark-cstm">
          {isMobile ? <PaymentMethodComponent /> : <PaymentMethodDesktop />}
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
