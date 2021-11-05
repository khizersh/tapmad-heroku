import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { useRouter } from "next/router";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { AuthService } from "../auth.service";
import { on } from "../../../public/static/js/linkers";
import { SignUpTag } from "../../../services/gtm";
import GeneralModal from "../../../components/GeneralModal";
import TermsAndCondition from "./TermsAndCondition";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { handleRegisterPayload } from "./authHelper";

export default function SubscribeButton() {
  const router = useRouter();
  const { setLoader, updateUserPassword } = useContext(MainContext);
  const { SignUpState } = useContext(SignUpContext);
  const { updateResponseCode } = useContext(Authcontext);
  const [formReady, setFormReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    on("tokenSuccess", async (event) => {
      if (formReady) {
        await submitCardDetails(event);
      }
    });
  }, [formReady]);

  function updateApiData(status) {
    updateUserPassword(status.data.User.UserPassword);
    updateResponseCode(status.code);
  }
  async function submitCardDetails(event) {
    var detailsdetails = handleBody();
    detailsdetails = { ...detailsdetails, Token: event.token };
    delete detailsdetails.cnic;
    const response = await AuthService.creditCardOrder(detailsdetails);
    setLoader(false);
    if (response.data.responseCode == 1 || response.data.responseCode == 4) {
      SignUpTag(detailsdetails, response.data);
      swal({
        text: "Transaction Successful. Redirecting you",
        icon: "success",
        timer: 2000,
      }).then(() => {
        router.push(`/sign-up?code=34&number=${detailsdetails.MobileNo}`);
      });
      return;
    } else if (response.data.responseCode == 4) {
      swal({
        timer: 3000,
        text: response.data.message,
        icon: "info",
        buttons: true,
      }).then((e) => {
        router.push("/sign-in");
      });
    } else if (
      response.data.Response &&
      response.data.Response.responseCode == 2
    ) {
      window.location.href = response.data.User.redirectUrl;
    } else {
      swal({
        timer: 3000,
        text: response.data.message,
        icon: "info",
        buttons: true,
      }).then((e) => {
        window.location.reload();
      });
      return 0;
    }
  }
  async function SubscribeUser() {
    setLoader(true);

    if (
      SignUpState &&
      SignUpState.SelectedMethod &&
      SignUpState.SelectedPrice?.ProductId
    ) {
      var details = handleRegisterPayload(SignUpState);
      if (!details.MobileNo) {
        setLoader(false);
        return swal({
          timer: 3000,
          text: "Please enter mobile number",
          icon: "error",
          buttons: false,
        });
      }
        if (details.ProductId == 1265 || details.ProductId == 1360) {
          var status = await AuthService.checkEPLUser(details.MobileNo);
        } else {
          var status = await AuthService.checkUser(details.MobileNo);
        }

        if (SignUpState.SelectedMethod.PaymentId == 2) {
          // for credit card specific only

          if (!details.Email || !details.FullName) {
            setLoader(false);
            return swal({
              timer: 3000,
              text: "Enter all fields",
              icon: "error",
              buttons: false,
            });
          }
          if (status.code == 0) {
            Frames.submitCard();
            setFormReady(true);
            // updateApiData(status);
            return;
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
                if (status.data.User.IsPinSet) {
                  swal({
                    title: data.message,
                    icon: "success",
                    timer: 3000,
                  }).then((e) => {
                    router.push("/");
                  });
                } else {
                  updateResponseCode(34, true);
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

  function onClickTerm() {
    setOpen(true);
  }
  function onClickCheckbox() {
    setCheckbox(!checkbox);
  }

  return (
    <div>
      <GeneralModal
        component={TermsAndCondition}
        title="Test Modal"
        open={open}
        toggle={() => setOpen(!open)}
      />
      <div className="form-check float-left my-3 termdiv">
        <label className="container-term">
          <input type="checkbox" onClick={onClickCheckbox}/>I agree to Tapmad's{" "}
          <span onClick={onClickTerm}>term and condition</span>
          <span className="checkmark"></span>
        </label>
      </div>
      <br />
      <button
        className={`btn pymnt_pge_sbscrbe_btn bg-green ${checkbox ? "visible" : "opacity-0" }`}
        onClick={SubscribeUser}
      >
        Subscribe Now
      </button>
    </div>
  );
}
