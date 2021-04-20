import React, { useContext, useRef } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent } from "../../../services/http-service";
import {
  loggingTags,
  sendOTP,
  verifyUserPinCode,
} from "../../../services/apilinks";
import swal from "sweetalert";
import { Authcontext } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";

const EnterPinToVerifyUser = ({ login }) => {
  const router = useRouter();
  const { checkUserAuthentication, setLoader, initialState } = useContext(
    MainContext
  );
  const { updateResponseCode, authState } = useContext(Authcontext);
  const pinCode = useRef("");

  async function forgetPin() {
    setLoader(true);
    let mobileNo = initialState.User.MobileNo,
      opId = initialState.User.OperatorId;

    const data = await AuthService.forgetPin(mobileNo, opId);

    if (data != null) {
      if (data.responseCode == 1) {
        updateResponseCode(data.responseCode);
      } else {
        swal({
          timer: 3000,
          title: data.message,
          icon: "error",
        });
        setLoader(false);
      }
    } else {
      setLoader(false);
      swal({
        timer: 3000,
        title: "Something Went Wrong",
        icon: "error",
      });
    }
    setLoader(false);
  }

  async function verifyPinCode() {
    if (pinCode.current.value.length == 4) {
      setLoader(true);
      const data = await AuthService.verifyPinCode(pinCode.current.value);
      if (data != null) {
        if (data.responseCode == 1) {
          // logging start
          if (authState && authState.selectedPackageId) {
            let body = {
              event: loggingTags.signup,
              amount: authState.selectedPackageAmount,
              operatorName: authState.selectedPackageName,
              mobileNumber: initialState.User.MobileNo,
            };
            actionsRequestContent(body);
          }
          login();
        } else {
          setLoader(false);
          swal({
            title: data.message,
            icon: "error",
          });
        }
      } else {
        setLoader(false);
        swal({
          timer: 3000,
          title: "Something Went Wrong",
          icon: "error",
        });
      }
    } else {
      swal({
        timer: 5000,
        title: "Incorrect PIN",
        icon: "error",
      });
    }
  }
  return (
    <>
      <div>
        <div className="py-3">
          <div className="text-center">
            <small className="text-dark">Enter your four digit PIN</small>
          </div>
        </div>
        <div className="p-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your PIN"
            maxLength={4}
            minLength={4}
            ref={pinCode}
          />
        </div>
        <div className="text-center py-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={verifyPinCode}
          >
            Verify PIN
          </button>
        </div>
        <div className="text-center pb-3">
          <span onClick={forgetPin} className="btn text-white">
            Forgot PIN?
          </span>
        </div>
      </div>
    </>
  );
};

const EnterPinToVerify = withLogin(EnterPinToVerifyUser);
export default EnterPinToVerify;
