import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import Checkout from "../../../../public/static/js/checkout";
import { Cookie } from "../../../../services/cookies";
import DropdownWithImage from "../DropdownWithImage";

const CreditCardForm = ({
  data,
  onChangeName,
  onChangeNetwork,
  mobileCode,
  onChangeNumber,
  onChangeEmail,
  creditCardType,
}) => {
  const [num, setNum] = useState("");
  const { SignUpState } = useContext(SignUpContext);

  useEffect(() => {
    if (creditCardType) {
      new Checkout("pk_4efbb3d2-00b9-4860-95bf-329b4801644d");
    }
  }, [creditCardType == 1]);

  const onChange = (e) => {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setNum(mobileNum);
      onChangeNumber(e);
    }
  };
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-6 input-group">
          <input
            type="text"
            className="form-control w-100 pl-2 border-curve"
            placeholder="Full Name"
            onChange={(e) => onChangeName(e)}
          />
        </div>
        <div className="col-md-6 m-mt">
          {data && data.length ? (
            <DropdownWithImage
              data={data}
              onChange={onChangeNetwork}
              width="84%"
              placeHolder="Select Network"
            />
          ) : null}
        </div>
      </div>

      <div className="row">
        <div className="input-group col-md-6">
          <div className="input-group-prepend">
            <span className="payment-icon border-curve">{mobileCode}</span>
          </div>
          <input
            type="text"
            maxLength="10"
            minLength="10"
            className="form-control ml-2 border-curve"
            placeholder="Mobile Number"
            inputMode="numeric"
            readOnly={SignUpState.LoggedIn ? true : false}
            value={
              SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
            }
            defaultValue={
              SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
            }
            onChange={(e) => onChange(e)}
            pattern="\d*"
          />
        </div>
        <div className="input-group col-md-6 m-mt">
          <input
            type="email"
            className="form-control w-100 pl-2 border-curve"
            placeholder="Email ID"
            required={true}
            onChange={(e) => onChangeEmail(e)}
          />
        </div>
      </div>
      {creditCardType ? (
        <div className="one-liner w-100 mt-3">
          <div className="card-frame"></div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default CreditCardForm;
