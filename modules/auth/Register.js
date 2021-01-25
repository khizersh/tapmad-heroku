import React, { useState } from "react";
import TaxView from "./components/TaxView";
import "./auth.module.css";
import PaymentMethodComponent from "./components/PaymentMethod";
import PaymentInfo from "./components/PaymentInfo";

export default function Register() {
  const [type, setType] = useState("simCard");

  const onClickPaymentMethod = (type) => {
    setType(type);
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
                  className="img-fluid mb-0"
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
                  <TaxView type={type} />
                </ul>

                <div className="row w-100">
                  <PaymentMethodComponent
                    onClickPaymentMethod={onClickPaymentMethod}
                    type={type}
                  />
                </div>
                <PaymentInfo type={type} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
