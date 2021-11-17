import React, { useEffect, useReducer } from "react";
import { getAllPaymentPackages } from "../../services/auth.service";
import { AuthReducer, CREDIT_CARD_TYPE, SET_ALL_PACKAGES, SET_COUNTRY_CODE , SET_LOGIN_OPERATORS}  from "./AuthReducers";

export const AuthContext = React.createContext(null);

export default function AuthProviderNew({ children }) {
    const [AuthState, dispatch] = useReducer(AuthReducer, {
        PaymentPackages: [],
        LoginOperators: [],
        CountryCode: "",
        ViewToShow : "sign-in",
        CreditCardType:null
    });

    useEffect(async () => {
        const packages = await getAllPaymentPackages();
        dispatch({ type: SET_ALL_PACKAGES, data: packages.PaymentPackages });
        dispatch({ type: SET_COUNTRY_CODE, data: packages.MobileCode });
        dispatch({ type: SET_LOGIN_OPERATORS, data: packages.LoginOperators });
        dispatch({ type: CREDIT_CARD_TYPE, data: packages.CreditCardType });
    }, []);
    const data = {
        AuthState,
        dispatch
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}