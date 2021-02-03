import React, { useState, useContext, useEffect, memo } from "react";
import DropdownWithImage from "./DropdownWithImage";
import SignMessage from "./SignMessage";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";

function PaymentInfo() {


  const [number , setNumber] = useState("");
  const { authState , updateSelectedOperator} = useContext(Authcontext);
  const { updateUserOperator, updateUserNumber , initialState} = useContext(MainContext);

  useEffect(() => {
    setNumber(initialState.User.MobileNo)
  }, [initialState , initialState.User.MobileNo])
  const onChangeNetwork = (data) => {
    updateUserOperator(data.OperatorId);
    updateSelectedOperator(data)
  };

  function handleNumber(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
    
      setNumber(mobileNum)
    }
    if(mobileNum.length  == 10){
      updateUserNumber(number);
      console.log("Length: ",number );
    }
  }
  return (
    <div>
      <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            <div className="input-group ng-scope">
              {authState.selectedPaymentMethod &&
              authState.selectedPaymentMethod.PaymentId == 1 ? (
                <DropdownWithImage
                  data={authState.loginOperators}
                  onChange={onChangeNetwork}
                  selected={authState.selectedLoginOperator}
                />
              ) : authState.selectedPaymentMethod &&
                authState.selectedPaymentMethod.PaymentId == 3 ? (
                <div className="form-control text-center">
                  <img
                    src="https://images.tapmad.com/images/EasypaisaE.png"
                    width="20"
                  />{" "}
                  <span className="font-weight">
                    {authState.selectedPaymentMethod.PaymentMethodName}
                  </span>
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
                <label className="form-control cntry_cde border-0">
                  {authState.MobileCode}
                </label>
              </span>

              <input
                type="text"
                maxLength="10"
                minLength="10"
                className="form-control"
                placeholder="3xxxxxxxxxx"
                inputMode="numeric"
                value={number}
                onChange={(e) => handleNumber(e)}
              />
            </div>
          </div>
        </div>
        <SignMessage />
      </div>
    </div>
  );
}

export default (PaymentInfo);
