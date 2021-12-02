import React, { useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { SET_VIEW_TO_SHOW } from "../../../contexts/auth/AuthReducers";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { MainContext } from "../../../contexts/MainContext";
import { sendOTP } from "../../../services/apilinks";
import { post } from "../../../services/http-service";
import { AuthService } from "../auth.service";

export default function ForgetPin({ updateView }) {
  const [userOtp, setUserOtp] = useState("");
  const { setLoader } = React.useContext(MainContext);
  const { SignUpState } = React.useContext(SignUpContext);
  const { dispatch } = React.useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(async () => {
    let otpBody = {
      MobileNo: SignUpState.UserDetails.MobileNo,
      OperatorId: SignUpState.UserDetails.Operator,
    };
    var resp = await post(sendOTP, otpBody);
  }, []);

  React.useEffect(() => {
    setIsMobile(SignUpState.isMobile);
  }, [SignUpState.isMobile]);

  async function verifyOTP() {
    setLoader(true);
    let body = {
      MobileNo: 0 + SignUpState.UserDetails.MobileNo,
      otpCode: userOtp,
    };
    const data = await AuthService.verifyOTP(body);

    if (data != null) {
      if (data.responseCode == 1) {
        AuthService.clearUserToken(body.MobileNo.substring(1)).then((e) => {
          dispatch({ type: SET_VIEW_TO_SHOW, data: "set-pin" });
          swal({
            title: "OTP Verified",
            timer: 2500,
            icon: "success",
          });
        });
      } else {
        swal({
          title: data.message,
          timer: 3000,
          icon: "error",
        });
      }
    } else {
      swal({
        title: "Something went wrong!",
        timer: 3000,
        icon: "error",
      });
    }
    setLoader(false);
  }
  return (
    <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
      {/* <img src={tapmadLogo} width="200" alt="Tapmad logo" /> */}
      <div className="custom-bg">
        <div className={`${isMobile ? "" : "margin-desktop"} `}>
          <div className="mb-3">
            <h3 className="component-title">Enter Your OTP</h3>
            <p className="text-center text-grey center-div">
              Please enter the code provided into 4 digit verfiication code
            </p>
          </div>
          <div className="form-group">
            <input
              type="text"
              maxLength="4"
              minLength="4"
              className="form-control border-curve"
              placeholder="Enter OTP"
              onChange={(e) => setUserOtp(e.target.value)}
            />
          </div>
          <div className={`form-group text-center`} style={{ marginBottom: "10px" }}>
            <button
              type="button"
              className={`btn bg-green pymnt_pge_sbscrbe_btn ${
                isMobile ? "" : "width-35"
              }`}
              onClick={async () => await verifyOTP()}
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
