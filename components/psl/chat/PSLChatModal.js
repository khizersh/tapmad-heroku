import { useRef, useState } from "react";
import { Cookie } from "../../../services/cookies";
import { createAChatRoom } from "./PSLChat.service";


export default function CreateJoinRoomModalBody({ channelId }) {
    const [currentRoomOption, setCurrentRoomOption] = useState(0);
    const roomName = useRef();
    async function createRoom() {
        if (roomName.current.value.length > 2) {
            var body = {
                Version: "v1",
                Language: 'en',
                Platform: "android",
                UserId: Cookie.getCookies("userId"),
                ChannelId: channelId,
                RoomName: roomName.current.value
            }
            const data = await createAChatRoom(body);
            console.log("Woahooo ", data);
        } else {
            alert("STFU")
        }
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
                        <input type="text" className="form-control bg-dark" ref={roomName} placeholder="Enter shareable link" />
                    </div>
                </>
                : null)}
            {currentRoomOption == 3 ? <>
                <div className="col-12">
                    <h2 className="text-primary text-center">Congratulations</h2>
                    <div className="text-center">
                        You have successfully created chat room now you can share link or ID with your friends.
                    </div>
                    <div className="col-12 mt-4">
                        <button className="btn btn-primary btn-sm">Shareable Link</button> &nbsp;&nbsp;&nbsp;
                         <button className="btn btn-dark btn-sm">Room ID</button>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="d-flex">
                            <input type="text" className="form-control bg-dark text-white" placeholder="Enter shareable link" value="64683vsdvSWR" />
                            <button type="button" className="btn-sm btn btn-primary">Copy</button>
                        </div>
                    </div>
                </div>
            </> : null}
        </div>
    </>
}