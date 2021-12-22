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
      <style jsx>
        {`
          .gridCol {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            flex-basis: 0;
          }
        `}
      </style>
      <div class="input-group mb-3">
        <div className="d-flex flex-wrap">
          <div className="input-group-prepend">
            <span className="payment-icon border-curve">{mobileCode}</span>
          </div>
          <div className="pl-2 flex-grow-1 flex-shrink-1 gridCol">
            <input
              type="text"
              maxLength="20"
              minLength="5"
              className="form-control border-curve flex-grow-1 w-100"
              placeholder="3xxxxxxxxxx"
              inputMode="numeric"
              readOnly={SignUpState.LoggedIn ? true : false}
              value={
                SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
              }
              defaultValue={
                SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
              }
              onChange={(e) => onChange(e)}
            />
            <input
              type="text"
              maxLength="6"
              minLength="6"
              className="form-control border-curve flex-grow-1 w-100"
              placeholder="Last 6 digits of your CNIC"
              inputMode="numeric"
              value={cnic}
              onChange={(e) => onChangeNic(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JazzCashForm;
