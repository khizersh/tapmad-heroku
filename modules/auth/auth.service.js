import { Cookie } from "../../services/cookies";

function validateUser(data) {
  var user = data.User;
  if (user.UserId) {
    Cookie.setCookies("userId", user.UserId);
    if (user.IsSubscribe) {
      if (user.IsPinSet) {
        return "enter-pin";
      } else {
        return "send-otp";
      }
    } else {
      return "sign-up";
    }
  } else {
    return "sign-up";
  }
}

export const AuthService = {
  validateUser,
};
