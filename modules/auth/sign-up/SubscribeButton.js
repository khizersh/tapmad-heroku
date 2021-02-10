import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { post } from "../../../services/http-service";
import router from "next/router";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";

export default function SubscribeButton() {
  // let { authState } = useContext(Authcontext);
  const { initialState, setLoader } = useContext(MainContext);
  const { authState, updateResponseCode } = useContext(Authcontext);

  async function SubscribeUser() {
    setLoader(true);
    if (authState && authState.selectedPaymentMethod) {
      let details = {
        Version: "V1",
        Language: "en",
        Platform: "web",
        ProductId: authState.selectedPaymentMethod.Packages[0].ProductId,
        MobileNo: initialState.User.MobileNo,
        OperatorId: initialState.User.OperatorId,
      };
      var resp = await post(
        "https://api.tapmad.com/api/initiatePaymentTransaction",
        details
      );
      setLoader(false);

      let responseCode = resp.data.Response.responseCode;
      if (responseCode == 11) {
        swal({
          timer: 3000,
          text:
            "You are already subscribed user, please enter your PIN for login",
          icon: "info",
        });
        updateResponseCode(responseCode);
        Cookie.setCookies("userId", resp.data.User.UserId);
      } else if (responseCode == 0) {
        swal({
          title: resp.data.Response.message,
          icon: "error",
        });
      } else if (responseCode == 1) {
        // Mutate response code in state
        updateResponseCode(responseCode);
      } else if (responseCode == 13) {
        swal({
          title: resp.data.Response.message,
          icon: "error",
        });
      }
    }
  }
  return (
    <div>
      <button
        className="btn pymnt_pge_sbscrbe_btn bg-green"
        onClick={SubscribeUser}
      >
        Subscribe
      </button>
    </div>
  );
}
