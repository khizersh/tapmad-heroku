import { createRoom } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { post } from "../../../services/http-service";

export const getAllChatChannels = (database, channelID, cb) => {
    database.ref(`GroupChat/${channelID}`).on("value", (snapshot) => {
        const vals = snapshot.val();
        cb(vals);
    })
}

export const sendGroupChatMessage = (database, chatDetails) => {
    const userId = Cookie.getCookies('userId');
    const name = Cookie.getCookies('userProfileName');
    const picture = Cookie.getCookies('userProfilePicture');
    database.ref(`GroupChat/${chatDetails.channelID}/${chatDetails.roomID}`).push({
        dateTime: Date.now(),
        textMessage: chatDetails.message,
        userId: userId,
        userName: name,
        userProfile: picture
    })
}

export const createAChatRoom = async (body) => {
    const response = await post(createRoom, body);
    return response.data;
}