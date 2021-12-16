import React, { useContext, useEffect } from "react";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import { Cookie } from "../../../../services/cookies";
import { jazzIcon } from "../../../../services/imagesLink";

const JazzCashForm = ({ mobileCode, onChangeNumber, onChangeCnic, logo }) => {
  const [num, setNum] = React.useState("");
  const [cnic, setCnic] = React.useState("");
  const { SignUpState, dispatch } = useContext(SignUpContext);

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
  useEffect(() => {
    console.log(SignUpState.LoggedIn, "SignUpState.LoggedIn");
  }, []);
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
          className="form-control ml-2 border-curve"
          placeholder="3xxxxxxxxxx"
          inputMode="numeric"
          readOnly={SignUpState.LoggedIn ? true : false}
          value={
            SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
          }
          defaultValue={
            SignUpState.LoggedIn == 1 ? Cookie.getCookies("user_mob") : num
          }
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
