import React from "react";
import DropdownWithImage from "../DropdownWithImage";

const CreditCardForm = ({
  data,
  onChangeName,
  onChangeNetwork,
  mobileCode,
  onChangeNumber,
  onChangeEmail,
}) => {
  console.log("data: ", data);
  return (
    <>
      <input
        type="text"
        className="form-control w-100 mb-2 pl-2"
        placeholder="Full Name"
        onChange={(e) => onChangeName(e)}
      />
      {data && data.length ? (
        <DropdownWithImage data={data} onChange={onChangeNetwork} />
      ) : null}
      <span>
        <label className="form-control cntry_cde border-0">{mobileCode}</label>
      </span>
      <input
        type="text"
        maxLength="10"
        minLength="10"
        className="form-control mb-2 pl-2"
        placeholder="Mobile Number"
        inputMode="numeric"
        onChange={(e) => onChangeNumber(e)}
      />
      <input
        type="email"
        className="form-control w-100 mb-2 pl-2"
        placeholder="Email"
        onChange={(e) => onChangeEmail(e)}
      />
    </>
  );
};

export default CreditCardForm;
