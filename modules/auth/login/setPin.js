import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { loggingTags } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent } from "../../../services/http-service";
import { AuthService } from "../auth.service";

export default function SetPin() {
  const [pin, setPin] = useState("");
  const [cpin, setCPin] = useState("");
  const { checkUserAuthentication, setLoader } = useContext(MainContext);
  const { initialState } = useContext(MainContext);
  const router = useRouter();

  async function setUserPin() {
    if (!pin) {
      return swal({
        title: "Please enter pin!",
        timer: 2500,
        icon: "error",
      });
    }
    if (pin != cpin) {
      return swal({
        title: "Pin does not match",
        timer: 3000,
        icon: "error",
      });
    } else {
      setLoader(true);
    }

    const resp = await AuthService.setUserPin(pin);
    if (resp.responseCode == 1) {
      // logging start
      let body = {
        event: loggingTags.login,
        action: "set_pin",
      };
      actionsRequestContent(body);
      // logging end
      Cookie.setCookies("isAuth", 1);
      swal({
        title: resp.message,
        timer: 2000,
        icon: "success",
      });

      let obj = {
        Language: "en",
        Platform: "web",
        Version: "V1",
        MobileNo: initialState.User.MobileNo,
        OperatorId: initialState.User.OperatorId,
        UserPassword: initialState.User.Password,
      };
      let response = await AuthService.signInOrSignUpMobileOperator(
        obj,
        "",
        false
      );
      if (response && response.data && response.data.UserId) {
        swal({
          title: "Signin successfully!",
          text: "Redirecting you now..",
          timer: 2000,
          icon: "success",
        });
        checkUserAuthentication();
        router.push("/");
        setLoader(false);
      } else {
        setLoader(false);
        swal({
          title: response.message,
          icon: "error",
          timer: 3000,
        });
      }
    } else {
      swal({
        title: "something went wrong!",
        timer: 2000,
        icon: "error",
      });
      Cookie.setCookies("isAuth", 0);
      setLoader(false);
    }

    setLoader(false);
  }

  function onChangePin(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setPin(mobileNum.trim());
    }
  }

  function onChangeCPin(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      setCPin(mobileNum.trim());
    }
  }

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
          value={0 + initialState?.User?.MobileNo}
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
          placeholder="4 digit PIN"
          name="pin"
          onChange={onChangePin}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "0.3rem" }}>
        <label style={{ color: "#fff", fontSize: "14px" }}>
          Confirm your new pin
        </label>
        <input
          type="password"
          className="text-center form-control numeric"
          minLength="4"
          maxLength="4"
          placeholder="4 digit PIN"
          name="pin"
          onChange={onChangeCPin}
        />
      </div>
      <div className="form-group text-center mb-0">
        <button
          className="btn btn-block btn-success req_pin_cde_btn req_pin_cde_btn2"
          onClick={setUserPin}
        >
          Set Your Pin
        </button>
      </div>
    </div>
  );
}
