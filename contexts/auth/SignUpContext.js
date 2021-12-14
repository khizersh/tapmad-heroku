import React, { useContext, useEffect, useReducer } from "react";
import { Cookie } from "../../services/cookies";
import { AuthContext } from "./AuthContext";
import {
  SignUpReducer,
  UPDATE_ISMOBILE,
  UPDATE_PACKAGE,
  UPDATE_USER_DETAILS,
} from "./SignUpReducer";

export const SignUpContext = React.createContext(null);

export default function SignUpProvider({ children }) {
  const { AuthState } = useContext(AuthContext);

  const [SignUpState, dispatch] = useReducer(SignUpReducer, {
    SelectedPackage: {},
    SelectedPrice: {},
    SelectedMethod: {},
    UserDetails: {},
    subscribeResponseCode: null,
    newUser: false,
    isMobile: false,
    signupRender: false,
  });

  // useEffect(() => {
  //   if (AuthState?.PaymentPackages?.length > 0) {
  //     dispatch({ type: UPDATE_PACKAGE, data: AuthState.PaymentPackages[0] });
  //   }
  // }, [AuthState]);

  useEffect(() => {
    if (AuthState?.PaymentPackages?.length > 0) {
      dispatch({ type: UPDATE_PACKAGE, data: AuthState.PaymentPackages[0] });
    }
    if (window.innerWidth < 799) {
      dispatch({ type: UPDATE_ISMOBILE, data: true });
    }
    const num = Cookie.getCookies("user_mob");
    if (num) {
      dispatch({ type: UPDATE_USER_DETAILS, data: { MobileNo: num } });
    }
  }, [AuthState]);

  const data = {
    dispatch,
    SignUpState,
  };

  return (
    <SignUpContext.Provider value={data}>{children}</SignUpContext.Provider>
  );
}
