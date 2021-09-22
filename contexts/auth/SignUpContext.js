import React, { useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { SignUpReducer, UPDATE_PACKAGE } from "./SignUpReducer";

export const SignUpContext = React.createContext(null);

export default function SignUpProvider({ children }) {
    const { PaymentPackages } = useContext(AuthContext);
    const [SignUpState, dispatch] = useReducer(SignUpReducer, {
        SelectedPackage: {},
        SelectedPrice: {},
        SelectedMethod: {},
        UserDetails: {}
    });

    useEffect(() => {
        if (PaymentPackages.length > 0) {
            dispatch({ type: UPDATE_PACKAGE, data: PaymentPackages[0] })
        }
    }, [PaymentPackages])

    const data = {
        dispatch,
        SignUpState
    }

    return <SignUpContext.Provider value={data}>{children}</SignUpContext.Provider>;
}