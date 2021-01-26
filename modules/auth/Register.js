import React, { useState, useContext, useEffect } from "react";
import TaxView from "./components/TaxView";
import "./auth.module.css";
import PaymentMethodComponent from "./components/PaymentMethod";
import PaymentInfo from "./components/PaymentInfo";
import { MainContext } from "../../contexts/MainContext";

export default function Register() {
  const [paymentId, setPaymentId] = useState(null);
  const [loginOperators, setLoginOperators] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const { initialState } = useContext(MainContext);
  console.log("initialState: ", initialState);

  useEffect(() => {
    if (initialState?.AuthDetails?.LoginOperators) {
      let array = initialState.AuthDetails.LoginOperators.map((m) => {
        let obj = {
          id: m.OperatorId,
          label: m.OperatorName,
          src: m.OperatorImage,
        };
        return obj;
      });

      setLoginOperators(array);
      setPaymentMethods(initialState?.AuthDetails?.PaymentMethods);
      setPaymentId(initialState?.AuthDetails?.PaymentMethods[0]?.PaymentId);
    }
  }, [initialState]);

  const onClickPaymentMethod = (id) => {
    setPaymentId(id);
    console.log("paymentId: ", paymentId);
  };

  return (
    <div>
      <div className="mt-0 mt-sm-2">
        <div className="container-fluid p-0 p-sm-2 p-md-3 p-lg-3">
          <div className="">
            <div className="col-12 offset-0 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-4 p-0">
              <div className="pymnt_pge_bx">
                <a
                  id="sign-up-back-btn"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10px",
                    color: "#fff",
                  }}
                  className="mt-2 text-light"
                >
                  <i className="fa fa-arrow-left"></i> Back
                </a>
                <a
                  id="sign-up-screen-btn"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "10px",
                    color: "#fff",
                  }}
                  className="mt-2 text-light"
                >
                  <i className="fa fa-arrow-left"></i> Back
                </a>

                <img
                  className="w-100 mb-0"
                  src="https://d34080pnh6e62j.cloudfront.net/images/SignUpNewImage.jpg"
                />
                <button
                  type="button"
                  className="btn pull-right"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "13px",
                    border: "none",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "#ffffff",
                  }}
                >
                  Login
                </button>

                <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0">
                  <TaxView selectedId={paymentId} data={paymentMethods} />
                </ul>

                <div className="row w-100">
                  <PaymentMethodComponent
                    onClickPaymentMethod={onClickPaymentMethod}
                    selectedId={paymentId}
                    data={paymentMethods}
                  />
                </div>
                <PaymentInfo selectedId={paymentId} data={loginOperators} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
