import React, { useEffect, useReducer } from "react";
import {
  getAllPaymentPackages,
  getAllPaymentPackagesByUserId,
} from "../../services/auth.service";
import { Cookie } from "../../services/cookies";
import {
  AuthReducer,
  CREDIT_CARD_TYPE,
  CURRENT_USER_PACKAGE,
  SET_ALL_PACKAGES,
  SET_COUNTRY_CODE,
  SET_LOGIN_OPERATORS,
} from "./AuthReducers";

export const AuthContext = React.createContext(null);

export default function AuthProviderNew({ children }) {
  const [AuthState, dispatch] = useReducer(AuthReducer, {
    PaymentPackages: [],
    LoginOperators: [],
    CountryCode: "",
    ViewToShow: "sign-in",
    CreditCardType: null,
    UpdatePackage: false,
    CurrentUserPackage: null,
  });

  useEffect(async () => {
    var packages;
    let userId = Cookie.getCookies("userId");
    const pathname = window?.location?.pathname;
    if (AuthState.UpdatePackage && userId || pathname.includes("change-package")) {
      packages = await getAllPaymentPackagesByUserId(userId);
      dispatch({type: CURRENT_USER_PACKAGE,data: packages.CurrentPackageDescription});
    } else {
      packages = await getAllPaymentPackages();
    }
    dispatch({ type: SET_ALL_PACKAGES, data: packages.PaymentPackages });
    dispatch({ type: SET_COUNTRY_CODE, data: packages.MobileCode });
    dispatch({ type: SET_LOGIN_OPERATORS, data: packages.LoginOperators });
    dispatch({ type: CREDIT_CARD_TYPE, data: packages.CreditCardType });
  }, [AuthState.UpdatePackage]);

  const data = {
    AuthState,
    dispatch,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
