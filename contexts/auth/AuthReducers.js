export const SET_ALL_PACKAGES = "SET_ALL_PACKAGES";
export const CURRENT_USER_PACKAGE = "CURRENT_USER_PACKAGE";
export const SET_COUNTRY_CODE = "SET_COUNTRY_CODE";
export const SET_LOGIN_OPERATORS = "SET_LOGIN_OPERATORS";
export const SET_VIEW_TO_SHOW = "SET_VIEW_TO_SHOW";
export const CREDIT_CARD_TYPE = "CREDIT_CARD_TYPE";

export function AuthReducer(state, action) {
  switch (action.type) {
    case SET_ALL_PACKAGES:
      return { ...state, PaymentPackages: action.data };
    case SET_COUNTRY_CODE:
      return { ...state, CountryCode: action.data };
    case SET_LOGIN_OPERATORS:
      return { ...state, LoginOperators: action.data };
    case SET_VIEW_TO_SHOW:
      return { ...state, ViewToShow: action.data };
    case CREDIT_CARD_TYPE:
      return { ...state, CreditCardType: action.data };
    case CURRENT_USER_PACKAGE:
      return { ...state, CurrentUserPackage: action.data };
  }
}
