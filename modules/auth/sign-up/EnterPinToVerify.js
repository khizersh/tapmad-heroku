import React, { useContext, useRef } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { post } from "../../../services/http-service";
import swal from "sweetalert";
import { Authcontext } from "../../../contexts/AuthContext";

const EnterPinToVerify = () => {
  const { checkUserAuthentication, setLoader } = useContext(MainContext);
  const { updateResponseCode } = useContext(Authcontext);
  const pinCode = useRef("");
  async function verifyPinCode() {
    setLoader(true);
    var body = {
      Version: "V1",
      Language: "en",
      Platform: "Web",
      UserId: Cookie.getCookies("userId"),
      UserPinCode: pinCode.current.value,
    };
    var resp = await post("https://api.tapmad.com/api/verifyUserPinCode", body);
    if (resp.data.Response.responseCode == 1) {
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
    } else if (resp.data.Response.responseCode == 0) {
      setLoader(false);
      swal({
        timer: 3000,
        title: resp.data.Response.message,
        icon: "error",
      });
    }
  }
  return (
    <>
      <div>
        <div className="py-3">
          <div className="text-center">
            <small className="text-dark">Enter your four digit PIN</small>
          </div>
        </div>
        <div className="p-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your PIN"
            maxLength={4}
            minLength={4}
            ref={pinCode}
          />
        </div>
        <div className="text-center py-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={verifyPinCode}
          >
            Verify PIN
          </button>
        </div>
        <div className="text-center pb-3">
          <a href="/">Forgot PIN?</a>
        </div>
      </div>
    </>
  );
};

export default EnterPinToVerify;
