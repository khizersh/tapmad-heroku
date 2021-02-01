import React, { useState, useContext, useEffect } from "react";
import DropdownWithImage from "./DropdownWithImage";
import SignMessage from "./SignMessage";
import { MainContext } from "../../../contexts/MainContext";
import { Authcontext } from "../../../contexts/AuthContext";

const PaymentInfo = () => {
  const [loginOperators, setLoginOperators] = useState([]);
  const [type, setType] = useState(null);
  
  const { authState , updateSelectedOperator} = useContext(Authcontext);

  useEffect(() => {
    if (authState && authState.selectedPaymentMethod) {
      setLoginOperators(authState.loginOperators);
      setType(authState.selectedPaymentMethod)

    }
  }, [authState.selectedPaymentMethod]);

  const onChangeNetwork = (data) => {
    updateSelectedOperator(data);
  };
  return (
    <div>
      <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            <div className="input-group ng-scope">
              {type && type.PaymentMethodName == "Sim Card" ? (
                <DropdownWithImage
                  data={loginOperators}
                  onChange={onChangeNetwork}
                />
              ) : type && type.PaymentMethodName == "Easypaisa"? (
                <div className="form-control text-center">
                  <img
                    src="https://images.tapmad.com/images/EasypaisaE.png"
                    width="20"
                  />{" "}
                  <span className="font-weight">{type.PaymentMethodName}</span>
                </div>
              ) : (
                <div className="form-control text-center">
                  <img
                    src="https://images.tapmad.com/images/mobileOperator/jazz-cash-logo.jpg"
                    width="20"
                  />{" "}
                  <span className="font-weight">JazzCash</span>
                </div>
              )}

              <span>
                <label className="form-control cntry_cde border-0">+92</label>
              </span>

              <input
                type="text"
                id="input_msisdn12"
                required=""
                minLength="10"
                className="form-control"
                placeholder="3xxxxxxxxx"
              />
            </div>
          </div>
        </div>
        <SignMessage />
      </div>
    </div>
  );
};

export default PaymentInfo;
