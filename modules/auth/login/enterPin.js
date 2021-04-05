import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent, post } from "../../../services/http-service";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { loggingTags, verifyUserPinCode } from "../../../services/apilinks";
import { tapmadLogo } from "../../../services/imagesLink";
import { AuthService } from "../auth.service";

export default function EnterPin({ forgetPin }) {
  const [userPin, seUserPin] = useState();
  const router = useRouter();
  const { checkUserAuthentication, setLoader, initialState } = useContext(
    MainContext
  );

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
          let obj = {
            Language: "en",
            Platform: "web",
            Version: "V1",
            MobileNo: initialState.User.MobileNo,
            OperatorId: initialState.User.OperatorId,
            UserPassword: initialState.User.Password,
          };
          const resp = await AuthService.signInOrSignUpMobileOperator(
            obj,
            "",
            false
          );

          if (resp && resp.data && resp.data.UserId) {
            Cookie.setCookies("isAuth", 1);
            swal({
              title: "Sign in successfully!",
              text: "Redirecting you now...",
              timer: 2500,
              icon: "success",
            });
            checkUserAuthentication();
            let body = {
              event: loggingTags.login,
              action: "login_success",
            };
            actionsRequestContent(body);
            router.push("/");
          } else {
            setLoader(false);
            swal({
              title: response.message,
              icon: "error",
              timer: 3000,
            });
          }
        } else {
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
      return;
    }
  }

  return (
    <div className="login_slct_oprtr login_pin_card login_slct_oprtr_active">
      <img src={tapmadLogo} width="200" />
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
