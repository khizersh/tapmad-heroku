import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { post } from "../../../services/http-service";

export default function SubscribeButton() {
  const { authState } = useContext(Authcontext);
  const { initialState } = useContext(MainContext);
  async function SubscribeUser() {
    if (authState.selectedPaymentMethod) {
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
    }
    console.log(resp);
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
