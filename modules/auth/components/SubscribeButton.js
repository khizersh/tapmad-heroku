import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { post } from "../../../services/http-service";
import router from 'next/router';

export default function SubscribeButton() {

  // let { authState } = useContext(Authcontext);
  const { initialState } = useContext(MainContext);
  const { authState } = useContext(Authcontext);


  async function SubscribeUser() {
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
      console.log(resp);
      if(resp.data.Response.responseCode == 11){
        swal({
          title: resp.data.Response.message,
          icon: "warning",
        });

      }else if(resp.data.Response.responseCode == 0){
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
