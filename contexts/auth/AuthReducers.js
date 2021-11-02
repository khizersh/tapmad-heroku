export const SET_ALL_PACKAGES = "SET_ALL_PACKAGES";
export const SET_COUNTRY_CODE = "SET_COUNTRY_CODE";
export const SET_LOGIN_OPERATORS = "SET_LOGIN_OPERATORS";
export function AuthReducer(state, action) {
    switch (action.type) {
        case SET_ALL_PACKAGES:
            return { ...state, PaymentPackages: action.data };
        case SET_COUNTRY_CODE:
            return { ...state, CountryCode: action.data }
        case SET_LOGIN_OPERATORS:
            return { ...state, LoginOperators: action.data }
    }
}