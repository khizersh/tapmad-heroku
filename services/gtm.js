export function LoginTag(body, resp) {
    console.log(body, resp);
    try {
        dataLayer.push({
            event: "login",
            product_id: resp.UserActiveSubscription[0].UserPackageType,
            device_category: "Web_Mobile",
            response: resp.Response.message,
            user_id: resp.User.UserId,
            telco: body.OperatorId,
            msisdn: resp.UserProfile.UserProfileMobile,
        });
    } catch (e) {
        console.log(e);
    }
}
export function SignUpTag(body, resp) {
    try {
        dataLayer.push({
            event: "sign_up",
            product_id: resp.UserActiveSubscription[0].UserPackageType,
            device_category: "Web_Mobile",
            response: resp.Response.message,
            user_id: resp.User.UserId,
            telco: body.OperatorId,
            msisdn: body.MobileNo,
        });
    } catch (e) {
        console.log(e);
    }
}
export function SearchTag() {
    try {
        dataLayer.push({
            event: "search",
            product_id: "0",
            device_category: "Web_Mobile",
            response: {},
            user_id: "123",
            tracking: "Registered User 1294",
            telco: "100004",
        });
    } catch (e) {
        console.log(e);
    }
}