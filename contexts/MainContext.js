import React from "react";
import { get } from "../services/http-service";
export const MainContext = React.createContext(null);

export default function MainProvider({ children }) {
  const [initialState, setInitialState] = React.useState({});
  React.useEffect(async () => {
    var operators = await get(
      "https://api.tapmad.com/api/getAllPaymentMethodsPackages/V1/en/web"
    );
    let stateClone = initialState;
    setInitialState({ ...stateClone, AuthDetails: operators.data });
  }, []);
  return (
    <MainContext.Provider value={initialState}>{children}</MainContext.Provider>
  );
}
