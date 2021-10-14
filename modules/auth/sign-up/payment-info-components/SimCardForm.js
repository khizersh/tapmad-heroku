import React from "react";
import DropdownWithImage from "../DropdownWithImage";

const SimCardForm = ({ data, onChangeNetwork, onChangeNumber, mobileCode }) => {
  const [num, setNum] = React.useState("");

  const onChange = (e) => {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setNum(mobileNum);
      onChangeNumber(e);
    }
  }; ``
  return (
    <>
      {data && data.length ? (
        <>
          {" "}
          <DropdownWithImage data={data} onChange={onChangeNetwork} placeHolder="Select Network" width="84%"/>
          {/* <div className="">
            <label className="form-control cntry_cde border-0">
              {mobileCode}
            </label>
          </div> */}
        </>
      ) : (
        ""
      )}

      <div class="input-group mt-3">
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
          autoComplete={'false'}
          value={num}
          onChange={(e) => onChange(e)}
        />
      </div>
    </>
  );
};

export default SimCardForm;
