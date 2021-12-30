import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_USER_DETAILS } from "../../../contexts/auth/SignUpReducer";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";

function SetUserPin({ login, ip }) {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [cpin, setCPin] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState("");
  const [showUsername, setShowUsername] = useState(false);
  const { setLoader } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);

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
    setIsMobile(SignUpState.isMobile);
  }, [SignUpState.isMobile]);

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
      await AuthService.clearUserToken(SignUpState.UserDetails.MobileNo);
      // Cookie.setCookies("UserPin", pin);
      dispatch({ type: UPDATE_USER_DETAILS, data: { UserPin: pin } });
      // Cookie.setCookies("isAuth", 1);
      swal({
        title: resp.message,
        timer: 2000,
        icon: "success",
      }).then((result) => {
        window.location.replace(
          `sign-in?number=${SignUpState.UserDetails.MobileNo}`
        );
      });
      // await login(ip);
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
    <>
      <style jsx>
        {`
          @media (min-width: 992px) {
            .margin-desktop {
              padding: 0 60px !important;
            }
          }
          @media (max-width: 991px) {
            .margin-desktop {
              padding: 0 !important;
            }
          }
        `}
      </style>
      <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
        <div className="custom-bg">
          <div className={`${isMobile ? "" : "margin-desktop"} `}>
            <h3 className="component-title mb-3">Set Your New PIN</h3>
            {showUsername ? (
              <div className="form-group text-grey">
                <label style={{ fontSize: "14px" }}>Enter your Full Name</label>
                <input
                  type="text"
                  className="form-control border-curve"
                  placeholder="Please enter full name"
                  name="pin"
                  maxLength="20"
                  onChange={onChangeUsername}
                />
              </div>
            ) : null}
            <label style={{ fontSize: "14px" }}>Enter your new PIN</label>
            <div className="form-group text-grey">
              <input
                type="password"
                className="form-control numeric border-curve"
                minLength="4"
                maxLength="4"
                value={pin}
                placeholder="Please set passcode as a 4 digit PIN"
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
                placeholder="Confirm your PIN"
                name="pin"
                value={cpin}
                onChange={onChangeCPin}
              />
            </div>
            <div className={`form-group text-center mb-0`}>
              <button
                className={`btn bg-green pymnt_pge_sbscrbe_btn ${
                  isMobile ? "" : "width-35"
                }`}
                onClick={setUserPin}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const SetPin = withLogin(SetUserPin);
export default SetPin;
