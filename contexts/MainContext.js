import React, { useEffect, useReducer } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { useRouter } from "next/router";
import { AuthService } from "../modules/auth/auth.service";
import { EPLPaymentUrl, PaymentPackages } from "../services/apilinks";

export const MainContext = React.createContext(null);

function reducer(state, action) {

  switch (action.type) {
    case "UPDATE_OPERATOR":
      return { ...state, User: { ...state.User, OperatorId: action.data } };
    case "SET_SEARCH":
      return { ...state, isSearch: action.data };
    case "UPDATE_FULLNAME":
      return { ...state, User: { ...state.User, FullName: action.data } };
    case "SET_USER_PASSWORD":
      return { ...state, User: { ...state.User, Password: action.data } };
    case "UPDATE_EMAIL":
      return { ...state, User: { ...state.User, Email: action.data } };
    case "UPDATE_CNIC":
      return { ...state, User: { ...state.User, Cnic: action.data } };
    case "SET_PAYMENT_PACKAGES":
      return { ...state, AuthDetails: action.data };
    case "SET_AUTHENTICATION":
      return { ...state, isAuthenticated: action.data };
    case "SET_COUNTRY_CODE":
      return { ...state, countryCode: action.data };
    case "UPDATE_PAYMENT_PACKAGE":
      return { ...state, currentPackage: action.data };
    case "SET_USER_NUMBER":
      return {
        ...state,
        User: { ...state.User, MobileNo: action.data },
      };
    case "SET_LOADER":
      return { ...state, loading: action.data };
    // will remove after epl
    case "SIGN_UP_LOADED":
      return { ...state, SignUpRendered: action.data };
  }
}
export default function MainProvider({ children }) {
  const router = useRouter();
  const [initialState, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    loading: false,
    isSearch: false,
    countryCode: "",
    SignUpRendered: false,
    User: {
      FullName: "",
      MobileNo: "",
      Cnic: "",
      OperatorId: "",
      Email: "",
    },
  });
  useEffect(async () => {
    try {
      var operators = await get(
        PaymentPackages
      );
      dispatch({ type: "SET_PAYMENT_PACKAGES", data: operators.data });
      checkUserAuthentication();
      const country = await AuthService.getGeoInfo();
      updateCountryCode(country.countryCode);
      updatePaymentPackage(operators?.data?.PaymentPackages[0]); 
    } catch (error) {
      console.log(error);
    }
   

  }, []);

  function updateCountryCode(code) {
    dispatch({ type: "SET_COUNTRY_CODE", data: code });
  }
  function updateUserNumber(number) {
    dispatch({ type: "SET_USER_NUMBER", data: number });
  }

  function updateUserPassword(password) {
    dispatch({ type: "SET_USER_PASSWORD", data: password });
  }
  function updateUserOperator(operator) {
    dispatch({ type: "UPDATE_OPERATOR", data: operator });
  }

  function updateUserCnic(cnic) {
    dispatch({ type: "UPDATE_CNIC", data: cnic });
  }
  function updateUserFullName(name) {
    dispatch({ type: "UPDATE_FULLNAME", data: name });
  }
  function updateUserEmail(email) {
    dispatch({ type: "UPDATE_EMAIL", data: email });
  }
  function updatePaymentPackage(packageDetails) {
    dispatch({ type: "UPDATE_PAYMENT_PACKAGE", data: packageDetails });
  }
  function checkUserAuthentication() {
    const token = Cookie.getCookies("content-token");
    const isAuth = Cookie.getCookies("isAuth");
    if (token && token.length > 50 && isAuth == 1) {
      dispatch({ type: "SET_AUTHENTICATION", data: true });
    } else {
      dispatch({ type: "SET_AUTHENTICATION", data: false });
    }
  }

  function getCountryCode() {
    if (initialState && initialState.AuthDetails) {
      return initialState.AuthDetails.CountryCode;
    } else {
      return "PK";
    }
  }
  function setisAuthenticateFalse() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    dispatch({ type: "SET_AUTHENTICATION", data: false });
  }
  function setLoader(bool) {
    dispatch({ type: "SET_LOADER", data: bool });
  }

  function setSearch(bool) {
    dispatch({ type: "SET_SEARCH", data: bool });
  }
  // will remove after epl
  function renderSignUp(bool) {
    dispatch({ type: "SIGN_UP_LOADED", data: bool })
  }
  let data = {
    initialState,
    setSearch,
    checkUserAuthentication,
    updateUserNumber,
    updateUserPassword,
    updateUserOperator,
    updateUserCnic,
    updateUserFullName,
    updateUserEmail,
    setLoader,
    setisAuthenticateFalse,
    getCountryCode,
    updateCountryCode,
    updatePaymentPackage,
    renderSignUp // will remove after epl
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
