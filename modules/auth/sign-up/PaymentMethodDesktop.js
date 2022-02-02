import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import {
  UPDATE_PAYMENT_METHOD,
  UPDATE_USER_DETAILS,
} from "../../../contexts/auth/SignUpReducer";
import PaymentInfo from "./PaymentInfo";

export default function PaymentMethodDesktop() {
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const [CurrentPackage, setCurrentPackage] = useState({});
  const [CurrentMethod, setCurrentMethod] = useState({});

  function UpdatePaymenthMethod(paymentMethod) {
    dispatch({ type: UPDATE_PAYMENT_METHOD, data: paymentMethod });
    dispatch({
      type: UPDATE_USER_DETAILS,
      data: { Operator: paymentMethod.PaymentOperatorId },
    });
  }
  useEffect(() => {
    if (SignUpState.SelectedPrice.PaymentMethods) {
      setCurrentPackage(SignUpState.SelectedPrice);
      UpdatePaymenthMethod(SignUpState.SelectedPrice.PaymentMethods[0]);
    }
  }, [SignUpState.SelectedPrice]);
  useEffect(() => {
    if (SignUpState.SelectedMethod.PaymentMethodName) {
      setCurrentMethod(SignUpState.SelectedMethod);
    }
  }, [SignUpState.SelectedMethod]);


  return (
    <div className="container">
      <style jsx>
        {`
          .max-width-30 {
            height: 35px;
            width: 54px;
            max-width: 54px;
          }
          .sized-image {
            max-height: 30px;
            max-width: 100px;
          }
        `}
      </style>
      <style>
        {`
        .gridCol {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            flex-basis: 0;
          }

          .pdtl-cols {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
          }

          .pdtl-cols div {
            flex: 1;
          }
          .highlighted-desc b {
            font-weight: 700;
            text-align: justify
          }
          .highlighted-desc:before {
            content: "*"
          }
        `}
      </style>
      <div className="row padding-signup-layout">
        <div className="col-5">
          <div className="pdtl-cols">
            {CurrentPackage?.DeviceStream?.length
              ? CurrentPackage.DeviceStream.map((m, ind) => (
                  <div key={ind} className="text-center">
                    <p>
                      <img src={m.Image} className="max-width-30" />
                    </p>
                    {m.Name == "0" || m.Name == "1" ? (
                      <p className="text-white">
                        {m.Name == "1" ? "Casting" : "No Casting"}
                      </p>
                    ) : (
                      <p className="text-white">{m.Name}</p>
                    )}
                  </div>
                ))
              : null}
          </div>
          <div
            className="text-white"
            style={{
              textAlign: "justify",
              lineHeight: "1.3",
            }}
          >
            {CurrentPackage?.ContentDescription}
          </div>
          {SignUpState.SelectedMethod.PaymentId == 5 ? (
            <div
              className="mt-3 highlighted-desc"
              style={{ color: "#FC5656", fontSize: "0.8em", fontWeight: 300 }}
            >
             {SignUpState?.SelectedMethod?.PaymentMethodDescription}
            </div>
          ) : (
            <div
              className="mt-3 highlighted-desc"
              style={{ color: "#FC5656", fontSize: "0.8em", fontWeight: 300 }}
              dangerouslySetInnerHTML={{
                __html: CurrentPackage?.HighlightDescription,
              }}
            />
          )}
        </div>
        <div className="col-7 border-dotted-left">
          <div className="row">
            <div className="col-12">
              <h3 className="text-base text-center line-1">Payment Options</h3>
            </div>
          </div>
          <div className="row py-3 justify-content-center no-gutters px-4">
            {CurrentPackage && CurrentPackage.PaymentMethods
              ? CurrentPackage.PaymentMethods.map((m, i) => (
                  <div className="text-center p-0">
                    <div
                      className="btn bg-transparent"
                      style={{ margin: "auto" }}
                      key={i}
                    >
                      <div className="position-relative">
                        <input
                          type="radio"
                          name="radio"
                          checked={
                            CurrentMethod.PaymentOperatorId ==
                            m.PaymentOperatorId
                              ? true
                              : false
                          }
                          onClick={() => UpdatePaymenthMethod(m)}
                          id={m.PaymentMethodName}
                        />
                        <label
                          className="radio-cstm"
                          htmlFor={m.PaymentMethodName}
                          style={{ width: "100px" }}
                        >
                          <div
                            onClick={() => UpdatePaymenthMethod(m)}
                            className={`${m.PaymentMethodName} mt-4`}
                          >
                            <img
                              src={m.PaymentImage}
                              alt={m.PaymentMethodName}
                              className="img-fluid sized-image"
                            />
                            <i
                              className={`text-center text-muted d-block mbl-13px  ${
                                CurrentMethod.PaymentOperatorId ==
                                m.PaymentOperatorId
                                  ? "text-muted"
                                  : ""
                              }`}
                              style={{ fontStyle: "normal" }}
                            ></i>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div>
            <PaymentInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
