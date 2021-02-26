import React, { useContext, useEffect } from "react";
import { post } from "../../../services/http-service";
import { verifyOtp } from "../../../services/apilinks";
import { MainContext } from "../../../contexts/MainContext";
import { Authcontext } from "../../../contexts/AuthContext";
import { useRef } from "react";
import swal from "sweetalert";

const Pin = () => {
  const { initialState, setLoader } = useContext(MainContext);
  const { authState, updateResponseCode } = useContext(Authcontext);
  const otp = useRef("");

  async function verifyOTPPinCode() {
    setLoader(true);
    if (initialState && initialState.User) {
      let body = {
        MobileNo: "0" + initialState.User.MobileNo,
        otpCode: otp.current.value,
      };

      var resp = await post({ verifyOtp }, body);

      if (resp.data) {
        let responseCode = "",
          message = "";

        if (
          resp.data.responseCode != undefined ||
          resp.data.responseCode != null
        ) {
          responseCode = resp.data.responseCode;
          message = resp.data.message;
        }
        if (responseCode == 0) {
          swal({
            timer: 3000,
            title: message,
            icon: "error",
          });
        } else if (responseCode == 1) {
          swal({
            timer: 3000,
            title: message,
            text: "Enter new PIN code",
            icon: "success",
          }).then((result) => {
            updateResponseCode(34);
            setLoader(false);
          });
        } else {
          swal({
            timer: 3000,
            title: message,
            icon: "error",
          });
        }
      }
    }

    setLoader(false);
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
          inputMode="numeric"
        />
      </div>
      <div className="pb-4">
        <button
          type="button"
          className="btn btn-primary "
          onClick={verifyOTPPinCode}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Pin;
