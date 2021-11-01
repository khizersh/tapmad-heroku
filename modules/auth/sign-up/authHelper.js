import { Cookie } from "../../../services/cookies";
import { encryptWithAES } from "../../../services/utils";

export function handleRegisterPayload(SignUpState){
    var details = {};
    if (SignUpState.SelectedMethod.PaymentId == 1) {
      details = handleBody(SignUpState);
      delete details.cnic;
    }
    if (SignUpState.SelectedMethod.PaymentId == 2) {
      details = handleBody(SignUpState);
      delete details.cnic;
      // delete details.ProductId;
    }
    if (SignUpState.SelectedMethod.PaymentId == 3) {
      details = handleBody(SignUpState);
      delete details.cnic;
    }
    if (SignUpState.SelectedMethod.PaymentId == 4) {
      details = handleBody(SignUpState);
    }
    return details;
}


function handleBody(SignUpState) {
    return {
      Version: "V1",
      Language: "en",
      Platform: "android",
      ProductId: SignUpState?.SelectedPrice?.ProductId,
      MobileNo: SignUpState.UserDetails.MobileNo,
      OperatorId: SignUpState.UserDetails.Operator,
      cnic: SignUpState.UserDetails.Cnic,
      Email: SignUpState.UserDetails.Email,
      FullName: SignUpState.UserDetails.FullName,
    };
  }


export function setCookiesForLogin(response){
  Cookie.setCookies("isAuth", 1);
  Cookie.setCookies("userId", response.data.UserId);
  Cookie.setCookies("userCoins", response.response.UserTotalCoins);
  Cookie.setCookies(
    "userProfileName",
    response.response.UserProfile.UserProfileFullName
  );
  Cookie.setCookies(
    "userProfilePicture",
    response.response.UserProfile.UserProfilePicture
  );
  Cookie.setCookies("user_mob", encryptWithAES(obj.MobileNo));
}