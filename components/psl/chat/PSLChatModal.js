import { useRef, useState } from "react";
import swal from "sweetalert";
import { Cookie } from "../../../services/cookies";
import { pslCongrats } from "../../../services/imagesLink";
import { createAChatRoom, joinAChatRoom } from "./PSLChat.service";
import styles from "./PSLChat.module.css";

export default function CreateJoinRoomModalBody({
  channelId,
  mergeRoom,
  onShare,
}) {
  const [currentRoomOption, setCurrentRoomOption] = useState(0);
  const [newRoom, setNewRoom] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const roomName = useRef();
  const chatRoomId = useRef();
  const [btnText, setBtnText] = useState("Copy");

  async function createRoom() {
    setBtnDisable(true)
    setOnLoad(true);
    if (
      (roomName.current.value && !roomName.current.value.trim().length > 3) ||
      roomName.current.value.trim().length > 12
    ) {
      setOnLoad(false);
      swal({
        title: "Please enter valid title!",
        icon: "error",
        timer: 2500,
      });
      return true;
    }
    if (roomName.current.value.length > 2) {
      var body = {
        Version: "v1",
        Language: "en",
        Platform: "android",
        UserId: Cookie.getCookies("userId"),
        ChannelId: channelId,
        RoomName: roomName.current.value,
      };
      const data = await createAChatRoom(body);
      if (data.Response.responseCode == 2) {
        swal({
          title: data.Response.message,
          icon: "error",
          allowOutsideClick: false,
          closeOnClickOutside: false,
        });
        setOnLoad(false);
      } else if (data.Response.responseCode == 1) {
        setCurrentRoomOption(3);
        if (data.ChatRooms && data.ChatRooms.length) {
          setNewRoom(data.ChatRooms[data.ChatRooms.length - 1]);
        }
        mergeRoom(data.ChatRooms);
        setOnLoad(false);
      }
    } else {
      swal({
        title: "Add more than 3 characters.",
        icon: "error",
        allowOutsideClick: false,
        closeOnClickOutside: false,
      });
      setOnLoad(false);
    }
  }
  async function joinChatRoom() {
    if (chatRoomId.current.value.length > 5) {
      var body = {
        Version: "V1",
        Language: "en",
        Platform: "android",
        UserId: Cookie.getCookies("userId"),
        // UserId: "31276887",
        ChannelId: channelId,
        ChatLink: chatRoomId.current.value,
      };
      setBtnDisable(true)
      const data = await joinAChatRoom(body);
      console.log("data ", data);
      if (data.UserChatRooms) {
        mergeRoom(data.UserChatRooms[data.UserChatRooms.length - 1]);
    
      } else {
        swal({
          title: data.Response.message,
          icon: "error",
          allowOutsideClick: false,
          closeOnClickOutside: false,
        });
        setBtnDisable(false)
      }
    } else {
      swal({
        title: "Invalid chat room id",
        icon: "error",
        allowOutsideClick: false,
        closeOnClickOutside: false,
      });
      setBtnDisable(false)
    }
  }

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(newRoom.ChatLink);
    setBtnText("Copied!");
  };
  return (
    <>
      <div className="row p-0">
        {currentRoomOption == 0 ? (
          <>
            <div className="col-lg-12 col-12 col-sm-12 ">
              <button
                className="btn btn-primary w-100 w-lg-25"
                onClick={() => setCurrentRoomOption(2)}
              >
                Join existing room
              </button>
            </div>
            <div className="col-lg-12 col-12 col-sm-12 text-lg-right mb-1 mb-lg-0 mb-md-0 mt-3">
              <button
                className="btn btn-primary w-100 w-lg-25"
                onClick={() => setCurrentRoomOption(1)}
              >
                Create a new room
              </button>
            </div>
          </>
        ) : null}
        {currentRoomOption == 1 ? (
          <>
            {/* <div className="col-12">
                    <button className="btn btn-primary btn-sm">Shareable Link</button> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-dark btn-sm">Room ID</button>
                </div> */}
            <div className="col-12 mt-2">
              <input
                type="text"
                className="form-control bg-dark"
                ref={roomName}
                placeholder="Enter Room Name"
              />
            </div>
            <div className="col-12 mt-2">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={createRoom}
                disabled={btnDisable}
              >
                Submit{" "}
                {onLoad ? (
                  <img
                    src="https://samherbert.net/svg-loaders/svg-loaders/circles.svg"
                    width="17px"
                  />
                ) : (
                  ""
                )}
              </button>
            </div>
          </>
        ) : currentRoomOption == 2 ? (
          <>
            {/* <div className="col-12">
                        <button className="btn btn-primary btn-sm">Shareable Link</button> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-dark btn-sm">Room ID</button>
                    </div> */}
            <div className="col-12 mt-2">
              <input
                type="text"
                className="form-control bg-dark"
                ref={chatRoomId}
                maxLength={15}
                placeholder="Enter Room Id"
              />
            </div>
            <div className="col-12 mt-2">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={joinChatRoom}
                disabled={btnDisable}
              >
                Submit
              </button>
            </div>
          </>
        ) : null}
        {currentRoomOption == 3 ? (
          <>
            <div className="col-12 text-center" style={{ zIndex: "99999" }}>
              <img src={pslCongrats} />
            </div>
            <div className="col-12">
              <h2 className="text-primary text-center"></h2>
              <div className="text-center">
                Congratulations You have successfully created chat room now you
                can share link or ID with your friends.
              </div>
              <div className="col-12 mt-2">
                <div className="d-flex">
                  <input
                    type="text"
                    className={`form-control bg-dark text-white ${styles.copyBtn} `}
                    placeholder="Enter shareable link"
                    value={newRoom ? newRoom.ChatLink : ""}
                  />
                  <button
                    type="button"
                    className={`btn-sm btn btn-primary ${styles.roomChatText}`}
                    onClick={copyToClipboard}
                  >
                    {btnText}
                  </button>
                </div>
              </div>
              <div className="col-12 text-center">
                <button
                  type="button"
                  className={`btn-sm btn btn-primary mt-3 ${styles.shareBtn}`}
                  onClick={() => onShare()}
                >
                  SHARE
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
