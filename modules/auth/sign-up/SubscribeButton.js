import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { post } from "../../../services/http-service";
import router from "next/router";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";

export default function SubscribeButton() {
  const { initialState, setLoader } = useContext(MainContext);
  const { authState, updateResponseCode } = useContext(Authcontext);

  async function SubscribeUser() {
    setLoader(true);

    if (
      authState &&
      authState.selectedPaymentMethod &&
      authState.selectedPackageId
    ) {
      var details = {};
      if (authState.selectedPaymentMethod.PaymentType == 1) {
        details = {
          Version: "V1",
          Language: "en",
          Platform: "web",
          ProductId: 1265,
          // ProductId: authState.selectedPackageId,
          MobileNo: initialState.User.MobileNo,
          OperatorId: initialState.User.OperatorId,
        };
      }
      if (authState.selectedPaymentMethod.PaymentType == 2) {
        details = {
          Email: initialState.User.Email,
          FullName: initialState.User.FullName,
          Version: "V1",
          Language: "en",
          Platform: "Android",
          MobileNo: initialState.User.MobileNo,
        };
      }
      if (authState.selectedPaymentMethod.PaymentType == 3) {
        details = {
          Version: "V1",
          Language: "en",
          Platform: "web",
          ProductId: 1265,
          // ProductId: authState.selectedPackageId,
          MobileNo: initialState.User.MobileNo,
          OperatorId: initialState.User.OperatorId,
        };
      }
      if (authState.selectedPaymentMethod.PaymentType == 4) {
        details = {
          Version: "V1",
          Language: "en",
          Platform: "web",
          ProductId: 1265,
          // ProductId: authState.selectedPackageId,
          MobileNo: initialState.User.MobileNo,
          OperatorId: initialState.User.OperatorId,
          cnic: initialState.User.Cnic,
        };
      }

      var resp;
      if (authState.selectedPaymentMethod.PaymentType == 2) {
        // for credit card specific only for different api call
        resp = await post(
          "https://app.tapmad.com/api/CardUserOrderTest",
          details
        );
        console.log("resp: ", resp);
        setLoader(false);
        // if (
        //   resp.data &&
        //   resp.data.Response &&
        //   resp.data.Response.responseCode
        // ) {
        //   let responseCode = resp.data.Response.responseCode;
        //   window.location.href = resp.data.CardPaymentUrl;
        // }
      } else {
        // other api call
        resp = await post(
          "https://api.tapmad.com/api/initiatePaymentTransaction",
          details
        );

        setLoader(false);
        if (resp.data) {
          let responseCode = "",
            message = "";
          if (
            resp.data.responseCode != undefined ||
            resp.data.responseCode != null
          ) {
            responseCode = resp.data.responseCode;
            message = resp.data.message;
          } else {
            responseCode = resp.data.Response.responseCode;
            message = resp.data.Response.message;
          }
          console.log("resp: ", responseCode);
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
              title: message,
              icon: "error",
            });
          } else if (responseCode == 1) {
            swal({
              title: "OTP code send successfully, please enter your code!",
              icon: "success",
            });
            // Mutate response code in state
            updateResponseCode(responseCode);
          } else if (responseCode == 13) {
            swal({
              title: message,
              icon: "error",
            });
          } else {
            console.log("responseCode");
            swal({
              title: message,
              icon: "error",
            });
          }
        }
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
