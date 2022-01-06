import React, { useEffect, useContext, useState } from "react";
import DropdownWithImage from "../DropdownWithImage";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";

const SimCardForm = ({ data, onChangeNetwork, onChangeNumber, mobileCode }) => {
  const [num, setNum] = useState("");
  const [readOnly, setReadOnly] = useState(false);

  const { SignUpState } = useContext(SignUpContext);

  const onChange = (e) => {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setNum(mobileNum);
      onChangeNumber(e);
    }
  };

  return (
    <>
      <style jsx>
        {`
          @media (min-width: 768px) {
            .smcwrp {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }
          }
          @media (max-width: 767px) {
            .smcwrp div + div {
              margin-top: 1rem;
            }
          }
        `}
      </style>
      <div className="smcwrp">
        {data && data.length ? (
          <div className="flex-grow-1 flex-shrink-1">
            <DropdownWithImage
              data={data}
              onChange={onChangeNetwork}
              placeHolder="Select Network"
              width="100%"
            />
            {/* <div className="">
            <label className="form-control cntry_cde border-0">
              {mobileCode}
            </label>
          </div> */}
          </div>
        ) : (
          ""
        )}

        <div className="flex-grow-1 flex-shrink-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="payment-icon border-curve">{mobileCode}</span>
            </div>
            <input
              type="number"
              maxLength="10"
              minLength="10"
              className="form-control ml-2 border-curve"
              placeholder="3xxxxxxxxxx"
              inputMode="numeric"
              autoComplete={"false"}
              value={
                SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
              }
              defaultValue={
                SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
              }
              onChange={(e) => onChange(e)}
              pattern="\d*"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimCardForm;
