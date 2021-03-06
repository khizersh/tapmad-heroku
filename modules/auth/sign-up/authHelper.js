import { Cookie } from "../../../services/cookies";
import { encryptWithAES } from "../../../services/utils";

export function handleRegisterPayload(SignUpState) {
  var details = {};
  if (SignUpState.SelectedMethod.PaymentId == 1) {
    details = handleBody(SignUpState);
    delete details.cnic;
  }
  if (SignUpState.SelectedMethod.PaymentId == 2) {
    details = handleBody(SignUpState);
    delete details.cnic;
  }
  if (SignUpState.SelectedMethod.PaymentId == 3) {
    details = handleBody(SignUpState);
    delete details.cnic;
  }
  if (SignUpState.SelectedMethod.PaymentId == 4) {
    details = handleBody(SignUpState);
  }
  if (SignUpState.SelectedMethod.PaymentId == 5) {
    details = handleBody(SignUpState);
  }
  return details;
}

export function handleBody(SignUpState) {
  return {
    Version: "V1",
    Language: "en",
    Platform: "web",
    ProductId: SignUpState?.SelectedPrice?.ProductId,
    MobileNo: SignUpState.UserDetails.MobileNo?.trim() || Cookie.getCookies('user_mob')?.trim(),
    OperatorId: SignUpState.UserDetails.Operator,
    cnic: SignUpState.UserDetails.Cnic?.trim(),
    Email: SignUpState.UserDetails.Email,
    FullName: SignUpState.UserDetails.FullName,
    PtclNo : SignUpState.UserDetails.Ptcl
  };
}

export function setCookiesForLogin(data) {
  Cookie.setCookies("content-token", data.User.jwtToken);
  Cookie.setCookies("isAuth", 1);
  Cookie.setCookies("userId", data.User.UserId);
  Cookie.setCookies("userCoins", data.UserTotalCoins);
  Cookie.setCookies("userProfileName", data.UserProfile.UserProfileFullName);
  Cookie.setCookies("userProfilePicture", data.UserProfile.UserProfilePicture);
}
