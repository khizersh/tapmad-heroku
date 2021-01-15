import React from "react";

export default function SetPin() {
  return (
    <div className="login_slct_oprtr login_set_pin_card login_slct_oprtr_active">
      <img
        src="//d1s7wg2ne64q87.cloudfront.net/web/images/tm-logo.png"
        width="200"
      />
      <h5>Please set your 4 digit PIN</h5>
      <br />

      <div className="form-group" style={{ marginBottom: "0.3rem" }}>
        <input
          type="text"
          className="text-center form-control numeric"
          readonly=""
          placeholder="Enter mobile number"
        />
      </div>
      <div className="form-group" style={{ marginBottom: "0.3rem" }}>
        <label style={{ color: "#fff", fontSize: "14px" }}>
          Enter your new pin for login{" "}
        </label>
        <input
          type="password"
          className="text-center form-control numeric"
          minLength="4"
          maxLength="4"
          id="newCardPin1"
          placeholder="4 digit PIN"
          name=""
        />
      </div>
      <div className="form-group" style={{ marginBottom: "0.3rem" }}>
        <label style={{ color: "#fff", fontSize: "14px" }}>
          Confirm your new pin
        </label>
        <input
          type="password"
          className="text-center form-control numeric"
          minlength="4"
          maxlength="4"
          id="newCardPin2"
          placeholder="4 digit PIN"
          name=""
        />
      </div>
      <div className="form-group text-center mb-0">
        <button className="btn btn-block btn-success req_pin_cde_btn req_pin_cde_btn2">
          Set Your Pin
        </button>
      </div>
    </div>
  );
}
