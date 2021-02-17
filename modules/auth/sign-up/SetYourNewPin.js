import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { post } from "../../../services/http-service";

export default function SetYourNewPin() {
  const { initialState, checkUserAuthentication, setLoader } = useContext(
    MainContext
  );
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const onClick = async () => {
    setLoader(true);
    const userId = Cookie.getCookies("userId");
    if (pin != confirmPin) {
      return swal({
        timer: 3000,
        title: "PIN code does not match!",
        icon: "error",
      });
    }

    let body = {
      Language: "en",
      Platform: "web",
      UserId: userId,
      UserPinCode: pin,
      Version: "V1",
    };
    const res = await post("https://api.tapmad.com/api/setUserPinCode", body);

    if (res.data && res.data.Response) {
      if (res.data.Response.responseCode == 0) {
        return swal({
          timer: 3000,
          title: res.data.Response.message,
          icon: "error",
        });
      } else if (res.data.Response.responseCode == 1) {
        swal({
          timer: 3000,
          title: "Signed In Successfully",
          text: "Redirecting you...",
          icon: "success",
        }).then((result) => {
          Cookie.setCookies("isAuth", 1);
          checkUserAuthentication();
          setLoader(false);
        });
      }
    }
  };
  return (
    <div>
      <p className="text-center mt-4">Please set your 4 digit PIN</p>
      <div className="px-3 pb-2">
        <input
          type="text"
          placeholder="Enter OTP Code"
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
