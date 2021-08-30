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
  };
  return (
    <>
      {data && data.length ? (
        <>
          {" "}
          <DropdownWithImage data={data} onChange={onChangeNetwork} />
          <span>
            <label className="form-control cntry_cde border-0">
              {mobileCode}
            </label>
          </span>
        </>
      ) : (
        ""
      )}

      <input
        type="text"
        maxLength="20"
        minLength="5"
        className="form-control"
        placeholder="3xxxxxxxxxx"
        inputMode="numeric"
        autoComplete={'false'}
        value={num}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default SimCardForm;
