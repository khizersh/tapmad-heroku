import { useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "../../../contexts/FireBase";
import { getUserRooms } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { get } from "../../../services/http-service";
import { sendMessageIcon } from "../../../services/imagesLink";
import { CenteredModal } from "../../Modal";
import pslStyles from "./PSLChat.module.css";
import { getAllChatChannels, sendGroupChatMessage } from "./PSLChat.service";
import CreateJoinRoomModalBody from "./PSLChatModal";
var userId = "";
export default function PSLChat({ channelID }) {
    const [chatRoom, setChatRooms] = useState([]);
    const [chats, setChats] = useState({});
    const { database } = useContext(FirebaseContext);
    const [room, setRoom] = useState(6);
    const textMessage = useRef();
    const [modalShow, setModalShow] = useState(false);
    const [currentRoomOption, setCurrentRoomOption] = useState(0);
    useEffect(() => {
        if (database) {
            getUserAllRooms();
        }
        return () => {
            // database.goOffline();
            // setChats({});
            // setRoom(0);
            // setChatRooms([]);
        }
    }, [database]);

    async function getUserAllRooms() {
        userId = Cookie.getCookies('userId');
        const response = await get(getUserRooms(userId, channelID));
        if (response.data.Response.responseCode == 1) {
            setChatRooms(response.data.ChatRooms[0].Rooms);
            getAllChats();
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
                <li>
                    <button className="btn btn-dark btn-sm" onClick={() => setModalShow(true)}>+</button>
                </li>
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
                    setTimeout(() => {
                        document.getElementsByClassName('lastDiv')[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100)
                    return <div className="row" key={keyIndex}>
                        <div className="col-12">
                            <div className={pslStyles.insideChat} style={{ flexDirection: chats[room][keyName].userId == userId ? 'row-reverse' : '' }}>
                                <div className={pslStyles.avatar}>
                                    <img src={chats[room][keyName].userProfile != "null" ? chats[room][keyName].userProfile : "https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"} width="40" style={{ borderRadius: '10px' }} />
                                </div> &nbsp;&nbsp;
                                <div className="message">
                                    <div style={{ textAlign: chats[room][keyName].userId == userId ? 'right' : 'left' }}>
                                        <small>{chats[room][keyName].userName}</small>
                                    </div>
                                    <div className={pslStyles.chatMessageBox} style={{ background: chats[room][keyName].userId == userId ? 'rgb(135 194 66)' : 'white' }}>
                                        {chats[room][keyName].textMessage}
                                    </div>
                                    <div style={{ textAlign: chats[room][keyName].userId == userId ? 'right' : 'left' }}>
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
        <CenteredModal show={modalShow}
            onHide={() => (setModalShow(false), setCurrentRoomOption(0))}>
            <CreateJoinRoomModalBody channelId={channelID} />
        </CenteredModal>
    </div>
}