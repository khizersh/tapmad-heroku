import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import { Cookie } from "../../../../services/cookies";
import { jazzIcon } from "../../../../services/imagesLink";

const PtclForm = ({
  mobileCode,
  onChangeNumber,
  onChangeCnic,
  logo,
  hanldePtclNumber,
}) => {
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
  const onChangePTclNumber = (e) => {
    const ptcl = e.target.value;
    if (+ptcl === +ptcl) {
      setCnic(ptcl);
      hanldePtclNumber(e);
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
        </div>
      </div>
      <input
        type="text"
        maxLength="13"
        minLength="13"
        className="form-control border-curve flex-grow-1 w-100 mt-3"
        placeholder="Enter your PTCL number"
        inputMode="numeric"
        value={cnic}
        onChange={(e) => onChangePTclNumber(e)}
        pattern="\d*"
      />
    </>
  );
};

export default PtclForm;
