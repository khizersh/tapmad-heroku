export const SET_ALL_PACKAGES = "SET_ALL_PACKAGES";
export const CURRENT_USER_PACKAGE = "CURRENT_USER_PACKAGE";
export const UPDATE_PACKAGE = "UPDATE_PACKAGE";
export const SET_COUNTRY_CODE = "SET_COUNTRY_CODE";
export const SET_LOGIN_OPERATORS = "SET_LOGIN_OPERATORS";
export const SET_VIEW_TO_SHOW = "SET_VIEW_TO_SHOW";
export const CREDIT_CARD_TYPE = "CREDIT_CARD_TYPE";
export const CALL_CHANGE_PACKAGE_API = "CALL_CHANGE_PACKAGE_API";

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
    case UPDATE_PACKAGE:
      return { ...state, UpdatePackage: action.data };
    case CALL_CHANGE_PACKAGE_API:
      return { ...state, callChangePackageApi: action.data };
  }
}
