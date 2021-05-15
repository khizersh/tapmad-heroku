import { useEffect, useState } from "react";
import { getUserRooms } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { get } from "../../../services/http-service";
import { sendMessage } from "../../../services/imagesLink";
import pslStyles from "./PSLChat.module.css";
export default function PSLChat({ channelID }) {
    const [chatRoom, setChatRooms] = useState([]);
    useEffect(() => {
        getUserAllRooms();
    }, [])
    async function getUserAllRooms() {
        const userId = Cookie.getCookies('userId');
        const response = await get(getUserRooms(userId, channelID));
        if (response.data.Response.responseCode == 1) {
            setChatRooms(response.data.ChatRooms[0].Rooms)
        }
    }
    return <div>
        <div>
            <ul className={`nav nav-tabs d-flex ${pslStyles.noBorders}`}>
                {chatRoom.length > 0 ? chatRoom.map((room) => {
                    return <li className={`nav-item ${pslStyles.chatRoomList}`}>
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
            <div className="row">
                <div className="col-12">
                    <div className={pslStyles.insideChat}>
                        <div className={pslStyles.avatar}>
                            <img src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png" width="40" style={{ borderRadius: '10px' }} />
                        </div> &nbsp;&nbsp;
                        <div className="message">
                            <div>
                                <small>Ali Memon</small>
                            </div>
                            <div className={pslStyles.chatMessageBox}>
                                Thanks you so much for not providing my design. Thanks you so much for not providing my design
                            </div>
                            <div>
                                <small className={pslStyles.msgTime}>9:00 AM Today</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={pslStyles.userInput}>
                <div className={pslStyles.msgField}>
                    <div style={{ flex: "1" }}>
                        <textarea className={pslStyles.type_msg} placeholder="Type your message..."></textarea>
                    </div>
                    <div style={{ textAlign: "center", paddingLeft: '10px' }}>
                        <button className={pslStyles.sendMessage}>
                            <img src={sendMessage} width="20" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div >
}