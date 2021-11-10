import React, { useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { SignUpReducer, UPDATE_PACKAGE } from "./SignUpReducer";

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
    });

    useEffect(() => {
        if (AuthState?.PaymentPackages?.length > 0) {
            dispatch({ type: UPDATE_PACKAGE, data: AuthState.PaymentPackages[0] })
        }
    }, [AuthState])

    const data = {
        dispatch,
        SignUpState
    }

    return <SignUpContext.Provider value={data}>{children}</SignUpContext.Provider>;
}