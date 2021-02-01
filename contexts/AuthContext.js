import React  , {useContext} from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { MainContext } from "./MainContext";

export const Authcontext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [authState, setAuthState] = React.useState({
    loginOperators: [],
    paymentMethods: [],
    selectedLoginOperator: null,
    selectedPaymentMethod: null,
  });

  const { initialState } = useContext(MainContext);
  React.useEffect(() => {
      
      if (initialState && initialState.AuthDetails) {
          console.log("initialState: in oc ", initialState);
      setAuthState({
        loginOperators: initialState.AuthDetails.LoginOperators,
        paymentMethods: initialState.AuthDetails.PaymentMethods,
        selectedPaymentMethod: initialState.AuthDetails.PaymentMethods[0],
      });
    }
  }, [initialState.AuthDetails]);

  function updateSelectedOperator(operator) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      selectedLoginOperator: operator
    });
  }
  function updateSelectedPaymentMethod(method) {
    let stateClone = authState;
    setAuthState({
      ...stateClone,
      selectedPaymentMethod: method
    });
  }

  let data = {
    authState,
    updateSelectedOperator,
    updateSelectedPaymentMethod,
  };
  return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>;
}
