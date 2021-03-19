import React, { useContext, useEffect } from "react";
import { actionsRequestContent } from "../../../services/http-service";
import { loggingTags, verifyOtp } from "../../../services/apilinks";
import { MainContext } from "../../../contexts/MainContext";
import { Authcontext } from "../../../contexts/AuthContext";
import { useRef } from "react";
import swal from "sweetalert";
import { AuthService } from "../auth.service";

const Pin = () => {
  const { initialState, setLoader, getCountryCode } = useContext(MainContext);
  const { authState, updateResponseCode } = useContext(Authcontext);
  const otp = useRef("");

  async function verifyOTPPinCode() {
    setLoader(true);
    if (initialState && initialState.User) {
      let body = {
        MobileNo: "0" + initialState.User.MobileNo,
        otpCode: otp.current.value,
      };
      const data = await AuthService.verifyOTP(body);

      if (data != null) {
        if (data.responseCode == 0) {
          swal({
            timer: 3000,
            title: data.message,
            icon: "error",
          });
        } else if (data.responseCode == 1) {
          swal({
            timer: 3000,
            title: data.message,
            text: "Enter new PIN code",
            icon: "success",
          }).then((result) => {
            updateResponseCode(34);
            setLoader(false);
          });
        } else {
          swal({
            timer: 3000,
            title: data.message,
            icon: "error",
          });
        }
      } else {
        swal({
          timer: 3000,
          title: "Something went wrong",
          icon: "error",
        });
      }
    }

    setLoader(false);
  }
  return (
    <div className="text-center">
      <div className="py-3">
        <label className="text-muted">Please verify your OTP Code</label>
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
