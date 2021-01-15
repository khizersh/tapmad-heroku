import React from "react";

export default function ForgetPin() {
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
          id="verify_otp_input"
          maxLength="4"
          minLength="4"
          className="text-center form-control"
          placeholder="Enter your OTP"
        />
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <button
          type="button"
          id="submit_msisdn_verify"
          className="btn btn-block btn-success req_pin_cde_btn"
        >
          Verify OTP Code
        </button>
      </div>
    </div>
  );
}
