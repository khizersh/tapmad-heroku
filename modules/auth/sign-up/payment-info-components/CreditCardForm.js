import React, { useEffect } from "react";
import Checkout from "../../../../public/static/js/checkout";
import { on } from "../../../../public/static/js/linkers";
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

  useEffect(() => {
    new Checkout("pk_test_d81bca5a-5937-4d45-b5dc-0bc0e25c30d9");
  }, [])
  useEffect(() => {
    on("tokenSuccess", (event) => {
      console.log("Event ", event);
    })
  }, [])
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
        required={true}
        value={num}
        onChange={(e) => onChange(e)}
      />
      <input
        type="email"
        className="form-control w-100 mb-2 pl-2"
        placeholder="Email"
        required={true}
        onChange={(e) => onChangeEmail(e)}
      />
      <div className="one-liner w-100">
        <div className="card-frame">
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
