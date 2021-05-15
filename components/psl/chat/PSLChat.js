import { useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "../../../contexts/FireBase";
import { getUserRooms } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { get } from "../../../services/http-service";
import { sendMessageIcon } from "../../../services/imagesLink";
import pslStyles from "./PSLChat.module.css";
import { getAllChatChannels, sendGroupChatMessage } from "./PSLChat.service";
export default function PSLChat({ channelID }) {
    const [chatRoom, setChatRooms] = useState([]);
    const [chats, setChats] = useState({});
    const { database } = useContext(FirebaseContext);
    const [room, setRoom] = useState(6);
    const textMessage = useRef();
    useEffect(() => {
        getUserAllRooms();
        return () => {
            // database.goOffline();
            // setChats({});
            // setRoom(0);
            // setChatRooms([]);
        }
    }, [])
    async function getUserAllRooms() {
        const userId = Cookie.getCookies('userId');
        const response = await get(getUserRooms(userId, channelID));
        if (response.data.Response.responseCode == 1) {
            setChatRooms(response.data.ChatRooms[0].Rooms);
            getAllChats()
        }
    }
    function getAllChats() {
        getAllChatChannels(database, channelID, (list) => {
            console.log("Chat channel ", list)
            setChats(list)
        })
    }
    function sendMessage() {
        var message = {
            message: textMessage.current.value,
            channelID: channelID,
            roomID: room,
        }
        if (message.message.trim() == "") {
            console.log(textMessage);
            textMessage.current.style.border = "1px solid red";
            setTimeout(() => {
                textMessage.current.style.border = "0px";
            }, 2000)
        } else {
            sendGroupChatMessage(database, message);
            textMessage.current.value = '';
            setTimeout(() => {
                document.getElementsByClassName('lastDiv')[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100)
        }

    }

    return <div>
        <div>
            <ul className={`nav nav-tabs d-flex ${pslStyles.noBorders}`}>
                {chatRoom.length > 0 ? chatRoom.map((room, index) => {
                    return <li className={`nav-item ${pslStyles.chatRoomList}`} key={index}>
                        <a className={pslStyles.chatRoomName}>{room.RoomName}</a>
                    </li>
                }) : null}

                {/* <li className="nav-item">
                    <a className={pslStyles.chatRoomName}>General</a>
                </li>
                <li className="nav-item">
                    <a className={pslStyles.chatRoomName}>General</a>
                </li>
                <li className="nav-item">
                    <a className={pslStyles.chatRoomName}>General</a>
                </li> */}
            </ul>
        </div>

        <div className={pslStyles.chatBox}>
            <div className={pslStyles.all_messages}>
                {chats[room] && Object.keys(chats[room]).map(function (keyName, keyIndex) {
                    return <div className="row" key={keyIndex}>
                        <div className="col-12">
                            <div className={pslStyles.insideChat}>
                                <div className={pslStyles.avatar}>
                                    <img src={chats[room][keyName].userProfile != "null" ? chats[room][keyName].userProfile : "https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"} width="40" style={{ borderRadius: '10px' }} />
                                </div> &nbsp;&nbsp;
                        <div className="message">
                                    <div>
                                        <small>{chats[room][keyName].userName}</small>
                                    </div>
                                    <div className={pslStyles.chatMessageBox}>
                                        {chats[room][keyName].textMessage}
                                    </div>
                                    <div>
                                        <small className={pslStyles.msgTime}>9:00 AM Today</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                <div className="lastDiv">
                </div>
            </div>
            <div className={pslStyles.userInput}>
                <div className={pslStyles.msgField}>
                    <div style={{ flex: "1" }}>
                        <textarea className={pslStyles.type_msg} ref={textMessage} placeholder="Type your message..."></textarea>
                    </div>
                    <div style={{ textAlign: "center", paddingLeft: '10px' }}>
                        <button className={pslStyles.sendMessage} onClick={sendMessage}>
                            <img src={sendMessageIcon} width="20" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}