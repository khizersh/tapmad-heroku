import React from "react";
import { easyPaisaIcon } from "../../../../services/imagesLink";

const EasypaisaForm = ({ methodName, mobileCode, onChangeNumber }) => {
  return (
    <>
      <div className="form-control text-center">
        <img src={easyPaisaIcon} width="20" />{" "}
        <span className="font-weight">{methodName}</span>
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
    </>
  );
};

export default EasypaisaForm;
