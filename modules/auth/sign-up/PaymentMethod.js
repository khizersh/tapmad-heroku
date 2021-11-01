import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_PAYMENT_METHOD } from "../../../contexts/auth/SignUpReducer";
import PaymentInfo from "./PaymentInfo";

export default function PaymentMethod() {
  const { SignUpState , dispatch } = useContext(SignUpContext);
  const [CurrentPackage, setCurrentPackage] = useState({});
  const [CurrentMethod, setCurrentMethod] = useState({});
  
  function UpdatePaymenthMethod(paymentMethod) {
    dispatch({ type: UPDATE_PAYMENT_METHOD, data: paymentMethod })
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
  }, [SignUpState.SelectedMethod])

  return (
    <div className="col-md-12 col-sm-12 pt-2">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
      <div>
        50 Live channels & video on demand. Entertainment, kids content, & cricket bilaterals.
      </div>
      <div className="mt-3" style={{ 'color': '#FC5656' }}>
        {CurrentPackage?.HighlightDescription}
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <h3 className="text-base">Payment Option</h3>
        </div>
      </div>
      <div className="row py-3 flex-nowrap">
        {CurrentPackage && CurrentPackage.PaymentMethods
          ? CurrentPackage.PaymentMethods.map((m, i) => (
            <div className="col text-center p-0">
              <div
                className="btn bg-transparent"
                style={{ margin: "auto" }}
                key={i}
              >
                <div className="position-relative">
                  <input type="radio" name="radio" onClick={() => UpdatePaymenthMethod(m)} id={m.PaymentMethodName} />
                  <label className="radio-cstm" htmlFor={m.PaymentMethodName}>
                    <div onClick={() => UpdatePaymenthMethod(m)} className={`${m.PaymentMethodName} mt-4`}>
                      <img
                        src={m.PaymentImage}
                        alt={m.PaymentMethodName}
                        className="img-fluid "
                        width="70"
                      />
                      <i
                        className={`text-center text-muted d-block mbl-13px  ${CurrentMethod.PaymentOperatorId == m.PaymentOperatorId
                          ? "text-white"
                          : ""
                          }`}
                        style={{ fontStyle: "normal" }}
                      >
                        {/* {m.PaymentMethodName} */}
                      </i>
                    </div>
                  </label>
                  {/* <span>
                    {CurrentMethod.PaymentOperatorId ==
                      m.PaymentOperatorId ? (
                      <i className="fa fa-check-circle clr-green"></i>
                    ) : (
                      ""
                    )}
                  </span> */}
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
  );
}
