import { getUserDetails } from "./utils";

export function LoginTag(body, resp) {
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
            product_id: body.ProductId,
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
    const { mobile, userId } = getUserDetails();
    try {
        dataLayer.push({
            event: "search",
            search_term: body.term,
            search_count: body.data,
            search_result: body.result,
            msisdn: mobile,
            user_id: userId
        });
    } catch (e) {
        console.log(e);
    }
}
export function ContentViewed(video) {
    const { mobile, userId } = getUserDetails();
    try {
        dataLayer.push({ event: "content_viewed", Name: video.VideoName, user_id: userId, "msisdn": mobile, ID: video.VideoEntityId });
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
        const { mobile, userId } = getUserDetails();

        dataLayer.push({
            event: "video_watched",
            ID: response.Video.VideoEntityId,
            Name: response.Video.VideoName,
            Genre: Genre.toString(),
            Category: response.Video.productioncategoryName,
            Productionhouse: response.Video.productionhouseName,
            msisdn: mobile,
            user_id: userId
        });
    }
}
export function ProfileViewed() {
    const { mobile, userId } = getUserDetails();
    dataLayer.push({
        event: "Viewed_Profile",
        user_id: userId,
        msisdn: mobile
    });
}
export function UpdateProfile(profile) {
    const { mobile, userId } = getUserDetails();
    dataLayer.push({
        event: "Profile_Update",
        user_id: userId,
        msisdn: mobile,
        email: profile.Email,
        name: profile.FullName
    });
}

export function SignOut() {
    dataLayer.push({
        event: "sign_out",
        Platform: "web"
    });
}