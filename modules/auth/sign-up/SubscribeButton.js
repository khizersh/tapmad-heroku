import React, { useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { useRouter } from "next/router";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { AuthService } from "../auth.service";

export default function SubscribeButton() {
  const router = useRouter();

  const { initialState, setLoader, updateUserPassword } =
    useContext(MainContext);

  console.log("initialState: ", initialState);
  const { authState, updateResponseCode } = useContext(Authcontext);

  function handleBody() {
    return {
      Version: "V1",
      Language: "en",
      Platform: "android",
      // ProductId: 1214,
      ProductId: authState.selectedPackageId,
      MobileNo: initialState.User.MobileNo,
      OperatorId: initialState.User.OperatorId,
      cnic: initialState.User.Cnic,
      Email: initialState.User.Email,
      FullName : initialState.User.FullName,
    };
  }
  function updateApiData(status) {
    Cookie.setCookies("userId", status.data.User.UserId);
    updateUserPassword(status.data.User.UserPassword);
    updateResponseCode(status.code);
  }
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
      console.log(details);
      if (!details.MobileNo) {
        setLoader(false);
        return swal({
          timer: 3000,
          text: "Please enter mobile number",
          icon: "error",
          buttons: false,
        });
      }
      if (authState.selectedPaymentMethod.PaymentType == 2) {
        // for credit card specific only
        if (!initialState.User.Email || !initialState.User.FullName) {
          setLoader(false);
          return swal({
            timer: 3000,
            text: "Enter all fields",
            icon: "error",
            buttons: false,
          });
        }

        const response = await AuthService.creditCardOrder(details);
        if (response.data.responseCode == 1) {
          window.location.href = response.data.CardPaymentUrl;
        } else if (response.data.responseCode == 4) {
          swal({
            timer: 3000,
            text: response.data.message,
            icon: "info",
            buttons: true,
          }).then((e) => {
            router.push("/sign-in");
          });
        }
      } else {
        if (!details.OperatorId) {
          swal({
            timer: 3000,
            text: "Please select operator",
            icon: "info",
            buttons: false,
          });
          setLoader(false);
        }
        // for other payment methods
        const status = await AuthService.checkUser(initialState.User.MobileNo);

        var data;
        if (status.code == 0) {
          updateApiData(status);
          data = await AuthService.initialTransaction(details);
          setLoader(false);
          if (data != null) {
            if (data.responseCode == 11) {
              updateUserPassword(data.data.User.UserPassword);
              swal({
                timer: 3000,
                text: "You are already subscribed user, please enter your PIN for login",
                icon: "info",
                buttons: false,
              });
              Cookie.setCookies("userId", data.data.User.UserId);
              updateResponseCode(data.responseCode);
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
        } else {
          swal({
            timer: 2000,
            text: status.message,
            icon: "info",
            buttons: false,
          });
          setLoader(false);
          updateApiData(status);
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
