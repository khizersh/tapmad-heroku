import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { post } from "../../../services/http-service";

export default function SetPin() {
  const [pin, setPin] = useState("");
  const { checkUserAuthentication } = useContext(MainContext);
  const router = useRouter();

  async function setUserPin() {
    var resp = await post("https://api.tapmad.com/api/setUserPinCode", {
      Version: "V1",
      Language: "en",
      Platform: "Web",
      UserId: Cookie.getCookies("userId"),
      UserPinCode: pin,
    });
    if (resp.data.Response.responseCode == 1) {
      Cookie.setCookies("isAuth", 1);
      checkUserAuthentication();
      router.push("/");
    } else {
      Cookie.setCookies("isAuth", 0);
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
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ marginBottom: "0.3rem" }}>
        <label style={{ color: "#fff", fontSize: "14px" }}>
          Confirm your new pin
        </label>
        <input
          type="password"
          className="text-center form-control numeric"
          minlength="4"
          maxlength="4"
          placeholder="4 digit PIN"
          name="pin"
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
