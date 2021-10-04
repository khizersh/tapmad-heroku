import React, {
  useContext,
  useMemo,
  useCallback,
} from "react";
import SignMessage from "./SignMessage";
import { Authcontext } from "../../../contexts/AuthContext";
import SimCardForm from "./payment-info-components/SimCardForm";
import CreditCardForm from "./payment-info-components/CreditCardForm";
import EasypaisaForm from "./payment-info-components/EasypaisaForm";
import JazzCashForm from "./payment-info-components/JazzCashForm";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { UPDATE_USER_DETAILS } from "../../../contexts/auth/SignUpReducer";

function PaymentInfo() {
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const { CountryCode } = useContext(AuthContext);

  const onChangeNetwork = useCallback(
    (data) => {
      updateUserData({ Operator: data.OperatorId });
    },
    []
  );
  function updateUserData(userData) {
    dispatch({ type: UPDATE_USER_DETAILS, data: userData });
    console.log(SignUpState);
  }
  const RenderMethod = useCallback(() => {
    const PaymentId = SignUpState.SelectedMethod.PaymentId;
    if (PaymentId == 1) {
      return (
        <>
          <SimCardForm
            data={operators}
            onChangeNetwork={onChangeNetwork}
            onChangeNumber={handleNumber}
            mobileCode={CountryCode}
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
            mobileCode={CountryCode}
            onChangeNumber={handleNumber}
            onChangeEmail={handleEmail}
          />
        </>
      );
    } else if (PaymentId == 3 || PaymentId == 6) {
      return (
        <>
          <EasypaisaForm
            methodName={SignUpState.SelectedMethod.PaymentMethodName}
            mobileCode={CountryCode}
            onChangeNumber={handleNumber}
          />
        </>
      );
    } else if (PaymentId == 4 || PaymentId == 7) {
      return (
        <>
          <JazzCashForm
            mobileCode={CountryCode}
            onChangeNumber={handleNumber}
            onChangeCnic={handleCnic}
          />
        </>
      );
    } else {
      return <></>
    }
  }, [SignUpState.SelectedMethod]);

  const operators = useMemo(() => SignUpState.SelectedMethod.SimOperators || []);

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
        <SignMessage price={SignUpState.SelectedPrice} />
      </div>
    </div>
  );
}

export default PaymentInfo;
