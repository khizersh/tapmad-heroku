import React, { useState, useContext, useEffect } from "react";
import DropdownWithImage from "./DropdownWithImage";
import SignMessage from "./SignMessage";
import { MainContext } from "../../../contexts/MainContext";

const PaymentInfo = ({ type, data }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [loginOperators, setLoginOperators] = useState([]);

  useEffect(() => {
    setLoginOperators(data);
  }, [data]);

  const onChangePaymentMethod = (data) => {
    setSelectedNetwork(data);
  };
  return (
    <div>
      <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            <div className="input-group ng-scope">
              {type == "simCard" ? (
                <DropdownWithImage
                  data={loginOperators}
                  onChange={onChangePaymentMethod}
                />
              ) : type == "easyPaisa" ? (
                <div className="form-control text-center">
                  <img
                    src="https://images.tapmad.com/images/EasypaisaE.png"
                    width="20"
                  />{" "}
                  <span className="font-weight">Easypaisa</span>
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
        {/* <SignMessage type={type} /> */}
      </div>
    </div>
  );
};

export default PaymentInfo;
