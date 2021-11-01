import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { loggingTags } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent } from "../../../services/http-service";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";

function SetUserPin({ login, ip }) {
  const [pin, setPin] = useState("");
  const [cpin, setCPin] = useState("");
  const [username, setUsername] = useState("");
  const [showUsername, setShowUsername] = useState(false);
  const { setLoader } = useContext(MainContext);
  const { initialState } = useContext(MainContext);

  useEffect(() => {
    if (initialState?.User?.MobileNo) {
      let num = initialState?.User?.MobileNo;
      let body = { Language: "en", MobileNo: num };
      AuthService.GetCardUser(body)
        .then((res) => {
          if (res?.data?.User?.IsProfileNameSet) {
            setShowUsername(false);
          } else {
            setShowUsername(true);
          }
          Cookie.setCookies("userId", res.data.User.UserId);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  async function setUserPin() {
    if (showUsername) {
      if (username.trim().length < 1) {
        return swal({
          timer: 3000,
          title: "Please enter your Full Name!",
          icon: "error",
        });
      }
    }
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
    const resp = await AuthService.setUserPin(pin, username);
    if (resp.responseCode == 1) {
      const clearCache = await AuthService.clearUserToken(
        initialState?.User?.MobileNo
      );

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
      await AuthService.checkUser(initialState.User.MobileNo);
      await login(ip);
    } else if (resp.responseCode == 2) {
      setLoader(false);
      return swal({
        timer: 3000,
        title: resp.message,
        icon: "error",
      });
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

  function onChangeUsername(e) {
    setUsername(e.target.value);
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

      {showUsername ? (
        <div className="form-group" style={{ marginBottom: "0.3rem" }}>
          <label style={{ color: "#fff", fontSize: "14px" }}>
            Please enter your Full Name
          </label>
          <input
            type="text"
            className="text-center form-control numeric"
            placeholder="Enter Full Name"
            name="pin"
            maxLength="20"
            onChange={onChangeUsername}
          />
        </div>
      ) : null}
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
          Enter your new PIN for login{" "}
        </label>
        <input
          type="password"
          className="text-center form-control numeric"
          minLength="4"
          maxLength="4"
          placeholder="Enter your 4 digit Pin Code"
          name="pin"
          onChange={onChangePin}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "0.3rem" }}>
        {/* <label style={{ color: "#fff", fontSize: "14px" }}>
          Confirm your new pin
        </label> */}
        <input
          type="password"
          className="text-center form-control numeric"
          minLength="4"
          maxLength="4"
          placeholder="Re-enter your Pin code"
          name="pin"
          onChange={onChangeCPin}
        />
      </div>

      <div className="form-group text-center mb-0">
        <button
          className="btn btn-block btn-success req_pin_cde_btn req_pin_cde_btn2"
          onClick={setUserPin}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
const SetPin = withLogin(SetUserPin);
export default SetPin;
