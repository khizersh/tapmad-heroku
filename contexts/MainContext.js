import React from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";

export const MainContext = React.createContext(null);

export default function MainProvider({ children }) {
  const [initialState, setInitialState] = React.useState({
    isAuthenticated: false,
    loading: false,
    User: {
      MobileNo: "",
      OperatorId: "",
    },
  });
  React.useEffect(async () => {
    var operators = await get(
      "https://api.tapmad.com/api/getAllPaymentMethodsPackages/V1/en/web"
    );
    let stateClone = initialState;
    setInitialState({ ...stateClone, AuthDetails: operators.data });
    checkUserAuthentication();
  }, []);

  function updateUserNumber(number) {
    let stateClone = initialState;
    setInitialState({
      ...stateClone,
      User: { ...stateClone.User, MobileNo: number },
    });
  }
  function updateUserOperator(operator) {
    let stateClone = initialState;
    setInitialState({
      ...stateClone,
      User: { ...stateClone.User, OperatorId: operator },
    });
  }
  function checkUserAuthentication() {
    const userId = Cookie.getCookies("userId");
    const isAuthenticated = Cookie.getCookies("isAuth");
    if (userId && isAuthenticated == 1) {
      let stateClone = { ...initialState };
      setInitialState({ ...stateClone, isAuthenticated: true });
    }
  }
  function setLoader(bool) {
    let stateClone = initialState;
    setInitialState({ ...stateClone, loading: bool });
  }
  let data = {
    initialState,
    checkUserAuthentication,
    updateUserNumber,
    updateUserOperator,
    setLoader,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
