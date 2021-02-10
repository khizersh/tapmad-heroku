import React, { useContext, useEffect } from "react";
import { post } from "../../../services/http-service";
import { MainContext } from "../../../contexts/MainContext";
import { Authcontext } from "../../../contexts/AuthContext";
import { useRef } from "react";

const Pin = () => {
  const { initialState } = useContext(MainContext);
  const { authState } = useContext(Authcontext);
  const otp = useRef("");
  async function verifyPinCode() {
    let body = {
      Version: "V1",
      Language: "en",
      Platform: "web",
      ProductId: authState.selectedPaymentMethod.Packages[0].ProductId,
      MobileNo: initialState.User.MobileNo,
      OperatorId: initialState.User.OperatorId,
      CodeOTP: otp.current.value,
    };
    var resp = await post(
      "https://api.tapmad.com/api/processPaymentTransaction",
      body
    );
    console.log(resp);
    if (resp.data.User) {
      updateResponseCode(34);
    } else {
      alert("Invalid Code");
    }
  }
  return (
    <div className="text-center">
      <div className="py-3">
        <label class="text-muted">Please verify your OTP Code</label>
      </div>
      <div className="px-3 pb-4">
        <input
          type="text"
          placeholder="Enter OTP Code"
          className="form-control"
          ref={otp}
          maxLength="4"
          minLength="4"
        />
      </div>
      <div className="pb-4">
        <button
          type="button"
          className="btn btn-primary "
          onClick={verifyPinCode}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Pin;
