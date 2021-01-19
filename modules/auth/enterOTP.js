import React, { useContext, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Cookie } from "../../services/cookies";
import { post } from "../../services/http-service";
import { useRouter } from "next/router";
export default function EnterOTP({ forgetPin }) {
  const [userPin, seUserPin] = useState();
  const router = useRouter();
  const { checkUserAuthentication } = useContext(MainContext);
  function handleNumber(e) {
    const pin = e.target.value;
    if (+pin === +pin) {
      seUserPin(pin.trim());
    }
  }

  async function verifyPin() {
    if (userPin.length > 2) {
      var response = await post(
        "https://api.tapmad.com/api/verifyUserPinCode",
        {
          Version: "V1",
          Language: "en",
          Platform: "Web",
          UserId: Cookie.getCookies("userId"),
          UserPinCode: userPin,
        }
      );
      if (response.data.Response && response.data.Response.responseCode == 1) {
        Cookie.setCookies("isAuth", 1);
        checkUserAuthentication();
        router.push("/");
      } else {
        alert("Invalid OTP");
        Cookie.setCookies("isAuth", 0);
      }
    } else {
      return;
    }
  }

  return (
    <div className="login_slct_oprtr login_pin_card login_slct_oprtr_active">
      <img src="https://www.tapmad.com/images/tm-logo.png" width="200" />
      <h4>Enter your PIN</h4>
      <p>Enter four digit PIN for login</p>
      <div className="form-group">
        <input
          type="password"
          maxLength="4"
          minLength="4"
          className="text-center form-control"
          placeholder="Enter your PIN"
          onChange={handleNumber}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "10px" }}>
        <button
          type="button"
          className="btn btn-block btn-success req_pin_cde_btn"
          onClick={async () => await verifyPin()}
        >
          Enter PIN
        </button>
      </div>
      <div className="form-group">
        <a
          className="d-block mt-2 text-muted"
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={forgetPin}
        >
          Forgot PIN?
        </a>
      </div>
    </div>
  );
}
