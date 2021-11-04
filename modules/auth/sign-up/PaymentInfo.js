import React, {
  useState,
  useContext,
  useEffect,
  memo,
  useMemo,
  useCallback,
  useRef,
} from "react";
import SignMessage from "./SignMessage";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import SimCardForm from "./payment-info-components/SimCardForm";
import CreditCardForm from "./payment-info-components/CreditCardForm";
import EasypaisaForm from "./payment-info-components/EasypaisaForm";
import JazzCashForm from "./payment-info-components/JazzCashForm";

function PaymentInfo() {
  const { authState, updateSelectedOperator } = useContext(Authcontext);
  const {
    updateUserOperator,
    updateUserNumber,
    updateUserCnic,
    updateUserFullName,
    updateUserEmail,
  } = useContext(MainContext);


  const onChangeNetwork = useCallback(
    (data) => {
      updateUserOperator(data.OperatorId);
      updateSelectedOperator(data);
    },
    [updateSelectedOperator]
  );

  const RenderMethod = useCallback(() => {
    const PaymentId = authState.selectedPaymentMethod.PaymentId;
    if (PaymentId == 1) {
      return (
        <>
          <SimCardForm
            data={operators}
            onChangeNetwork={onChangeNetwork}
            onChangeNumber={handleNumber}
            mobileCode={authState.MobileCode}
          />
        </>
      );
    } else if (PaymentId == 2 || PaymentId == 5) {
      return (
        <>
          <CreditCardForm
            data={operators}
            onChangeName={handleFullName}
            onChangeNetwork={onChangeNetwork}
            mobileCode={authState.MobileCode}
            onChangeNumber={handleNumber}
            onChangeEmail={handleEmail}
          />
        </>
      );
    } else if (PaymentId == 3 || PaymentId == 6) {
      return (
        <>
          <EasypaisaForm
            methodName={authState.selectedPaymentMethod.PaymentMethodName}
            logo={authState.selectedPaymentMethod?.MobileNetworks[0]?.OperatorImage}
            mobileCode={authState.MobileCode}
            onChangeNumber={handleNumber}
          />
        </>
      );
    } else if (PaymentId == 4 || PaymentId == 7) {
      return (
        <>
        <JazzCashForm
            logo={authState.selectedPaymentMethod?.MobileNetworks[0]?.OperatorImage}
            mobileCode={authState.MobileCode}
            onChangeNumber={handleNumber}
            onChangeCnic={handleCnic}
          />
        </>
      );
    } else {
      return <></>
    }
  }, [authState.selectedPaymentMethod]);

  const operators = useMemo(() => authState.loginOperators);

  function handleCnic(e) {
    const cnic = e.target.value;
    if (+cnic === +cnic) {
      if (cnic.length == 6) {
        updateUserCnic(cnic);
      }
    }
  }

  function handleNumber(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      if (mobileNum.length > 4) {
        updateUserNumber(mobileNum);
      }
    }
  }

  function handleFullName(e) {
    const name = e.target.value;
    updateUserFullName(name);
  }

  function handleEmail(e) {
    const email = e.target.value;
    updateUserEmail(email);
  }

  return (
    <div>
      <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            <div className="input-group ng-scope">
              {authState && authState.selectedPaymentMethod && <RenderMethod />}
            </div>
          </div>
        </div>
        <SignMessage />
      </div>
    </div>
  );
}

export default PaymentInfo;
