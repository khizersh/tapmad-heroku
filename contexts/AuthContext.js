import React, { useContext } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { MainContext } from "./MainContext";

export const Authcontext = React.createContext(null);

export default function AuthProvider({ children }) {
  const { initialState } = useContext(MainContext);

  const [authState, setAuthState] = React.useState({
    loginOperators: [],
    paymentMethods: [],
    selectedLoginOperator: null,
    selectedPaymentMethod: null,
    signUpComponent: null,
    MobileCode: "",
    PackageImage: "",
    selectedPackageId: null,
    subscribeResponseCode: null,
  });

  React.useEffect(() => {
    if (initialState && initialState.AuthDetails) {
      let AuthStateWithData = {
        loginOperators: initialState.AuthDetails.LoginOperators,
        paymentMethods: initialState.AuthDetails.PaymentMethods,
        selectedPaymentMethod: initialState.AuthDetails.PaymentMethods[0],
        MobileCode: initialState.AuthDetails.MobileCode,
        PackageImage: initialState.AuthDetails.PackageImage,
        signUpComponent: "signUp",
        selectedPackageId:
          initialState.AuthDetails?.PaymentMethods[0]?.Packages[0]?.ProductId,
      };
      setAuthState(AuthStateWithData);
    }
  }, [initialState.AuthDetails]);

  function updateSelectedPaymentMethod(method) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      selectedPaymentMethod: method,
    });
  }

  function updateSelectedPackageId(id) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      selectedPackageId: id,
    });
  }
  function updateSelectedOperator(operator) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      selectedLoginOperator: operator,
    });
  }

  function updateSignUpComponent(name) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      signUpComponent: name,
    });
  }
  function updateResponseCode(code) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      subscribeResponseCode: code,
    });
  }
  let data = {
    authState,
    updateSelectedPaymentMethod,
    updateSignUpComponent,
    updateSelectedOperator,
    updateResponseCode,
    updateSelectedPackageId,
  };
  return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>;
}