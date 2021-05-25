import { useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "../../../contexts/FireBase";
import { getUserRooms } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { get } from "../../../services/http-service";
import { sendMessageIcon } from "../../../services/imagesLink";
import { CenteredModal } from "../../Modal";
import pslStyles from "./PSLChat.module.css";
import { deleteAChatRoom, getAllChatChannels, sendGroupChatMessage } from "./PSLChat.service";
import CreateJoinRoomModalBody from "./PSLChatModal";
var userId = "";
export default function PSLChat({ channelID }) {
    const [chatRoom, setChatRooms] = useState([]);
    const [chats, setChats] = useState({});
    const { database } = useContext(FirebaseContext);
    const [room, setRoom] = useState(1);
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

    function appendChatRoom(newRoom) {
        if (Array.isArray(newRoom)) {
            setChatRooms(newRoom);
            setRoom(newRoom[newRoom.length - 1].ChatRoomId);

        } else {
            var chatRoomClone = chatRoom;
            chatRoomClone.push(newRoom);

            setChatRooms(chatRoomClone);
            setRoom(newRoom.ChatRoomId);
            console.log(newRoom);
            console.log(chatRoomClone);
        }
        setModalShow(false)

    }
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
            if (list != null) {
                setChats(list)
            } else {
                // alert("Woah")
            }
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
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    function getDayTime(timestamp) {
        var day = new Date(timestamp).toLocaleDateString('en-US', { weekday: 'long' });
        var time = formatAMPM(new Date(timestamp));
        return day + " " + time;
    }
    async function deleteRoom(room) {
        var body = {
            "Version": "V1",
            "Language": "en",
            "Platform": "Android",
            "UserId": Cookie.getCookies('userId'),
            "ChatLink": room.ChatLink
        }
        await deleteAChatRoom(body);
        var chatRoomClone = chatRoom.filter((e) => e.ChatRoomId != room.ChatRoomId);
        setChatRooms(chatRoomClone);
        setRoom(chatRoomClone[chatRoomClone.length - 1].ChatRoomId);

    }
    return <div>
        <div>
            <ul className={`nav nav-tabs d-flex ${pslStyles.noBorders}`}>
                {chatRoom.length > 0 ? chatRoom.map((roomData, index) => {
                    return <li className={`nav-item ${pslStyles.chatRoomList}`} key={index} onClick={() => setRoom(roomData.ChatRoomId)}>
                        <a className={pslStyles.chatRoomName} style={{ borderBottomColor: room == roomData.ChatRoomId ? null : 'grey' }}><span className={pslStyles.chatSpan}>{roomData.RoomName}</span>
                            {room == roomData.ChatRoomId && room != 1 ? <i className={`fa fa-times ${pslStyles.crossIcon}`} onClick={() => deleteRoom(roomData)}></i> : null}
                        </a>
                    </li>
                }) : null}
                <li className={pslStyles.plusBtn} onClick={() => setModalShow(true)}>
                    <a className={`btn btn-dark btn-sm ${pslStyles.aaa}`} >

                    </a>
                    <span className={pslStyles.add_plus}>+</span>
                </li>
            </ul>
        </div>
        <div className={pslStyles.chatBox}>
            <div className={pslStyles.all_messages}>

                {chats && chats[room] && Object.keys(chats[room]).map(function (keyName, keyIndex) {
                    setTimeout(() => {
                        document.getElementsByClassName('lastDiv')[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

                    }, 100)
                    return <div className="row" key={keyIndex}>
                        <div className="col-12">
                            <div className={pslStyles.insideChat} style={{ flexDirection: chats[room][keyName].id == userId ? 'row-reverse' : '' }}>
                                <div className={pslStyles.avatar}>
                                    <img src={chats[room][keyName].userProfile != "" ? chats[room][keyName].userProfile : "https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"} width="40" style={{ borderRadius: '10px' }} />
                                </div> &nbsp;&nbsp;
                                <div className="message">
                                    <div style={{ textAlign: chats[room][keyName].id == userId ? 'right' : 'left' }}>
                                        <small>{chats[room][keyName].senderName}</small>
                                    </div>
                                    <div className={pslStyles.chatMessageBox} style={{ background: chats[room][keyName].id == userId ? 'rgb(135 194 66)' : 'white' }}>
                                        {chats[room][keyName].message}
                                    </div>
                                    <div style={{ textAlign: chats[room][keyName].id == userId ? 'right' : 'left' }}>
                                        <small className={pslStyles.msgTime}>{getDayTime(chats[room][keyName].date)}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                {/* <div id="lastDiv">
                </div> */}
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
            <CreateJoinRoomModalBody channelId={channelID} mergeRoom={(e) => appendChatRoom(e)} />
        </CenteredModal>
    </div>
}