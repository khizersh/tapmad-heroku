import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { useRef } from "react";
import swal from "sweetalert";
import { AuthService } from "../auth.service";
import { Cookie } from "../../../services/cookies";
import { SignUpTag } from "../../../services/gtm";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_SUBSCRIBE_RESPONSE } from "../../../contexts/auth/SignUpReducer";
import withLogin from "../LoginHOC";
import router from "next/router";

const VerifyOTPComponent = ({ newUser, login }) => {
  const { setLoader } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const otp = useRef("");

  async function verifyOTPPinCode() {
    if (SignUpState && SignUpState.UserDetails) {
      if (otp.current.value.length < 4) {
        swal({
          timer: 5000,
          title: "Incorrect OTP",
          icon: "error",
        });
        return 0;
      }
      setLoader(true);
      let body = {
        MobileNo: "0" + SignUpState.UserDetails.MobileNo,
        otpCode: otp.current.value,
      };
      var data;
      if (newUser) {
        try {
          body = {
            CodeOTP: otp.current.value,
            Language: "en",
            MobileNo: SignUpState.UserDetails.MobileNo,
            OperatorId: SignUpState.UserDetails.Operator,
            Platform: "web",
            ProductId: SignUpState.SelectedPrice.ProductId,
            Version: "V1",
          };
          data = await AuthService.paymentProcessTransaction(body);
          SignUpTag(body, data.data);
        } catch (e) {
          swal({
            timer: 3000,
            title: "Something went wrong",
            icon: "error",
          });
        }
      } else {
        body = {
          MobileNo: "0" + SignUpState.UserDetails.MobileNo,
          otpCode: otp.current.value,
        };
        data = await AuthService.verifyOTP(body);
      }
      if (data != null) {
        if (data.responseCode == 0) {
          swal({
            timer: 3000,
            title: data.message,
            icon: "error",
          });
          setLoader(false);
        } else if (data.responseCode == 1) {
          AuthService.clearUserToken(SignUpState.UserDetails?.MobileNo).then(
            (e) => {
              swal({
                timer: 2500,
                title: data.message,
                icon: "success",
              }).then((result) => {
                if (newUser) {
                  Cookie.setCookies("userId", data.data.User.UserId);
                }
                if (SignUpState.LoggedIn == 1) {
                  router.push("/");
                } else {
                  dispatch({
                    type: UPDATE_SUBSCRIBE_RESPONSE,
                    data: { code: 34, newUser: newUser },
                  });
                  setLoader(false);
                }
              });
            }
          );
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
    <div className="text-center desktop-size custom-bg-signup">
      <h3 className="component-title">Enter your OTP</h3>
      <div className="py-3">
        <label className="text-muted center-div">
          Please enter code provided into 4 digit verification code
        </label>
      </div>
      <div className="px-3 pb-4">
        <input
          type="text"
          placeholder="Enter OTP"
          className="form-control border-curve"
          ref={otp}
          maxLength="4"
          minLength="4"
          inputMode="numeric"
        />
      </div>
      <div className="px-3 pb-4">
        <button
          type="button"
          className="btn btn-primary pymnt_pge_sbscrbe_btn"
          onClick={verifyOTPPinCode}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

const VerifyOTP = withLogin(VerifyOTPComponent);
export default VerifyOTP;
