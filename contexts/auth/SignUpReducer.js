export const UPDATE_PACKAGE = "UPDATE_PACKAGE";
export const UPDATE_PAYMENT_PRICE = "UPDATE_PAYMENT_PRICE";
export const UPDATE_PAYMENT_METHOD = "UPDATE_PAYMENT_METHOD";
export const UPDATE_SUBSCRIBE_RESPONSE = "UPDATE_SUBSCRIBE_RESPONSE";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const UPDATE_ISMOBILE = "UPDATE_ISMOBILE";
export const SIGNUP_RENDER = "SIGNUP_RENDER";
export const LOGIN_OPERATOR = "LOGIN_OPERATOR";
export const LOGGED_IN = "LOGGED_IN";
export const ALREADY_SIGNEDUP_NUM = "ALREADY_SIGNEDUP_NUM";

export function SignUpReducer(state, action) {
  switch (action.type) {
    case UPDATE_PACKAGE:
      return { ...state, SelectedPackage: action.data };
    case ALREADY_SIGNEDUP_NUM:
      return { ...state, AlreadySignedUpNum: action.data };
    case UPDATE_PAYMENT_PRICE:
      return { ...state, SelectedPrice: action.data };
    case UPDATE_ISMOBILE:
      return { ...state, isMobile: action.data };
    case UPDATE_PAYMENT_METHOD:
      return { ...state, SelectedMethod: action.data };
    case LOGIN_OPERATOR:
      return { ...state, LoginOperator: action.data };
    case LOGGED_IN:
      return { ...state, LoggedIn: action.data };
    case UPDATE_SUBSCRIBE_RESPONSE:
      return {
        ...state,
        subscribeResponseCode: action.data.code,
        newUser: action.data.newUser,
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        UserDetails: { ...state.UserDetails, ...action.data },
      };
    case SIGNUP_RENDER:
      return { ...state, signupRender: action.data };
  }
}
