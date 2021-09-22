export const UPDATE_PACKAGE = "UPDATE_PACKAGE";
export const UPDATE_PAYMENT_PRICE = "UPDATE_PAYMENT_PRICE";
export const UPDATE_PAYMENT_METHOD = "UPDATE_PAYMENT_METHOD";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";

export function SignUpReducer(state, action) {
    switch (action.type) {
        case UPDATE_PACKAGE:
            return { ...state, SelectedPackage: action.data };
        case UPDATE_PAYMENT_PRICE:
            return { ...state, SelectedPrice: action.data };
        case UPDATE_PAYMENT_METHOD:
            return { ...state, SelectedMethod: action.data };
        case UPDATE_USER_DETAILS:
            return { ...state, UserDetails: { ...state.UserDetails, ...action.data } }
    }
}