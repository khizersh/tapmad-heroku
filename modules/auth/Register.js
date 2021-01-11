import React from "react";

export default function Register() {
  return (
    <div>
      <div className="mt-0 mt-sm-2">
        <div className="container-fluid p-0 p-sm-2 p-md-3 p-lg-3">
          <div className="">
            <div className="col-12 offset-0 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-4 p-0">
              <div className="pymnt_pge_bx">
                <a
                  id="sign-up-back-btn"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "10px",
                    color: "#fff",
                  }}
                  className="mt-2 text-light"
                >
                  <i className="fa fa-arrow-left"></i> Back
                </a>
                <a
                  id="sign-up-screen-btn"
                  style={{
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: "10px",
                    color: "#fff",
                  }}
                  className="mt-2 text-light"
                >
                  <i className="fa fa-arrow-left"></i> Back
                </a>

                <img
                  className="img-fluid mb-0"
                  src="https://d34080pnh6e62j.cloudfront.net/images/SignUpNewImage.jpg"
                />
                <button
                  type="button"
                  className="btn pull-right"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "13px",
                    border: "none",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "#ffffff",
                  }}
                >
                  Login
                </button>
                <ul className="list-group-horizontal list-group pymnt_pge_pr_list p-0">
                  <li className="list-group-item w-50 p-1 text-center list-group-item-action border-0 text-muted pr_active">
                    <span className="font-weight-bold"> 25</span>
                    Rs + Tax Per Week
                  </li>

                  <li className="list-group-item w-50 p-1 text-center list-group-item-action border-0 text-muted">
                    <span className="font-weight-bold"> 100</span>
                    Rs + Tax Per Month
                  </li>

                  <li
                    style={{ display: "none", width: "100% !important" }}
                    className="list-group-item w-50 p-1 text-center list-group-item-action border-0 text-muted pr_active"
                  >
                    <span className="font-weight-bold"> 5</span>
                    Rs + Tax Per Month
                  </li>

                  <li
                    style={{ display: "none", width: "100% !important" }}
                    className="list-group-item w-50 p-1 text-center list-group-item-action border-0 text-muted pr_active"
                  >
                    <span className="font-weight-bold"> 100</span>
                    Rs + Tax Per Month
                  </li>
                </ul>

                <div className="row">
                  <div className="col-12 col-sm-12 pt-3">
                    <ul className="list-unstyled list-group list-group-horizontal p-3 pymnt_pge_pkgs_list">
                      <li className="payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3 pymnt_pge_pkgs_active ">
                        <img
                          src="https://images.tapmad.com/images/Payments/mobile-icon128.png"
                          className="img-fluid mb-2"
                          style={{ minWidth: "50px", height: "60px" }}
                        />
                        <i className="text-center text-muted d-block">
                          Sim Card
                        </i>
                      </li>

                      <li className="payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3">
                        <img
                          src="https://images.tapmad.com/images/Payments/wallet-icon128.png"
                          className="img-fluid mb-2"
                          style={{ minWidth: "50px", height: "60px" }}
                        />
                        <i className="text-center text-muted d-block">
                          Easypaisa
                        </i>
                      </li>

                      <li className="payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3">
                        <img
                          src="https://images.tapmad.com/images/Payments/wallet-icon128.png"
                          className="img-fluid mb-2"
                          style={{ minWidth: "50px", height: "60px" }}
                        />
                        <i className="text-center text-muted d-block">
                          JazzCash
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
                  <div className="form-group mb-0">
                    <div className="">
                      <div className="input-group ng-scope">
                        <div className="signup-dropdown form-control">
                          <div className="textfirst">
                            Select
                            <img
                              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                              width="10"
                              height="10"
                              className="down"
                            />
                          </div>
                          <ul>
                            <li style={{ display: "none" }}>
                              <img
                                src="https://images.tapmad.com/images/mobileOperator/jazz-logo.jpg"
                                alt="Jazz/Warid"
                                width="20"
                                height="20"
                              />
                              <span className="ng-binding">Jazz/Warid</span>
                            </li>
                            <li
                              className="input-option ng-scope"
                              ng-repeat="data in simcard.MobileNetworks"
                              data-value="100002"
                              style={{ display: "none" }}
                            >
                              <img
                                src="https://images.tapmad.com/images/mobileOperator/telenor-logo.jpg"
                                alt="Telenor"
                                width="20"
                                height="20"
                              />
                              <span className="ng-binding">Telenor</span>
                            </li>
                            <li
                              className="input-option ng-scope"
                              ng-repeat="data in simcard.MobileNetworks"
                              data-value="100003"
                              style={{ display: "none" }}
                            >
                              <img
                                src="https://images.tapmad.com/images/mobileOperator/zong-logo.jpg"
                                alt="Zong"
                                width="20"
                                height="20"
                              />
                              <span className="ng-binding">Zong</span>
                            </li>
                            <li
                              className="input-option ng-scope"
                              ng-repeat="data in simcard.MobileNetworks"
                              data-value="100005"
                              style={{ display: "none" }}
                            >
                              <img
                                src="https://images.tapmad.com/images/mobileOperator/ufone-logo.jpg"
                                alt="Ufone"
                                width="20"
                                height="20"
                              />
                              <span className="ng-binding">Ufone</span>
                            </li>
                          </ul>
                          <input
                            type="hidden"
                            id="signup_operator"
                            className="option"
                            value=""
                            autocomplete="off"
                          />
                        </div>

                        <span>
                          <label className="form-control cntry_cde">+92</label>
                        </span>

                        <input
                          type="text"
                          id="input_msisdn12"
                          required=""
                          minlength="10"
                          className="form-control"
                          placeholder="3xxxxxxxxx"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-center pt-2 mb-0">
                    <button className="btn pymnt_pge_sbscrbe_btn">
                      Subscribe
                    </button>
                    <p style={{ color: "#fff", padding: "10px" }}>
                      Subscribe button press karne pe ek din Free trial hasil
                      karain. Apki subscription charges ek din ke baad lago
                      honge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
