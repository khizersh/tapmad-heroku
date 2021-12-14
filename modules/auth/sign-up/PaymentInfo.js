import React, { useContext, useMemo, useCallback } from "react";
import SignMessage from "./SignMessage";
import { Authcontext } from "../../../contexts/AuthContext";
import SimCardForm from "./payment-info-components/SimCardForm";
import CreditCardForm from "./payment-info-components/CreditCardForm";
import EasypaisaForm from "./payment-info-components/EasypaisaForm";
import JazzCashForm from "./payment-info-components/JazzCashForm";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { UPDATE_USER_DETAILS } from "../../../contexts/auth/SignUpReducer";

function PaymentInfo({ loggedIn }) {
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const { AuthState } = useContext(AuthContext);
  console.log(SignUpState, "SIGN");
  const onChangeNetwork = useCallback((data) => {
    updateUserData({ Operator: data.OperatorId });
  }, []);
  function updateUserData(userData) {
    dispatch({ type: UPDATE_USER_DETAILS, data: userData });
  }
  const RenderMethod = useCallback(() => {
    const PaymentId = SignUpState.SelectedMethod.PaymentId;
    if (PaymentId == 1) {
      return (
        <>
          <SimCardForm
            loggedIn={loggedIn}
            data={operators}
            onChangeNetwork={onChangeNetwork}
            onChangeNumber={handleNumber}
            mobileCode={AuthState.CountryCode}
          />
        </>
      );
    } else if (PaymentId == 2 || PaymentId == 5) {
      return (
        <>
          <CreditCardForm
            loggedIn={loggedIn}
            data={operators}
            onChangeName={handleFullName}
            onChangeNetwork={onChangeNetwork}
            mobileCode={AuthState.CountryCode}
            onChangeNumber={handleNumber}
            onChangeEmail={handleEmail}
            creditCardType={AuthState.CreditCardType}
          />
        </>
      );
    } else if (PaymentId == 3 || PaymentId == 6) {
      return (
        <>
          <EasypaisaForm
            loggedIn={loggedIn}
            methodName={SignUpState.SelectedMethod.PaymentMethodName}
            mobileCode={AuthState.CountryCode}
            onChangeNumber={handleNumber}
          />
        </>
      );
    } else if (PaymentId == 4 || PaymentId == 7) {
      return (
        <>
          <JazzCashForm
            loggedIn={loggedIn}
            mobileCode={AuthState.CountryCode}
            onChangeNumber={handleNumber}
            onChangeCnic={handleCnic}
          />
        </>
      );
    } else {
      return <></>;
    }
  }, [SignUpState.SelectedMethod]);

  const operators = useMemo(() => SignUpState.LoginOperator || []);

  function handleCnic(e) {
    const cnic = e.target.value;
    if (+cnic === +cnic) {
      if (cnic.length == 6) {
        updateUserData({ Cnic: cnic });
      }
    }
  }

  function handleNumber(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      if (mobileNum.length > 4) {
        updateUserData({ MobileNo: mobileNum });
      }
    }
  }

  function handleFullName(e) {
    const name = e.target.value;
    updateUserData({ FullName: name });
  }

  function handleEmail(e) {
    const email = e.target.value;
    updateUserData({ Email: email });
  }

  return (
    <div>
      <div className="pymnt_pge_phne px-lg-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            {SignUpState && SignUpState.SelectedMethod && <RenderMethod />}
          </div>
        </div>
        <SignMessage
          price={SignUpState.SelectedPrice}
          creditCardType={AuthState.CreditCardType}
        />
      </div>
    </div>
  );
}

export default PaymentInfo;
