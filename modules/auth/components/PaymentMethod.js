import React, { useEffect, useState , useContext} from "react";
import { Authcontext } from "../../../contexts/AuthContext";

const paymentMethod = ({ onClickPaymentMethod, selectedId, data }) => {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const { authState, updateSelectedPaymentMethod } = useContext(Authcontext);

  useEffect(() => {
    if (authState && authState.selectedPaymentMethod) {
      setPaymentMethod(authState.paymentMethods);
    }
  }, [authState.selectedPaymentMethod]);


  return (
    <div className="col-12 col-sm-12 pt-3">
      <div className="row pt-3 pb-3 pl-3">
        {paymentMethod.length
          ? paymentMethod.map((m, i) => (
              <div className="col-4" key={i}>
                <div
                  onClick={() => updateSelectedPaymentMethod(m)}
                  className="btn payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3 pymnt_pge_pkgs_active"
                >
                  <span className="mbl-check-icon">
                    {authState.selectedPaymentMethod.PaymentId == m.PaymentId ? (
                      <i className="fa fa-check-circle clr-green"></i>
                    ) : (
                      ""
                    )}
                  </span>
                  <img
                    src={m.PaymentImage}
                    alt={m.PaymentMethodName}
                    className="img-fluid mb-2 "
                    style={{ minWidth: "50px", height: "60px" }}
                  />
                  <i
                    className={`text-center text-muted d-block  ${
                      authState.selectedPaymentMethod.PaymentId == m.PaymentId ? "text-white" : ""
                    }`}
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
};

export default paymentMethod;
