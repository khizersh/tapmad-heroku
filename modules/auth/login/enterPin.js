import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { tapmadLogo } from "../../../services/imagesLink";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";

function EnterPin({ forgetPin, login }) {
  const [userPin, seUserPin] = useState("");
  const router = useRouter();
  const { initialState, setLoader } = useContext(MainContext);
  function handleNumber(e) {
    const pin = e.target.value;
    if (+pin === +pin) {
      seUserPin(pin.trim());
    }
  }

  async function verifyPin() {
    if (userPin.length > 2) {
      setLoader(true);
      const data = await AuthService.verifyPinCode(userPin);

      if (data != null) {
        if (data.responseCode == 1) {
          var loginResp = login();
          loginResp.then((e) => {
            if (e != null && e.responseCode == 401) {
              console.log(e);
              forgetPin(initialState);
            }
          })
        } else {
          console.log("data in check: ", data);
          setLoader(false);
          swal({
            title: data.message,
            timer: 3000,
            icon: "error",
          });
          Cookie.setCookies("isAuth", 0);
        }
      } else {
        swal({
          title: "Something went wrong!",
          timer: 3000,
          icon: "error",
        });
      }
    } else {
      swal({
        title: "Invalid pin!",
        timer: 2500,
        icon: "error",
      });
    }
  }

  return (
    <div className="login_slct_oprtr login_pin_card login_slct_oprtr_active">
      <img src={tapmadLogo} width="200" alt="Tapmad logo" />
      <h4>Enter your PIN</h4>
      <p>Enter four digit PIN for login</p>
      <div className="form-group">
        <input
          type="password"
          maxLength="4"
          minLength="4"
          value={userPin}
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
const EnhancedEnterPin = withLogin(EnterPin);
export default EnhancedEnterPin;