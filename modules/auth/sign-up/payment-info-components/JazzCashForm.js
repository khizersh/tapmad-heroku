import React from "react";
import { jazzIcon } from "../../../../services/imagesLink";

const JazzCashForm = ({ mobileCode, onChangeNumber, onChangeCnic, logo }) => {
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
      {/* <div className="payment-icon border-curve text-center w-100 mb-2">
        <img src={jazzIcon} width="20" alt={"jazzcash"} />{" "}
        <span className="font-weight">JazzCash</span>
      </div> */}

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span className="payment-icon border-curve">
            {mobileCode}
          </span>
        </div>
        <input
          type="text"
          maxLength="20"
          minLength="5"
          className="form-control ml-2 border-curve"
          placeholder="3xxxxxxxxxx"
          inputMode="numeric"
          value={num}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          maxLength="6"
          minLength="6"
          className="form-control border-curve w-100 mt-3"
          placeholder="Last 6 digits of your CNIC"
          inputMode="numeric"
          value={cnic}
          onChange={(e) => onChangeNic(e)}
        />
      </div>
    </>
  );
};

export default JazzCashForm;
