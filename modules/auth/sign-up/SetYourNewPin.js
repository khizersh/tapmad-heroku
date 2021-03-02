import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { post } from "../../../services/http-service";
import { setUserPinCode } from "../../../services/apilinks";
import { useRouter } from "next/router";
import { AuthService } from "../auth.service";

export default function SetYourNewPin() {
  const router = useRouter();
  const { initialState, checkUserAuthentication, setLoader } = useContext(
    MainContext
  );
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const onClick = async () => {
    if (pin != confirmPin) {
      return swal({
        timer: 3000,
        title: "PIN code does not match!",
        icon: "error",
      });
    }
    setLoader(true);
    const response = await AuthService.setNewPin(pin);

    if (response != null) {
      if (response.responseCode == 0) {
        swal({
          timer: 3000,
          title: response.message,
          icon: "success",
        });
      } else if (response.responseCode == 1) {
        swal({
          timer: 3000,
          title: "Signed In Successfully",
          text: "Redirecting you...",
          icon: "success",
        }).then((result) => {
          Cookie.setCookies("isAuth", 1);
          checkUserAuthentication();
          router.push("/");
          setLoader(false);
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
