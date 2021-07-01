import React, { useEffect, useReducer } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { useRouter } from "next/router";
import { AuthService } from "../modules/auth/auth.service";

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
    case "SET_USER_NUMBER":
      return {
        ...state,
        User: { ...state.User, MobileNo: action.data },
      };
    case "SET_LOADER":
      return { ...state, loading: action.data };
  }
}
export default function MainProvider({ children }) {
  const router = useRouter();
  const [initialState, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    loading: false,
    isSearch: false,
    countryCode: "",
    User: {
      FullName: "",
      MobileNo: "",
      Cnic: "",
      OperatorId: "",
      Email: "",
    },
  });
  useEffect(async () => {
    var operators = await get(
      "https://api.tapmad.com/api/getAllPaymentMethodsPackages/V1/en/web"
    );
    dispatch({ type: "SET_PAYMENT_PACKAGES", data: operators.data });

    checkUserAuthentication();
    const country = await AuthService.getGeoInfo();
    updateCountryCode(country.countryCode);

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
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
