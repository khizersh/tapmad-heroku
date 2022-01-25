import React, { useContext, useEffect, useReducer } from "react";
import { AuthService } from "../../modules/auth/auth.service";
import { Cookie } from "../../services/cookies";
import { MainContext } from "../MainContext";
import { AuthContext } from "./AuthContext";
import {
  SignUpReducer,
  UPDATE_ISMOBILE,
  UPDATE_PACKAGE,
  UPDATE_USER_DETAILS,
  PAYMENT_OPERATOR,
  LOGIN_OPERATOR,
  USER_COUNTRY,
} from "./SignUpReducer";

export const SignUpContext = React.createContext(null);

export default function SignUpProvider({ children }) {
  const { AuthState } = useContext(AuthContext);
  const { setLoader } = useContext(MainContext);

  const [SignUpState, dispatch] = useReducer(SignUpReducer, {
    SelectedPackage: {},
    SelectedPrice: {},
    SelectedMethod: {},
    LoginOperator: {},
    UserDetails: {},
    subscribeResponseCode: null,
    newUser: false,
    isMobile: false,
    signupRender: false,
  });

  useEffect(() => {
    setLoader(true);
    if (AuthState?.PaymentPackages?.length > 0) {
      dispatch({ type: UPDATE_PACKAGE, data: AuthState.PaymentPackages[0] });
    }
    if (AuthState?.LoginOperators?.length > 0) {
      dispatch({ type: LOGIN_OPERATOR, data: AuthState.LoginOperators });
    }
    if (window.innerWidth < 799) {
      dispatch({ type: UPDATE_ISMOBILE, data: true });
    }
    const num = Cookie.getCookies("user_mob");
    if (num) {
      dispatch({ type: UPDATE_USER_DETAILS, data: { MobileNo: num } });
    }
    if (AuthState?.authContextLoaded) {
      setLoader(false);
    }
  }, [AuthState]);

  useEffect(() => {
    AuthService.getAllowRegionsList()
      .then((res) => {
        if (res.responseCode == 1) {
          const currentCountry = res.UserCountry;
          const result = res.data.find(
            (countries) => countries.ShortName == currentCountry
          );
          dispatch({ type: USER_COUNTRY, data: result });
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const data = {
    dispatch,
    SignUpState,
  };

  return (
    <SignUpContext.Provider value={data}>{children}</SignUpContext.Provider>
  );
}
