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

  function handleBody() {
    return {
      Version: "V1",
      Language: "en",
      Platform: "web",
      ProductId: 1214,
      // ProductId: authState.selectedPackageId,
      MobileNo: initialState.User.MobileNo,
      OperatorId: initialState.User.OperatorId,
      cnic: initialState.User.Cnic,
    };
  }

  const checkUser = async () => {
    let body = { Language: "en", MobileNo: initialState.User.MobileNo };
    try {
      const data = await AuthService.loginUser(body);
      if (data) {
        if (data.data) {
          if (data.data.User) {
            if (data.data.User.IsSubscribe) {
              if (data.data.User.IsPinSet) {
                return { code: 11, message: "Already subscribe!" };
              } else {
                return { code: 34, message: "Set your pin!" };
              }
            } else {
              return { code: 0, message: "Go!" };
            }
          } else {
            return { code: 0, message: "Go!" };
          }
        }
      } else {
        return 0;
      }
    } catch (error) {}
  };

  async function SubscribeUser() {
    setLoader(true);

    if (
      authState &&
      authState.selectedPaymentMethod &&
      authState.selectedPackageId
    ) {
      var details = {};
      if (authState.selectedPaymentMethod.PaymentType == 1) {
        details = handleBody();
        delete details.cnic;
      }
      if (authState.selectedPaymentMethod.PaymentType == 2) {
        details = handleBody();
        delete details.cnic;
        delete details.ProductId;
      }
      if (authState.selectedPaymentMethod.PaymentType == 3) {
        details = handleBody();
        delete details.cnic;
      }
      if (authState.selectedPaymentMethod.PaymentType == 4) {
        details = handleBody();
      }

      if (authState.selectedPaymentMethod.PaymentType == 2) {
        // for credit card specific only
        AuthService.creditCardOrder(details);
      } else {
        // for other payment methods
        const status = await checkUser();
        var data;
        if (status.code == 0) {
          data = await AuthService.initialTransaction(details);
        } else {
          console.log("status: ", status);
          swal({
            timer: 2000,
            text: status.message,
            icon: "info",
            buttons: false,
          });
          setLoader(false);
          return updateResponseCode(status.code);
        }

        console.log("initialTransaction: ", status);

        setLoader(false);
        if (data != null) {
          if (data.responseCode == 11) {
            updateUserPassword(data.data.User.UserPassword);
            swal({
              timer: 3000,
              text:
                "You are already subscribed user, please enter your PIN for login",
              icon: "info",
              buttons: false,
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
            swal({
              title: "OTP code send successfully, please enter your code!",
              icon: "success",
            });
            // setting responseCode and new user true for payment process
            updateResponseCode(data.responseCode, true);
          } else if (data.responseCode == 6) {
            updateResponseCode(34, true);
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
