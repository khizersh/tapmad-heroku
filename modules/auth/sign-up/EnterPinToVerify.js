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
import { SignUpContext } from "../../../contexts/auth/SignUpContext";

const EnterPinToVerifyUser = ({ login }) => {
  const router = useRouter();
  const { checkUserAuthentication, setLoader, initialState } = useContext(
    MainContext
  );
  const { updateResponseCode } = useContext(Authcontext);
  const { SignUpState } = useContext(SignUpContext);
  const pinCode = useRef("");


  async function forgetPin() {
    setLoader(true);
    let mobileNo = SignUpState.UserDetails?.MobileNo,
      opId = SignUpState.UserDetails?.Operator;
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
          var loginResp = login();
          loginResp.then((e) => {
            if (e != null && e.responseCode == 401) {
              console.log(e);
              forgetPin()
                .then((re) => { })
                .catch((e) => console.log(e));
            }
          });
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
            className="form-control border-curve"
            placeholder="Enter PIN"
            maxLength={4}
            minLength={4}
            ref={pinCode}
          />
        </div>
        <div className="text-center py-2">
          <button
            type="button"
            className="btn btn-primary pymnt_pge_sbscrbe_btn"
            style={{width:'50%'}}
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
