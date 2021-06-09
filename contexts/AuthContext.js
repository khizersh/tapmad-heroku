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
    newUser: false,
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
        selectedPackageAmount:
          initialState.AuthDetails?.PaymentMethods[0]?.Packages[0]
            ?.PackagePrice,
        selectedPackageName:
          initialState.AuthDetails?.PaymentMethods[0]?.Packages[0]?.PackageName,
      };
      setAuthState({ ...authState, ...AuthStateWithData });
    }
  }, [initialState.AuthDetails]);

  function updateSelectedPaymentMethod(method) {
    console.log(method);
    let stateClone = authState;
    if (method.PaymentId == 1) {
      var dbcPackage = method.Packages[0];
      setAuthState({
        ...stateClone,
        selectedPaymentMethod: method,
        selectedPackageId: dbcPackage.ProductId,
        selectedPackageAmount: dbcPackage.PackagePrice,
        selectedPackageName: dbcPackage.PackageName
      });
    } else {
      setAuthState({
        ...stateClone,
        selectedPaymentMethod: method,
      });
    }
  }

  function updateSelectedPackageId(id, amount, name) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      selectedPackageId: id,
      selectedPackageAmount: amount,
      selectedPackageName: name,
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
  function updateResponseCode(code, newUser = false) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      subscribeResponseCode: code,
      newUser: newUser,
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
