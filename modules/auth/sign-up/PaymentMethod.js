import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";

export default function PaymentMethod() {
  const { authState, updateSelectedPaymentMethod } = useContext(Authcontext);
  const { updateUserOperator } = useContext(MainContext);
  function UpdatePaymenthMethod(m) {
    updateSelectedPaymentMethod(m);
    updateUserOperator(m.MobileNetworks[0].OperatorId);
  }
  return (
    <div className="col-md-12 col-sm-12 pt-2">
      <div className="row py-3" style={{ flexWrap: "nowrap" }}>
        {authState && authState.paymentMethods && authState.paymentMethods.length
          ? authState.paymentMethods.map((m, i) => (
            <div
              className="btn bg-transparent"
              style={{ margin: "auto" }}
              key={i}
            >
              <div className="row">
                <div className="col-12" style={{ height: 25 }}>
                  <span>
                    {authState.selectedPaymentMethod.PaymentId ==
                      m.PaymentId ? (
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
                  className={`text-center text-muted d-block mbl-13px  ${authState.selectedPaymentMethod.PaymentId == m.PaymentId
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
