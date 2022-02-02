import React, { useContext, useEffect, useReducer } from "react";
import {
  getAllPaymentPackages,
  getAllPaymentPackagesByUserId,
} from "../../services/auth.service";
import { Cookie } from "../../services/cookies";
import { MainContext } from "../MainContext";
import {
  AuthReducer,
  AUTH_CONTEXT_LOADED,
  CREDIT_CARD_TYPE,
  CURRENT_USER_PACKAGE,
  SET_ALL_PACKAGES,
  SET_COUNTRY_CODE,
  SET_LOGIN_OPERATORS,
} from "./AuthReducers";

export const AuthContext = React.createContext(null);

export default function AuthProviderNew({ children }) {
  const { setLoader } = useContext(MainContext);

  const [AuthState, dispatch] = useReducer(AuthReducer, {
    PaymentPackages: [],
    LoginOperators: [],
    CountryCode: "",
    ViewToShow: "sign-in",
    CreditCardType: null,
    UpdatePackage: false,
    CurrentUserPackage: null,
    callChangePackageApi: false,
    authContextLoaded: false,
  });
  useEffect(async () => {
    var packages;
    let userId = Cookie.getCookies("userId");
    const pathname = window?.location?.pathname;
    if (
      (AuthState.UpdatePackage && userId) ||
      pathname.includes("change-package") ||
      (AuthState.callChangePackageApi && userId)
    ) {
      packages = await getAllPaymentPackagesByUserId(userId);
      dispatch({
        type: CURRENT_USER_PACKAGE,
        data: packages.CurrentPackageDescription,
      });
    } else {
      packages = await getAllPaymentPackages();
    }
    console.log("packages : ",packages);
    if (packages.Response.responseCode == 1) {
      dispatch({ type: SET_ALL_PACKAGES, data: packages.PaymentPackages });
      dispatch({ type: SET_COUNTRY_CODE, data: packages.MobileCode });
      dispatch({ type: SET_LOGIN_OPERATORS, data: packages.LoginOperators });
      dispatch({ type: CREDIT_CARD_TYPE, data: packages.CreditCardType });
      dispatch({ type: AUTH_CONTEXT_LOADED, data: true });
    } else {
      dispatch({ type: AUTH_CONTEXT_LOADED, data: true });
    }
  }, [AuthState.UpdatePackage, AuthState.callChangePackageApi === true]);

  const data = {
    AuthState,
    dispatch,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
