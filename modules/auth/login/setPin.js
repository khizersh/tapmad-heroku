import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { setUserPinCode } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { post } from "../../../services/http-service";

export default function SetPin() {
  const [pin, setPin] = useState("");
  const [cpin, setCPin] = useState("");
  const { checkUserAuthentication, setLoader } = useContext(MainContext);
  const router = useRouter();

  async function setUserPin() {
    if (pin != cpin) {
      return swal({
        title: "Pin does not match",
        timer: 3000,
        icon: "error",
      });
    }
    setLoader(true);
    var resp = await post(setUserPinCode, {
      Version: "V1",
      Language: "en",
      Platform: "Web",
      UserId: Cookie.getCookies("userId"),
      UserPinCode: pin,
    });
    console.log("resp: ", resp);
    if (resp && resp.data) {
      if (resp.data.Response.responseCode == 1) {
        Cookie.setCookies("isAuth", 1);
        swal({
          title: resp.data.Response.message,
          timer: 2000,
          icon: "success",
        });
        setTimeout(() => {
          swal({
            title: "Signin successfully!",
            text: "Redirecting you now..",
            timer: 2000,
            icon: "success",
          });
          checkUserAuthentication();
          setLoader(false);
        }, 2000);
      } else {
        Cookie.setCookies("isAuth", 0);
        setLoader(false);
      }
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
  const { initialState } = useContext(MainContext);
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
