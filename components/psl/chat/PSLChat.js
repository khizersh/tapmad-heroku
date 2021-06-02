import { useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "../../../contexts/FireBase";
import { getUserRooms } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { get } from "../../../services/http-service";
import { sendMessageIcon, shareIcon, userProfile } from "../../../services/imagesLink";
import { CenteredModal } from "../../Modal";
import pslStyles from "./PSLChat.module.css";
import { deleteAChatRoom, getAllChatChannels, sendGroupChatMessage } from "./PSLChat.service";
import CreateJoinRoomModalBody from "./PSLChatModal";
var userId = "";


export default function PSLChat({ channelID }) {
    const [chatRoom, setChatRooms] = useState([]);
    const [chats, setChats] = useState({});
    const firbase = useContext(FirebaseContext);
    const [room, setRoom] = useState(10000);
    const textMessage = useRef();
    const [modalShow, setModalShow] = useState(false);
    const [currentRoomOption, setCurrentRoomOption] = useState(0);
    useEffect(() => {
        if (firbase && firbase.database) {
            getUserAllRooms();
        }
        return () => {
            // database.goOffline();
            // setChats({});
            // setRoom(0);
            // setChatRooms([]);
        }
    }, [firbase]);
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
        // setModalShow(false)

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

        getAllChatChannels(firbase.database, channelID, (list) => {
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
            sendGroupChatMessage(firbase.database, message);
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
    async function shareOnSocial() {
        if (navigator.share) {
            const shareData = {
                title: 'Watch HBL PSL 6',
                text: 'Watch HBL PSL 6',
                url: window.location.href,
            }
            await navigator.share(shareData)
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert("Device can not share");
        }
    }

    useEffect(() => {
        const header = document.getElementById("chat-margin");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add(pslStyles.margChat);

            } else {
                header.classList.remove(pslStyles.margChat);

            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return <div id="chat-margin">
        <div className={pslStyles.tabhight}>
            <ul className={`nav nav-tabs d-flex ${pslStyles.noBorders}`}>
                {chatRoom.length > 0 ? chatRoom.map((roomData, index) => {
                    return <li className={`nav-item ${pslStyles.chatRoomList}`} key={index} onClick={() => setRoom(roomData.ChatRoomId)}>
                        <a className={pslStyles.chatRoomName} style={{ border: room == roomData.ChatRoomId ? null : '1px solid #66aa33', backgroundColor: room == roomData.ChatRoomId ? null : '#231f20' }}>{roomData.RoomName}
                            {room == roomData.ChatRoomId && room != 1 ? <i className={`fa fa-times ${pslStyles.crossIcon}`} onClick={() => deleteRoom(roomData)}></i> : null}
                        </a>
                    </li>
                }) : null}
                <li className={pslStyles.plusBtn} onClick={() => setModalShow(true)}>
                    <a className={`btn btn-dark btn-sm ${pslStyles.addGroup}`} >

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
                                    {/* <img src={chats[room][keyName].userProfile != "" ? chats[room][keyName].userProfile : { userProfile }} width="40" style={{ borderRadius: '10px' }} /> */}
                                    <img src={userProfile} width="40" style={{ borderRadius: '10px' }} />
                                </div> &nbsp;&nbsp;

                                <div className="message">
                                    <div style={{ textAlign: chats[room][keyName].id == userId ? 'right' : 'left' }}>
                                        {chats[room][keyName].id == userId ? <>
                                            <small className={pslStyles.msgProfile}>{chats[room][keyName].senderName}</small> &nbsp;&nbsp;&nbsp; <small className={pslStyles.msgTime}>{getDayTime(chats[room][keyName].date)}</small></> : <> <small className={pslStyles.msgTime}>{getDayTime(chats[room][keyName].date)}</small> &nbsp;&nbsp;&nbsp; <small className={pslStyles.msgProfile}>{chats[room][keyName].senderName}</small></>
                                        }

                                    </div>
                                    <div className={pslStyles.chatMessageBox} style={{ background: chats[room][keyName].id == userId ? '#ffffff00' : '#ffffff00' }, { textAlign: chats[room][keyName].id == userId ? 'right' : 'left' }}>
                                        {chats[room][keyName].message}
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
                        <button className={pslStyles.shareChat} onClick={shareOnSocial}>
                            <img className={pslStyles.shareIcon} src={shareIcon} />
                        </button>
                    </div>
                    <div style={{ textAlign: "center", paddingLeft: '10px' }}>
                        <button className={pslStyles.sendMessage} onClick={sendMessage}>
                            <img className={pslStyles.shareIcon} src={sendMessageIcon} />
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