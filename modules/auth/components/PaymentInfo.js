import React from "react";

const PaymentInfo = ({ type }) => {
  if (type == "simCard") {
  }
  return (
    <div>
      <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            <div className="input-group ng-scope">
              <div className="">
                <div className="">
                  {" "}
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="http://lorempixel.com/75/50/abstract/" />
                      0123 4567 8912 3456
                      <span class="glyphicon glyphicon-chevron-down"></span>
                    </button>

                    <ul class="dropdown-menu">
                      <li class="dropdown-header">Member name (you)</li>
                      <li>
                        <a href="#" title="Select this card">
                          <img src="http://lorempixel.com/75/50/abstract/" />
                          0123 4567 8912 3456
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Select this card">
                          <img src="http://lorempixel.com/75/50/abstract/" />
                          0123 4567 8912 3456
                        </a>
                      </li>
                      <li class="dropdown-header">Member name</li>
                      <li>
                        <a href="#" title="Select this card">
                          <img src="http://lorempixel.com/75/50/abstract/" />
                          0123 4567 8912 3456
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <ul>
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
                </ul> */}
                <input
                  type="hidden"
                  id="signup_operator"
                  className="option"
                  value=""
                  autoComplete="off"
                />
              </div>

              <span>
                <label className="form-control cntry_cde">+92</label>
              </span>

              <input
                type="text"
                id="input_msisdn12"
                required=""
                minLength="10"
                className="form-control"
                placeholder="3xxxxxxxxx"
              />
            </div>
          </div>
        </div>
        <div className="form-group text-center pt-2 mb-0">
          <button className="btn pymnt_pge_sbscrbe_btn">Subscribe</button>
          <p style={{ color: "#fff", padding: "10px" }}>
            Subscribe button press karne pe ek din Free trial hasil karain. Apki
            subscription charges ek din ke baad lago honge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
