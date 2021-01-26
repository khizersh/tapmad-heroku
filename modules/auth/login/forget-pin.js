import React, { useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { post } from "../../../services/http-service";

export default function ForgetPin(props) {
  const [userOtp, setUserOtp] = useState("");
  const { initialState } = React.useContext(MainContext);

  let userDetails = props;

  React.useEffect(async () => {
    var resp = await post("https://api.tapmad.com/api/sendOTP/V1/en/web", {
      MobileNo: initialState.User.MobileNo,
      OperatorId: initialState.User.OperatorId,
    });
    console.log(resp.data);
  }, []);

  async function verifyOTP() {
    var resp = await post(
      "https://api.tapmad.com/api/verifyOTP/V1/en/android",
      { MobileNo: 0 + initialState.User.MobileNo, otpCode: userOtp }
    );
    console.log(resp.data);
    if (resp.data.responseCode == 1) {
      userDetails.updateView(true);
    }
  }
  return (
    <div className="login_slct_oprtr login_slct_oprtr2 login_slct_oprtr_active">
      <img
        src="https://d1s7wg2ne64q87.cloudfront.net/web/images/tm-logo.png"
        width="200"
      />
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
