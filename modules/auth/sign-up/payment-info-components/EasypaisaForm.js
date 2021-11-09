import React from "react";
import { easyPaisaIcon } from "../../../../services/imagesLink";

const EasypaisaForm = ({ methodName, mobileCode, onChangeNumber , logo }) => {
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
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span className="payment-icon border-curve">{mobileCode}</span>
        </div>
        <input
          type="text"
          maxLength="20"
          minLength="5"
          className="form-control ml-3 border-curve"
          placeholder="3xxxxxxxxxx"
          inputMode="numeric"
          value={num}
          onChange={(e) => onChange(e)}
        />
      </div>
      {/* <div className="form-control text-center">
        <img src={easyPaisaIcon} width="20" alt={'easypaisa'} />{" "}
        <span className="font-weight">{methodName}</span>
      </div> */}
      {/* <span>
        <label className="form-control cntry_cde border-0">{mobileCode}</label>
      </span>

      <input
        type="text"
        maxLength="20"
        minLength="5"
        className="form-control"
        placeholder="3xxxxxxxxxx"
        inputMode="numeric"
        value={num}
        onChange={(e) => onChange(e)}
      /> */}
    </>
  );
};

export default EasypaisaForm;
