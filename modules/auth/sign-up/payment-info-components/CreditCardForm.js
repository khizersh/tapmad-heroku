import React, { useEffect } from "react";
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
  loggedIn,
}) => {
  const [num, setNum] = React.useState("");

  useEffect(() => {
    console.log(data, "DAATAA");
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
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control w-100 pl-2 border-curve"
          placeholder="Full Name"
          onChange={(e) => onChangeName(e)}
        />
      </div>
      <div className="mb-3">
        {data && data.length ? (
          <DropdownWithImage
            data={data}
            onChange={onChangeNetwork}
            width="84%"
            placeHolder="Select Network"
          />
        ) : null}
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="payment-icon border-curve">{mobileCode}</span>
        </div>
        <input
          type="text"
          maxLength="20"
          minLength="5"
          className="form-control ml-2 border-curve"
          placeholder="Mobile Number"
          inputMode="numeric"
          readOnly={loggedIn ? true : false}
          value={loggedIn == 1 ? Cookie.getCookies("user_mob") : num}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control w-100 pl-2 border-curve"
          placeholder="Email ID"
          required={true}
          onChange={(e) => onChangeEmail(e)}
        />
      </div>
      {creditCardType ? (
        <div className="one-liner w-100">
          <div className="card-frame"></div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default CreditCardForm;
