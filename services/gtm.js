import { Cookie } from "./cookies";
import { decryptWithAES } from "./utils";

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
export function ContentViewed(video) {
    var mobile = Cookie.getCookies("user_mob");
    var userId = Cookie.getCookies("userId");
    try {
        dataLayer.push({ "event": "content_viewed", "Name": video.VideoName, "user_id": userId, "msisdn": mobile, "ID": video.VideoEntityId });
    } catch (e) {
        console.log(e);
    }
}
export function VideoWatched(response) {
    if (response.Video && response.Video.getProductiongenreName) {
        var Genre = [];
        response.Video.getProductiongenreName.forEach((e) => {
            Genre.push(e.genraName);
        });
        dataLayer.push({
            event: "video_watched",
            ID: response.Video.VideoEntityId,
            Name: response.Video.VideoName,
            Genre: Genre.toString(),
            Category: response.Video.productioncategoryName,
            Productionhouse: response.Video.productionhouseName,
        });
    }
}