import React from "react";
import "./auth.module.css";
export default function Login() {
  return (
    <div className="bg_dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 ">
            <div className="tm_login_pg">
              <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
                <img
                  src="https://www.tapmad.com/images/tm-logo.png"
                  width="200"
                />
                <h4>Enter your Mobile Number</h4>
                <p>Please Enter your Mobile Number to login</p>
                <div className="input-group">
                  <select>
                    <option>Select</option>
                    <option>Jazz</option>
                  </select>

                  <input type="hidden" id="CountryMobileCode" value="+92" />

                  <span>
                    <label
                      className="form-control"
                      style={{ fontSize: "14px" }}
                    >
                      +92
                    </label>
                  </span>

                  <input
                    type="text"
                    id="input_msisdn12"
                    maxLength="10"
                    minLength="10"
                    className="form-control"
                    placeholder="3xxxxxxxxxx"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    id="submit_msisdn_t"
                    className="btn btn-block btn-success req_pin_cde_btn"
                  >
                    Request PIN Code
                  </button>
                  <br />
                  <a className=" mt-2 text-muted">Back</a>
                  <span className="mt-2 mr-2 text-muted">
                    | &nbsp;&nbsp;Not Registered?
                  </span>
                  <a className="text-light" href="signup.html">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
