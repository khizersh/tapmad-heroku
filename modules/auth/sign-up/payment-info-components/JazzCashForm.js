import React from "react";
import { jazzIcon } from "../../../../services/imagesLink";

const JazzCashForm = ({ mobileCode, onChangeNumber, onChangeCnic }) => {
  const [num, setNum] = React.useState("");
  const [cnic, setCnic] = React.useState("");

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
      <div className="form-control text-center">
        <img src={jazzIcon} width="20" />{" "}
        <span className="font-weight">JazzCash</span>
      </div>
      <span>
        <label className="form-control cntry_cde border-0">{mobileCode}</label>
      </span>
      <input
        type="text"
        maxLength="10"
        minLength="10"
        className="form-control"
        placeholder="3xxxxxxxxxx"
        inputMode="numeric"
        value={num}
        onChange={(e) => onChange(e)}
      />
      <input
        type="text"
        maxLength="6"
        minLength="6"
        className="form-control w-100 mb-2 pl-2"
        placeholder="Last 6 digits of your CNIC"
        inputMode="numeric"
        value={cnic}
        onChange={(e) => onChangeNic(e)}
      />
    </>
  );
};

export default JazzCashForm;
