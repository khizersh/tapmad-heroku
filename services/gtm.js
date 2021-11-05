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
            name: resp.UserProfile.UserProfileFullName
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
    console.log("Content Viewed ", video);
    const { mobile, userId } = getUserDetails();
    try {
        dataLayer.push({ event: "content_viewed", Name: video.VideoName, SmallImage: video.VideoImagePath, user_id: userId, "msisdn": mobile, ID: video.VideoEntityId });
    } catch (e) {
        console.log(e);
    }
}
export function VideoWatched(response) {
    try {
        const duration = jwplayer().getDuration() / 60;

        if (response.Video && response.Video.getProductiongenreName) {
            var Genre = [];
            var newGenre = [];
            response.Video.getProductiongenreName.forEach((e) => {
                Genre.push(e.genraName);
            });
            response.Video.getProductionNewgenreName.forEach((e) => {
                newGenre.push(e.newGenraName);
            });
            const { mobile, userId } = getUserDetails();

            dataLayer.push({
                event: "video_watched",
                ID: response.Video.VideoEntityId,
                Name: response.Video.VideoName,
                Genre: Genre.toString(),
                NewGenre: newGenre.toString(),
                Category: response.Video.productioncategoryName,
                Productionhouse: response.Video.productionhouseName,
                msisdn: mobile,
                user_id: userId,
                Region: response.Video.RegionName,
                Format: response.Video.FormatName,
                SmallImage: response.Video.VideoImagePath,
                Duration: duration
            });
        }
    } catch (e) {
        console.log(e);
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
export function UserEngagemnent(pageName, sectionName, index, vodName) {
    const { mobile, userId } = getUserDetails();
    dataLayer.push({ "event": "User_Engagement", "Row Name": sectionName, "Page Name": pageName, "Icon Number": index, "Icon Name": vodName, "user_id": userId, "msisdn": mobile })
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

export function VideoQuartile(response, percent, vOd) {
    const { mobile, userId } = getUserDetails();
    const duration = jwplayer().getDuration() / 60;
    try {
        if (response.Video && response.Video.getProductiongenreName) {
            var Genre = [];
            var newGenre = [];
            response.Video.getProductiongenreName.forEach((e) => {
                Genre.push(e.genraName);
            });
            response.Video.getProductionNewgenreName.forEach((e) => {
                newGenre.push(e.newGenraName);
            });
            dataLayer.push({
                event: "videoQuartile", ID: response.Video.VideoEntityId, Name: response.Video.VideoName, duration: duration, watchedQuartile: percent, Category: response.Video.productioncategoryName, Productionhouse: response.Video.productionhouseName, Format: response.Video.FormatName, Region: response.Video.RegionName, Genre: Genre.toString(), user_id: userId, msisdn: mobile, NewGenre: newGenre.toString(),
            });
            dataLayer.push({ "event": vOd, ID: response.Video.VideoEntityId, Name: response.Video.VideoName, duration: duration, watchedQuartile: percent, Category: response.Video.productioncategoryName, Productionhouse: response.Video.productionhouseName, Format: response.Video.FormatName, Region: response.Video.RegionName, Genre: Genre.toString(), user_id: userId, msisdn: mobile, NewGenre: newGenre.toString(), })
        }
    } catch (e) {
        console.log(e)
    }
}
export function UserSessions() {
    const { mobile, userId } = getUserDetails();
    window.onload = function () {
        var isSessionTrue = sessionStorage.getItem('session');
        if (isSessionTrue) {
            return;
        } else {
            dataLayer.push({ event: 'Session Start', "Landing Page URL": window.location.href, "UserId": userId, "Mobile No": mobile });
            sessionStorage.setItem("session", true);
        }
    };
}
export function AdImpression() {
    dataLayer.push({ "event": "adImpression" })
}