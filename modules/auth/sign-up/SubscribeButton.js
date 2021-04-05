import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import router from "next/router";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { AuthService } from "../auth.service";

export default function SubscribeButton() {
  const { initialState, setLoader, updateUserPassword } = useContext(
    MainContext
  );
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
          ProductId: authState.selectedPackageId,
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
          // ProductId: 1265,
          ProductId: authState.selectedPackageId,
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
          ProductId: authState.selectedPackageId,
          MobileNo: initialState.User.MobileNo,
          OperatorId: initialState.User.OperatorId,
          cnic: initialState.User.Cnic,
        };
      }

      var resp;
      if (authState.selectedPaymentMethod.PaymentType == 2) {
        // for credit card specific only
        AuthService.creditCardOrder(details);
      } else {
        const data = await AuthService.initialTransaction(details);
        console.log("initialTransaction: ", data);

        setLoader(false);
        if (data != null) {
          if (data.responseCode == 11) {
            updateUserPassword(data.data.User.UserPassword);
            swal({
              timer: 3000,
              text:
                "You are already subscribed user, please enter your PIN for login",
              icon: "info",
            });
            updateResponseCode(data.responseCode);
            Cookie.setCookies("userId", data.data.User.UserId);
          } else if (data.responseCode == 0) {
            swal({
              title: data.message,
              icon: "error",
              timer: 3000,
            });
          } else if (data.responseCode == 1) {
            // only for jazz cash start
            if (authState.selectedPaymentMethod.PaymentType == 4) {
              swal({
                title: "You have logged out!",
                text: "Redirecting you in 2s...",
                timer: 2500,
              }).then((res) => {
                setisAuthenticateFalse();
                router.push("/");
                setLoader(false);
              });
              // end
            } else {
              swal({
                title: "OTP code send successfully, please enter your code!",
                icon: "success",
              });
              // setting responseCode and new user true for payment process
              updateResponseCode(data.responseCode, true);
            }
          } else if (data.responseCode == 13) {
            swal({
              title: data.message,
              icon: "error",
            });
          } else {
            swal({
              title: data.message,
              icon: "error",
            });
          }
        } else {
          swal({
            title: "Something went wrong!",
            icon: "error",
          });
          setLoader(false);
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
