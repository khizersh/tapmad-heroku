import React from "react";
import { easyPaisaIcon } from "../../../../services/imagesLink";

const EasypaisaForm = ({ methodName, mobileCode, onChangeNumber }) => {
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
        value={num}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default EasypaisaForm;
