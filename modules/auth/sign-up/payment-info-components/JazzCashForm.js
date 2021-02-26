import React from "react";
import { jazzIcon } from "../../../../services/imagesLink";

const JazzCashForm = ({ mobileCode, onChangeNumber, onChangeCnic }) => {
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
        onChange={(e) => onChangeNumber(e)}
      />
      <input
        type="text"
        maxLength="6"
        minLength="6"
        className="form-control w-100 mb-2 pl-2"
        placeholder="Last 6 digits of your CNIC"
        inputMode="numeric"
        onChange={(e) => onChangeCnic(e)}
      />
    </>
  );
};

export default JazzCashForm;
