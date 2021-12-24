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
import { handleBody, handleRegisterPayload } from "./authHelper";
import { UPDATE_SUBSCRIBE_RESPONSE, UPDATE_USER_DETAILS } from "../../../contexts/auth/SignUpReducer";
import { checkUserIdAndToken } from "../../../services/auth.service";
import withLogin from "../LoginHOC";

 function SubscribeButtonComponent({ creditCardType , login}) {
  const router = useRouter();
  const { setLoader } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const [formReady, setFormReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(async () => {
    if (creditCardType) {
      on("tokenSuccess", async (event) => {
        if (formReady) {
          await submitCardDetails(event);
        }
      });
    }
  }, [formReady === true]);

  function updateApiData(code, newUser = false) {
    dispatch({
      type: UPDATE_SUBSCRIBE_RESPONSE,
      data: { code: code, newUser: newUser },
    });
  }
  async function submitCardDetails(event) {
    var details = handleBody(SignUpState);
    if (creditCardType) {
      details = { ...details, Token: event.token };
      checkouPayment(response, details);
    } else {
      delete details.cnic;
      const response = await AuthService.creditCardOrder(details);
      UBLPayment(response);
    }
    setLoader(false);
  }

  function checkouPayment(response, details) {
    if (response.data.responseCode == 1 || response.data.responseCode == 4) {
      SignUpTag(details, response.data);
      swal({
        text: "Transaction Successful. Redirecting you",
        icon: "success",
        timer: 2000,
      }).then(() => {
        router.push(`/sign-up?code=34&number=${details.MobileNo}`);
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
  function UBLPayment(response) {
    if (response.responseCode == 1) {
      window.location.href = response.data.CardPaymentUrl;
      return;
    } else if (response.responseCode == 4) {
      // user exist but have subscription , shiuld redirect to given url
      window.location.href = response.data.CardPaymentUrl;
      return;
    } else if (response.responseCode == 11) {
      // user exist but have subscription , shiuld redirect to given url
      swal({
        timer: 3000,
        text: response.data.message,
        icon: "info",
        buttons: true,
      }).then((e) => {
        router.push("/sign-in");
      });
    } else if (response.responseCode == 2) {
      window.location.href = response.data.CardPaymentUrl;
    } else {
      swal({
        timer: 3000,
        text: response.message,
        icon: "error",
        buttons: true,
      });
      return 0;
    }
    setLoader(false);
  }
  var apiCall = false;
  async function SubscribeUser() {
    setLoader(true);
    if (checkbox) {
      if (SignUpState?.SelectedPrice?.ProductId) {
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
        if (SignUpState.SelectedMethod.PaymentId == 2) {
          // for credit card specific only
          if (
            !details.Email ||
            !details.FullName ||
            details.OperatorId == 100010
          ) {
            setLoader(false);
            return swal({
              timer: 3000,
              text: "Enter all fields",
              icon: "error",
              buttons: false,
            });
          }
          if (creditCardType) {
            // for checkout
            Frames.submitCard();
            setFormReady(true);
          } else {
            // for UBL
            submitCardDetails();
          }
        } else {
          // for other payment methods
          if (!details.OperatorId) {
            setLoader(false);
            return swal({
              timer: 3000,
              text: "Please select operator",
              icon: "info",
              buttons: false,
            });
          }
          var data = await AuthService.initialTransaction(details);
          dispatch({
            type: UPDATE_USER_DETAILS,
            data: { UserPassword :  data.data.User.UserPassword},
          });
          Cookie.setCookies('utk' , data.data.User.UserPassword)
          login("" , false)
          setLoader(false);
          if (data != null) {
            if (data.responseCode == 0) {
              swal({ title: data.message, icon: "error", timer: 3000 });
            } else if (data.responseCode == 11) {
              //user already subscribed checking PIN SET
              if (data.data.User.IsPinSet) {
                swal({
                  timer: 3000,
                  title: "You are already subscribed!",
                  text: "Enter your PIN for login",
                  icon: "info",
                  buttons: false,
                });
                Cookie.setCookies("userId", data.data.User.UserId);
                // dispatch({   old flow of showing enterpin for subscribed user
                //   type: UPDATE_SUBSCRIBE_RESPONSE,
                //   data: { code: 11, newUser: false },
                // });
                router.push(`/sign-in?number=${details.MobileNo}`);
              } else {
                swal({
                  timer: 3000,
                  title: "You are already subscribed!",
                  text: "Set your PIN for login",
                  icon: "info",
                });
                dispatch({
                  type: UPDATE_SUBSCRIBE_RESPONSE,
                  data: { code: 34, newUser: false },
                });
              }
            } else if (data.responseCode == 1) {
              // setting responseCode and new user true for payment process
              swal({
                title: "OTP code send successfully, please enter your code!",
                icon: "success",
              });
              dispatch({
                type: UPDATE_SUBSCRIBE_RESPONSE,
                data: { code: data.responseCode, newUser: true },
              });
            } else if (data.responseCode == 6) {
              // only for jazz cash , process payment api will not call direct transaction from here
              const loggedIn = checkUserIdAndToken();
              console.log("data.responseCode : ",data.responseCode , data.data.User);
              if(loggedIn.valid){
                if (data.data.User.IsPinSet) {
                  swal({
                    title: data.message,
                    icon: "success",
                    timer: 3000,
                  }).then((res) => {
                    let backURL = Cookie.getCookies("backUrl") || "/";
                    router.push(backURL);
                  });
                } else {
                  dispatch({
                    type: UPDATE_SUBSCRIBE_RESPONSE,
                    data: { code: 34, newUser: false },
                  });
                }
              }else{
                if (data.data.User.IsPinSet) {
                  //  do login for non pin api
                  console.log("IsPinSet condition ",data.data);
                  Cookie.setCookies('utk' , data.data.User.UserPassword)
                  login("" , false)
                } else {
                  // send to setpin
                  dispatch({
                    type: UPDATE_SUBSCRIBE_RESPONSE,
                    data: { code: 34, newUser: false },
                  });
                }
              }
             
            } else {
              swal({ title: data.message, icon: "error" });
            }
          } else {
            swal({ title: "Something went wrong!", icon: "error" });
            setLoader(false);
          }
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

  useEffect(() => {
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <style jsx>
        {`
          .container-term .checkmark {
            width: 20px;
            height: 20px;
          }
          .container-term .checkmark:after {
            left: 6px;
            top: 1px;
          }
        `}
      </style>
      <div className="w-100">
        <GeneralModal
          component={TermsAndCondition}
          title="Test Modal"
          open={open}
          toggle={() => setOpen(!open)}
        />
        <div className="form-check  my-3 termdiv">
          <label className="container-term float-left pl-2">
            <input type="checkbox" onClick={onClickCheckbox} />I agree to
            Tapmad's <span onClick={onClickTerm}>term and condition</span>
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div
        className={`w-100  ${isMobile ? "" : "d-flex justify-content-around"}`}
      >
        <button
          className={`btn subscribe-btn bg-green ${
            checkbox ? "visible" : "opacity-0"
          }`}
          onClick={SubscribeUser}
        >
          Subscribe Now
        </button>

        {/* <a className="text-red mt-4 d-block">
          <u>Upgrade Plan</u>{" "}
        </a> */}
      </div>
    </>
  );
}
const SubscribeButton = withLogin(SubscribeButtonComponent);
export default SubscribeButton;
