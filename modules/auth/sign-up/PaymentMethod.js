import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_PAYMENT_METHOD } from "../../../contexts/auth/SignUpReducer";

export default function PaymentMethod() {
  const { SignUpState, dispatch } = useContext(SignUpContext);
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
    <div className="col-md-12 col-sm-12 pt-2 rounded bg-dark-cstm">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
      <div>
        50 Live channels & video on demand. Entertainment, kids content, & cricket bilaterals.
      </div>
      <div className="mt-3" style={{ 'color': '#FC5656' }}>
        *On subscribing to this package PKR 100 will be deducted from your account on a monthly basis. In order to avoid deduction, you may cancel at any time.
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <h3 className="text-base">Payment Option</h3>
        </div>
        <div className="col-12">

          <div className="row position-relative">
            <div className="col-3 position-relative">
              <input type="radio" name="radio" id="one" />
              <label for="one">&nbsp;</label>
            </div>
            <div className="col-3 position-relative">
              <input type="radio" name="radio" id="two" />
              <label for="two">&nbsp;</label>
            </div>
            <div className="col-3 position-relative">
              <input type="radio" name="radio" id="three" />
              <label for="three">&nbsp;</label>
            </div>
            <div className="col-3 position-relative">
              <input type="radio" name="radio" id="four" />
              <label for="four">&nbsp;</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-3" style={{ flexWrap: "nowrap" }}>
        {CurrentPackage && CurrentPackage.PaymentMethods
          ? CurrentPackage.PaymentMethods.map((m, i) => (
            <div
              className="btn bg-transparent"
              style={{ margin: "auto" }}
              key={i}
            >
              <div className="row">
                <div className="col-12" style={{ height: 25 }}>
                  <span>
                    {CurrentMethod.PaymentOperatorId ==
                      m.PaymentOperatorId ? (
                      <i className="fa fa-check-circle clr-green"></i>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
              <div onClick={() => UpdatePaymenthMethod(m)} className={`${m.PaymentMethodName}`}>
                <img
                  src={m.PaymentImage}
                  alt={m.PaymentMethodName}
                  className="img-fluid mb-2 "
                  style={{ minWidth: "50px", height: "60px" }}
                />
                <i
                  className={`text-center text-muted d-block mbl-13px  ${CurrentMethod.PaymentOperatorId == m.PaymentOperatorId
                    ? "text-white"
                    : ""
                    }`}
                  style={{ fontStyle: "normal" }}
                >
                  {m.PaymentMethodName}
                </i>
              </div>
            </div>
          ))
          : null}
      </div>
    </div>
  );
}
