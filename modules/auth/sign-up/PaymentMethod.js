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
    <div className="col-md-12 col-sm-12 pt-2">
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
