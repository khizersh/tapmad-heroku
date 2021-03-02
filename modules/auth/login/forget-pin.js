import React, { useState } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { sendOTP, verifyOtp } from "../../../services/apilinks";
import { post } from "../../../services/http-service";
import { tapmadLogo } from "../../../services/imagesLink";
import { AuthService } from "../auth.service";
// updateView
export default function ForgetPin({ updateView }) {
  const [userOtp, setUserOtp] = useState("");
  const { initialState, setLoader } = React.useContext(MainContext);

  React.useEffect(async () => {
    var resp = await post(sendOTP, {
      MobileNo: initialState.User.MobileNo,
      OperatorId: initialState.User.OperatorId,
    });
  }, []);

  async function verifyOTP() {
    setLoader(true);

    let body = {
      MobileNo: 0 + initialState.User.MobileNo,
      otpCode: userOtp,
    };
    const data = await AuthService.verifyOTP(body);
    // var resp = await post(verifyOtp, {
    //   MobileNo: 0 + initialState.User.MobileNo,
    //   otpCode: userOtp,
    // });

    if (data != null) {
      if (data.responseCode == 1) {
        updateView("set-pin");
        swal({
          title: "Verified",
          timer: 3000,
          icon: "success",
        });
      } else {
        swal({
          title: data.message,
          timer: 3000,
          icon: "error",
        });
      }
    }
    swal({
      title: "Something went wrong!",
      timer: 3000,
      icon: "error",
    });
    setLoader(false);
  }
  return (
    <div className="login_slct_oprtr login_slct_oprtr2 login_slct_oprtr_active">
      <img src={tapmadLogo} width="200" />
      <h4>Enter your code</h4>
      <p>We have sent a 4-digits code</p>
      <div className="form-group">
        <input
          type="text"
          maxLength="4"
          minLength="4"
          className="text-center form-control"
          placeholder="Enter your OTP"
          onChange={(e) => setUserOtp(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <button
          type="button"
          className="btn btn-block btn-success req_pin_cde_btn"
          onClick={async () => await verifyOTP()}
        >
          Verify OTP Code
        </button>
      </div>
    </div>
  );
}
