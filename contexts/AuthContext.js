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

  let data = {
    authState,
    updateSelectedPaymentMethod,
    updateSignUpComponent,
    updateSelectedOperator,
  };
  return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>;
}
