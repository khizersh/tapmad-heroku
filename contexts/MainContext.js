import React, { useEffect, useReducer } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { useRouter } from "next/router";

export const MainContext = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_OPERATOR":
      return { ...state, User: { ...state.User, OperatorId: action.data } };
    case "SET_SEARCH":
      return { ...state, isSearch: action.data };
    case "UPDATE_FULLNAME":
      return { ...state, User: { ...state.User, FullName: action.data } };
    case "UPDATE_EMAIL":
      return { ...state, User: { ...state.User, Email: action.data } };
    case "UPDATE_CNIC":
      return { ...state, User: { ...state.User, Cnic: action.data } };
    case "SET_PAYMENT_PACKAGES":
      return { ...state, AuthDetails: action.data };
    case "SET_AUTHENTICATION":
      return { ...state, isAuthenticated: action.data };
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
  }, []);

  function updateUserNumber(number) {
    dispatch({ type: "SET_USER_NUMBER", data: number });
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
    const userId = Cookie.getCookies("userId");
    const isAuthenticated = Cookie.getCookies("isAuth");
    if (userId && isAuthenticated && isAuthenticated == 1) {
      dispatch({ type: "SET_AUTHENTICATION", data: true });
      console.log("isAuthenticated: ", isAuthenticated);
      // router.push("/");
    }
  }

  function setisAuthenticateFalse() {
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
    updateUserOperator,
    updateUserCnic,
    updateUserFullName,
    updateUserEmail,
    setLoader,
    setisAuthenticateFalse,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
