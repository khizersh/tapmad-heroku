import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { AuthService } from "../auth.service";
import { Authcontext } from "../../../contexts/AuthContext";
import withLogin from "../LoginHOC";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_USER_DETAILS } from "../../../contexts/auth/SignUpReducer";

function SetYourNewPinSignUp({ login, ip }) {
  const { initialState, checkUserAuthentication, setLoader } =
    useContext(MainContext);
  const { authState } = useContext(Authcontext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [username, setUsername] = useState("");
  const [showUsername, setShowUsername] = useState(false);

  const onClick = async () => {
    if (showUsername) {
      if (username.trim().length < 1) {
        return swal({
          timer: 3000,
          title: "Please enter your Full Name!",
          icon: "error",
        });
      }
    }
    if (pin.length != 4) {
      return swal({
        timer: 3000,
        title: "Set 4 digit PIN!",
        icon: "error",
      });
    }
    if (pin != confirmPin) {
      return swal({
        timer: 3000,
        title: "PIN code does not match!",
        icon: "error",
      });
    }
    var obj = {
      Language: "en",
      Platform: "web",
      Version: "V1",
      MobileNo: SignUpState.UserDetails.MobileNo,
      OperatorId: SignUpState.UserDetails.Operator,
      UserPassword: "",
    };
    setLoader(true);

    const userStatus = await AuthService.GetCardUser({
      MobileNo: SignUpState.UserDetails.MobileNo,
      Language: "en",
    });

    if (userStatus && userStatus.data.User) {
      obj.UserPassword = userStatus.data.User.UserPassword;
      Cookie.setCookies("userId", userStatus.data.User.UserId);
      Cookie.setCookies("content-token", userStatus.data.User.UserPassword);
    }

    const response = await AuthService.setNewPin(pin, username);

    Cookie.setCookies("UserPin", pin);
    dispatch({
      type: UPDATE_USER_DETAILS,
      data: { UserPin: pin },
    });
    if (response != null) {
      if (response.responseCode == 0) {
        swal({
          timer: 3000,
          title: response.message,
          icon: "success",
        });
      } else if (response.responseCode == 1) {
        await AuthService.clearUserToken(SignUpState.UserDetails.MobileNo);
        await login(ip);
      } else {
        setLoader(false);
        return swal({
          timer: 3000,
          title: response.message,
          icon: "error",
        });
      }
    } else {
      return swal({
        timer: 2000,
        title: "Something went wrong",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (initialState.User.MobileNo) {
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
  }, [initialState.User.MobileNo]);

  return (
    <div className="desktop-size">
      <h3 className="pb-3 component-title">Set Your New PIN</h3>
      {showUsername ? (
        <>
          <p className="mt-4 px-3">Enter your full name</p>
          <div className="px-3 pb-3">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-control border-curve"
              maxLength="20"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </>
      ) : null}

      <p className={`px-3 ${showUsername ? "mt-3" : "mt-4"}`}>
        Set your 4 digit PIN
      </p>
      {/* <div className="px-3 pb-2">
        <input
          type="text"
          placeholder="Mobile number"
          className="form-control"
          disabled={true}
          value={initialState.User.MobileNo}
        />
      </div> */}
      <div className="px-3 pb-3">
        <input
          type="text"
          className="form-control border-curve"
          placeholder={"Set PIN code"}
          minLength={4}
          maxLength={4}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div className="px-3 pb-3">
        <input
          type="text"
          className="form-control border-curve"
          placeholder={"Confirm PIN code"}
          minLength={4}
          maxLength={4}
          onChange={(e) => setConfirmPin(e.target.value)}
        />
      </div>
      <div className="text-center px-3">
        <button
          className="btn pymnt_pge_sbscrbe_btn bg-green mb-4"
          onClick={onClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}
const SetYourNewPin = withLogin(SetYourNewPinSignUp);
export default SetYourNewPin;
