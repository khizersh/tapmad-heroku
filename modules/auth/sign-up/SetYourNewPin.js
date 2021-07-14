import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { AuthService } from "../auth.service";
import { Authcontext } from "../../../contexts/AuthContext";
import withLogin from "../LoginHOC";

function SetYourNewPinSignUp({ login, ip }) {
  const router = useRouter();
  const { initialState, checkUserAuthentication, setLoader } =
    useContext(MainContext);
  const { authState } = useContext(Authcontext);
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [username, setUsername] = useState("");
  const [showUsername, setShowUsername] = useState(false);

  const onClick = async () => {
    if(showUsername){
      if(username.trim().length < 1){
        return swal({
          timer: 3000,
          title: "Please enter your Full Name!",
          icon: "error",
        });
      }
    }
    if (!pin.length) {
      return swal({
        timer: 3000,
        title: "Invalid pin code!",
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
    let obj = {
      Language: "en",
      Platform: "web",
      Version: "V1",
      MobileNo: initialState.User.MobileNo,
      OperatorId: initialState.User.OperatorId,
      UserPassword: initialState.User.Password,
    };
    setLoader(true);

    const status = await AuthService.GetCardUser({
      MobileNo: initialState.User.MobileNo,
      Language: "en",
    });

    if (status && status.data.User) {
      obj.UserPassword = status.data.User.UserPassword;
      Cookie.setCookies("userId", status.data.User.UserId);
      Cookie.setCookies("content-token", status.data.User.UserPassword);
    }

    const response = await AuthService.setNewPin(pin , username);

    if (response != null) {
      if (response.responseCode == 0) {
        swal({
          timer: 3000,
          title: response.message,
          icon: "success",
        });
      } else if (response.responseCode == 1) {
        await AuthService.clearUserToken(initialState.User.MobileNo);

        await login(ip);
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
  }, []);

  return (
    <div>
      {showUsername ? (
        <>
          <p className="text-center mt-4">Please enter your Full Name</p>
          <div className="px-3 pb-2">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-control"
              maxLength="20"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </>
      ) : null}

      <p className={`text-center ${showUsername ? "mt-2" : "mt-4"}`}>Please set your 4 digit PIN</p>
      <div className="px-3 pb-2">
        <input
          type="text"
          placeholder="Mobile number"
          className="form-control"
          disabled={true}
          value={initialState.User.MobileNo}
        />
      </div>
      <div className="px-3 pb-2">
        <input
          type="text"
          className="form-control"
          placeholder={"Set PIN code"}
          minLength={4}
          maxLength={4}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div className="px-3 pb-2">
        <input
          type="text"
          className="form-control"
          placeholder={"Confirm PIN code"}
          minLength={4}
          maxLength={4}
          onChange={(e) => setConfirmPin(e.target.value)}
        />
      </div>
      <div className="text-center ">
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
