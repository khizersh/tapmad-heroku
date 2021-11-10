import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";

function SetUserPin({ login, ip }) {
  const [pin, setPin] = useState("");
  const [cpin, setCPin] = useState("");
  const [username, setUsername] = useState("");
  const [showUsername, setShowUsername] = useState(false);
  const { setLoader } = useContext(MainContext);
  const { initialState } = useContext(MainContext);
  const { SignUpState } = useContext(SignUpContext);

  useEffect(() => {
    if (SignUpState?.UserDetails?.MobileNo) {
      let body = { Language: "en", MobileNo: SignUpState.UserDetails.MobileNo };
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
        SignUpState.UserDetails.MobileNo
      );

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
    <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
      <div className="custom-bg">
        <h3 className="component-title mb-5">Set Your New PIN</h3>
        {showUsername ? (
          <div className="form-group text-grey">
            <label style={{ fontSize: "14px" }}>Enter your Full Name</label>
            <input
              type="text"
              className="form-control border-curve"
              placeholder="Enter Full Name"
              name="pin"
              maxLength="20"
              onChange={onChangeUsername}
            />
          </div>
        ) : null}

        <div className="form-group text-grey">
          <label style={{ fontSize: "14px" }}>Set your 4 digit PIN</label>
          <input
            type="password"
            className="form-control numeric border-curve"
            minLength="4"
            maxLength="4"
            value={pin}
            placeholder="Set PIN Code"
            name="pin"
            onChange={onChangePin}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control numeric border-curve"
            minLength="4"
            maxLength="4"
            placeholder="Confirm PIN Code"
            name="pin"
            value={cpin}
            onChange={onChangeCPin}
          />
        </div>

        <div className="form-group text-center mb-0">
          <button
            className="btn btn-block bg-green pymnt_pge_sbscrbe_btn"
            onClick={setUserPin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
const SetPin = withLogin(SetUserPin);
export default SetPin;
