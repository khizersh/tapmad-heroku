import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import { Cookie } from "../../../../services/cookies";
import { jazzIcon } from "../../../../services/imagesLink";

const JazzCashForm = ({ mobileCode, onChangeNumber, onChangeCnic, logo }) => {
  const [num, setNum] = useState("");
  const [cnic, setCnic] = useState("");
  const { SignUpState, dispatch } = useContext(SignUpContext);

  const onChange = (e) => {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setNum(mobileNum);
      onChangeNumber(e);
    }
  };
  const onChangeNic = (e) => {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setCnic(mobileNum);
      onChangeCnic(e);
    }
  };

  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="payment-icon border-curve">{mobileCode}</span>
        </div>
        <div className="pl-2 flex-grow-1 flex-shrink-1 gridCol">
          <input
            type="text"
            maxLength="10"
            minLength="10"
            className="form-control border-curve flex-grow-1 w-100"
            placeholder="3xxxxxxxxxx"
            inputMode="numeric"
            readOnly={SignUpState.LoggedIn ? true : false}
            value={
              SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
            }
            // defaultValue={
            //   SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
            // }
            onChange={(e) => onChange(e)}
            pattern="\d*"
          />
          <input
            type="text"
            maxLength="13"
            minLength="13"
            className="form-control border-curve flex-grow-1 w-100"
            placeholder="Enter 13 digits of your CNIC"
            inputMode="numeric"
            value={cnic}
            onChange={(e) => onChangeNic(e)}
            pattern="\d*"
          />
        </div>
      </div>
    </>
  );
};

export default JazzCashForm;
