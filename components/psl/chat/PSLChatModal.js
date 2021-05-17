import { useState } from "react";
import { Cookie } from "../../../services/cookies";
import { createAChatRoom } from "./PSLChat.service";


export default function CreateJoinRoomModalBody({ channelId }) {
    const [currentRoomOption, setCurrentRoomOption] = useState(0);
    async function createRoom() {
        var body = {
            Version: "v1",
            Language: 'en',
            Platform: "android",
            UserId: Cookie.getCookies("userId"),
            ChannelId: channelId,
            RoomName: 'ABCRoom'
        }
        const data = await createAChatRoom(body);
        console.log("Woahooo ", data);
    }
    return <>
        <div className="row">
            {currentRoomOption == 0 ? <>
                <div className="col-6 text-right">
                    <button className="btn btn-primary" onClick={() => setCurrentRoomOption(1)}>Create a new room</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => setCurrentRoomOption(2)}>Join existing room</button>
                </div>
            </> : null}
            {currentRoomOption == 1 ? <>
                {/* <div className="col-12">
                    <button className="btn btn-primary btn-sm">Shareable Link</button> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-dark btn-sm">Room ID</button>
                </div> */}
                <div className="col-12 mt-2">
                    <input type="text" className="form-control bg-dark" placeholder="Enter Room Name" />
                </div>
                <div className="col-12 mt-2">
                    <button type="button" className="btn btn-primary btn-sm" onClick={createRoom}>Submit</button>
                </div>
            </> : (currentRoomOption == 2 ?
                <>
                    <div className="col-12">
                        <button className="btn btn-primary btn-sm">Shareable Link</button> &nbsp;&nbsp;&nbsp;
                 <button className="btn btn-dark btn-sm">Room ID</button>
                    </div>
                    <div className="col-12 mt-2">
                        <input type="text" className="form-control bg-dark" placeholder="Enter shareable link" />
                    </div>
                </>
                : null)}
        </div>
    </>
}