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
import { checkForBoolean } from "../../../services/utils";

const VerifyOTPComponent = ({ newUser, login }) => {
  console.log("newUser : ", newUser);
  const { setLoader } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const otp = useRef("");

  async function verifyOTPPinCode() {
    if (SignUpState && SignUpState.UserDetails) {
      if (otp.current.value?.trim()?.length < 4) {
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
            MobileNo:
              SignUpState.UserDetails.MobileNo || Cookie.getCookies("user_mob"),
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
        console.log("data in verofy otp : ", data);
        if (data.responseCode == 0) {
          swal({
            timer: 3000,
            title: data.message,
            icon: "error",
          });
          setLoader(false);
        } else if (data.responseCode == 1) {
          if (newUser) {
            Cookie.setCookies("userId", data.data.User.UserId);
          }
          if (SignUpState.LoggedIn && SignUpState.LoggedIn == 1) {
            router.push("/");
          } else if (checkForBoolean(data.data?.User?.IsPinSet)) {
            AuthService.clearUserToken(SignUpState.UserDetails?.MobileNo).then(
              (e) => {
                swal({
                  timer: 2500,
                  title: data.message,
                  icon: "success",
                }).then(async (result) => {
                  let loginResp = await login("", false);
                  if (loginResp?.code && loginResp.code != 1) {
                    router.push(loginResp.view);
                  }
                  setLoader(false);
                });
              }
            );
          } else {
            dispatch({
              type: UPDATE_SUBSCRIBE_RESPONSE,
              data: { code: 34, newUser: newUser },
            });
            setLoader(false);
          }
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
      <h3 className="component-title mb-4 text-grey">Enter Your OTP</h3>
      {/* <div className="py-3">
        <label className="text-muted center-div">
          Please enter code provided into 4 digit verification code
        </label>
      </div> */}
      <style jsx>
        {`
          @media (min-width: 992px) {
            .form-group {
              margin: 1rem 8rem;
            }
          }
        `}
      </style>
      <div className="form-group pb-2">
        <input
          type="text"
          placeholder="Enter Your OTP"
          className="form-control border-curve "
          ref={otp}
          maxLength="4"
          minLength="4"
          inputMode="numeric"
        />
      </div>
      <div className="px-3 ">
        <button
          type="button"
          className="btn btn-primary pymnt_pge_sbscrbe_btn font-16"
          style={{ width: "36%" }}
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
