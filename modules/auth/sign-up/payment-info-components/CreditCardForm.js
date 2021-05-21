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
  const [num, setNum] = React.useState("");

  const onChange = (e) => {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setNum(mobileNum);
      onChangeNumber(e);
    }
  };
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
        maxLength="20"
         minLength="5"
        className="form-control mb-2 pl-2"
        placeholder="Mobile Number"
        inputMode="numeric"
        value={num}
        onChange={(e) => onChange(e)}
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
