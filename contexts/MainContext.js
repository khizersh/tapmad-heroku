import React from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";

export const MainContext = React.createContext(null);

export default function MainProvider({ children }) {
  const [initialState, setInitialState] = React.useState({
    isAuthenticated: false,
  });
  React.useEffect(async () => {
    var operators = await get(
      "https://api.tapmad.com/api/getAllPaymentMethodsPackages/V1/en/web"
    );
    let stateClone = initialState;
    setInitialState({ ...stateClone, AuthDetails: operators.data });
    checkUserAuthentication();
  }, []);
  function checkUserAuthentication() {
    const userId = Cookie.getCookies("userId");
    const isAuthenticated = Cookie.getCookies("isAuth");
    if (userId && isAuthenticated == 1) {
      let stateClone = initialState;
      setInitialState({ ...stateClone, isAuthenticated: true });
    }
  }
  let data = {
    initialState,
    checkUserAuthentication,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
