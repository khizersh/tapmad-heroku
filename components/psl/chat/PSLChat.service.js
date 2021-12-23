import { createRoom, deleteRoom, joinRoom } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { post } from "../../../services/http-service";
var db = "GroupChat-Dev";


export const getSingleRoomChat = (database, channelID, roomId, cb) => {
    database.ref(`${db}/${channelID}/${roomId}`).limitToLast(100).on("value", (snapshot) => {
        const vals = snapshot.val();
        cb(vals);
    })
}
export const removeListenerOfNonActiveChat = (database, channelID, roomId) => {
    database.ref(`${db}/${channelID}/${roomId}`).off("value");
}


export const sendGroupChatMessage = (database, chatDetails) => {
    const userId = Cookie.getCookies('userId');
    const name = Cookie.getCookies('userProfileName');
    const picture = Cookie.getCookies('userProfilePicture');
    database.ref(`${db}/${chatDetails.channelID}/${chatDetails.roomID}`).push({
        date: Date.now(),
        message: chatDetails.message,
        id: Number(userId),
        senderName: name,
        userProfile: picture == "null" ? "" : picture,
        type: chatDetails.type ? chatDetails.type : 3
    })
    // database.ref(`GroupChat/${chatDetails.roomID}`).set({});
}

export const createAChatRoom = async (body) => {
    const response = await post(createRoom, body);
    return response.data;
}

export const joinAChatRoom = async (body) => {
    const response = await post(joinRoom, body);
    return response.data;
}
export const deleteAChatRoom = async (body) => {
    const response = await post(deleteRoom, body);
    return response.data;
}