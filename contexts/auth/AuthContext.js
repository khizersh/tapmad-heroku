import React, { useEffect, useReducer } from "react";
import { getAllPaymentPackages } from "../../services/auth.service";
import { AuthReducer, SET_ALL_PACKAGES, SET_COUNTRY_CODE } from "./AuthReducers";

export const AuthContext = React.createContext(null);

export default function AuthProviderNew({ children }) {
    const [AuthState, dispatch] = useReducer(AuthReducer, {
        PaymentPackages: [],
        CountryCode: "",
    });

    useEffect(async () => {
        let packages = await getAllPaymentPackages();
        dispatch({ type: SET_ALL_PACKAGES, data: packages.PaymentPackages });
        dispatch({ type: SET_COUNTRY_CODE, data: packages.MobileCode });
    }, []);

    return <AuthContext.Provider value={AuthState}>{children}</AuthContext.Provider>;
}