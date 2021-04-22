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
export function SearchTag(body) {
    console.log(body);
    try {
        dataLayer.push({
            event: "search",
            search_term: body.term,
            search_count: body.data,
            search_result: body.result
        });
    } catch (e) {
        console.log(e);
    }
}