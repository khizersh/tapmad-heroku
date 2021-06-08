import React, {
  useState,
  useContext,
  useEffect,
  memo,
  useMemo,
  useCallback,
  useRef,
} from "react";
import DropdownWithImage from "./DropdownWithImage";
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
    if (authState.selectedPaymentMethod.PaymentId == 1) {
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
    } else if (authState.selectedPaymentMethod.PaymentId == 2) {
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
    } else if (authState.selectedPaymentMethod.PaymentId == 3) {
      return (
        <>
          <EasypaisaForm
            methodName={authState.selectedPaymentMethod.PaymentMethodName}
            mobileCode={authState.MobileCode}
            onChangeNumber={handleNumber}
          />
        </>
      );
    } else if (authState.selectedPaymentMethod.PaymentId == 4) {
      return (
        <>
          <JazzCashForm
            mobileCode={authState.MobileCode}
            onChangeNumber={handleNumber}
            onChangeCnic={handleCnic}
          />
        </>
      );
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
