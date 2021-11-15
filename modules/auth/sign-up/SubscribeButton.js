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
import { UPDATE_SUBSCRIBE_RESPONSE } from "../../../contexts/auth/SignUpReducer";

export default function SubscribeButton() {
  const router = useRouter();
  const { setLoader } = useContext(MainContext);
  const { SignUpState , dispatch } = useContext(SignUpContext);
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

  function updateApiData(code , newUser = false) {
    dispatch({type : UPDATE_SUBSCRIBE_RESPONSE , data : {code  : code , newUser : newUser}})
  }
  async function submitCardDetails(event) {
    var detailsdetails = handleBody();
    detailsdetails = { ...detailsdetails, Token: event.token };
    delete detailsdetails.cnic;
    const response = await AuthService.creditCardOrder(detailsdetails);
    setLoader(false);
    // checkouPayment(response);
    UBLPayment(response);
  }
  function checkouPayment(response) {
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
  function UBLPayment(response) {
    if (response.data.Response.responseCode == 1) {
      window.location.href = response.data.CardPaymentUrl;
      return;
    } else if (response.data.Response.responseCode == 4) {
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
      window.location.href = response.data.CardPaymentUrl;
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
    // setLoader(true);
    if ( SignUpState?.SelectedPrice?.ProductId) {
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
        if (!details.Email || !details.FullName) {
          setLoader(false);
          return swal({timer: 3000,text: "Enter all fields",icon: "error", buttons: false, });
        }
        Frames.submitCard();
        setFormReady(true);
       
      } else { // for other payment methods
        if (!details.OperatorId) {
          setLoader(false);
          return  swal({ timer: 3000, text: "Please select operator", icon: "info",buttons: false, });
        }
      
         var data = await AuthService.initialTransaction(details);
          setLoader(false);
          if (data != null) {
            if (data.responseCode == 0) {
              swal({  title: data.message, icon: "error", timer: 3000, });
            }
            else if (data.responseCode == 11) { //user already subscribed checking PIN SET 
              console.log("data in already : ",data);
                 if(data.data.User.IsPinSet){
                   swal({ timer: 3000,title: "You are already subscribed!" , text : "Enter your PIN for login",icon: "info",buttons: false,});
                   Cookie.setCookies("userId", data.data.User.UserId);
                   dispatch({type : UPDATE_SUBSCRIBE_RESPONSE , data : {code  : 11 , newUser : false }})
                 }else{
                  swal({ timer: 3000, title: "You are already subscribed!" , text: "Set your PIN for login" , icon: "info"});
                  dispatch({type : UPDATE_SUBSCRIBE_RESPONSE , data : {code  : 34 , newUser : false}})
                 }
            } 
            else if (data.responseCode == 1) {  // setting responseCode and new user true for payment process
              swal({ title: "OTP code send successfully, please enter your code!",  icon: "success", });    
              dispatch({type : UPDATE_SUBSCRIBE_RESPONSE , data : {code  : data.responseCode , newUser : true}})
            } 
            else if (data.responseCode == 6) {
                swal({ title: data.message, icon: "success",  timer: 3000})
                .then((e) => {
                  router.push("/");
                });
            } 
            else {
              swal({title: data.message, icon: "error" });
            }
          } else {
            swal({title: "Something went wrong!", icon: "error", });
            setLoader(false);
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
          <input type="checkbox" onClick={onClickCheckbox} />I agree to Tapmad's{" "}
          <span onClick={onClickTerm}>term and condition</span>
          <span className="checkmark"></span>
        </label>
      </div>
      <br />
      <button
        className={`btn pymnt_pge_sbscrbe_btn bg-green ${
          checkbox ? "visible" : "opacity-0"
        }`}
        onClick={SubscribeUser}
      >
        Subscribe Now
      </button>
    </div>
  );
}
