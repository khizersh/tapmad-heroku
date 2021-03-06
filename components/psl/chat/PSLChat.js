import { useContext, useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { getUserRooms } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { FireBase } from "../../../services/firebase";
import { get } from "../../../services/http-service";
import { useRouter } from "next/router";
import {
  sendMessageIcon,
  shareIcon,
  userProfile,
} from "../../../services/imagesLink";
import { CenteredModal } from "../../Modal";
import pslStyles from "./PSLChat.module.css";
import {
  deleteAChatRoom,
  getSingleRoomChat,
  removeListenerOfNonActiveChat,
  sendGroupChatMessage,
} from "./PSLChat.service";
import CreateJoinRoomModalBody from "./PSLChatModal";
import Head from "next/head";
var userId = "";
var msg = "";
export default function PSLChat({ channel }) {
  const router = useRouter();
  const [chatRoom, setChatRooms] = useState([]);
  const [chats, setChats] = useState({});
  const database = FireBase.database();
  const [room, setRoom] = useState(1);
  const [isGeneralRoom, setIsGeneralRoom] = useState(false);
  const textMessage = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [currentRoomOption, setCurrentRoomOption] = useState(0);

  const generalRoomId = 1;
  useEffect(() => {
    // const header = document.getElementById("tab-chat");
    // const sticky = 100;

    const scrollCallBack = window.addEventListener("scroll", () => {
      //   const player = document.getElementById("player-div1");
      //   var playerHeight;
      //   if (player) {
      //     playerHeight = player.getBoundingClientRect().height;
      //   }
      //   if (window.pageYOffset > sticky) {
      //     if (window.screen.width < 639) {
      //       header.classList.add("margChat");
      //       header.style.position = "fixed";
      //       header.style.top = Number(playerHeight) + 60 + 75 + "px";
      //     } else {
      //       header.classList.remove("margChat");
      //     }
      //   } else {
      //     header.classList.remove("margChat");
      //     header.style.position = "unset";
      //     header.style.top = "unset";
      //   }
    });
    if (msg) {
      textMessage.current.value = msg;
    }
    textMessage.current.addEventListener("keyup", function (e) {
      if (e.key === "Enter" || e.keyCode === 13) {
        // Do something
        // sendMessage();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  useEffect(() => {
    if (database) {
      getUserAllRooms();
    }
  }, [database]);

  function appendChatRoom(newRoom) {
    if (Array.isArray(newRoom)) {
      // Delete Room
      setChatRooms(newRoom);
      selectRoom(newRoom[newRoom.length - 1].ChatRoomId);
    } else {
      // Join room
      var chatRoomClone = chatRoom;
      chatRoomClone.push(newRoom);
      setChatRooms(chatRoomClone);
      selectRoom(newRoom.ChatRoomId);
      setModalShow(false);
      const name = Cookie.getCookies("userProfileName");
      let message = {
        message: `${Cookie.getCookies("userProfileName")} Joined`,
        channelID: channel.VideoEntityId,
        roomID: newRoom.ChatRoomId,
        type: 2,
      };
      sendGroupChatMessage(database, message);
    }
  }
  async function getUserAllRooms() {
    userId = Cookie.getCookies("userId");
    const response = await get(getUserRooms(userId, channel.VideoEntityId));
    if (response.data.Response.responseCode == 1 && response.data.ChatRooms) {
      setChatRooms(response.data.ChatRooms[0].Rooms);
      selectRoom(response.data.ChatRooms[0].Rooms[0].ChatRoomId);
      setIsGeneralRoom(true);
    }
  }
  function selectRoom(e) {
    removeListenerOfNonActiveChat(database, channel.VideoEntityId, room);
    let roomId = e;
    if (chatRoom[0]?.ChatRoomId == roomId) {
      setIsGeneralRoom(true);
    } else {
      setIsGeneralRoom(false);
    }
    setRoom(roomId);
    getSingleRoomChat(database, channel.VideoEntityId, roomId, (list) => {
      setChats(list);
    });
  }

  function sendMessage(e) {
    e.preventDefault()
    let name = Cookie.getCookies("userProfileName");
    if (!name || name.trim().toLowerCase() == "anonymous") {
      msg = textMessage.current.value;
      return swal({
        title: "Please update your Profile Name before entering the chat",
        timer: 2500,
        icon: "error",
      }).then((res) => {
        router.push(
          { pathname: "/myaccount", query: { redirect: true } },
          "/myaccount"
        );
      });
    }
    var message = {
      message: textMessage.current.value,
      channelID: channel.VideoEntityId,
      roomID: room,
    };

    if (message.message.trim() == "") {
      textMessage.current.style.border = "1px solid red";
      setTimeout(() => {
        textMessage.current.style.border = "0px";
      }, 2000);
    } else {
      if (message.message.trim().length > 99) {
        return swal({
          title: "Please enter your message below 99 characters",
          icon: "warning",
          timer: 2500,
        });
      }
      sendGroupChatMessage(database, message);
      textMessage.current.value = "";
      setTimeout(() => {
          document.getElementsByClassName('lastDiv')[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }, 100)
    }
  }
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  function getDayTime(timestamp) {
    var day = new Date(timestamp).toLocaleDateString("en-US", {
      weekday: "long",
    });
    var time = formatAMPM(new Date(timestamp));
    return day + " " + time;
  }

  function deleteRoom(room) {
    swal({
      title: "Are you sure you want to exit the room?",
      icon: "info",
      allowOutsideClick: false,
      closeOnClickOutside: false,
      showDenyButton: true,
      showCancelButton: true,
      buttons: {
        cancel: "No",
        confirm: "Yes",
      },
    }).then(async (event) => {
      if (event) {
        var body = {
          Version: "V1",
          Language: "en",
          Platform: "Android",
          UserId: Cookie.getCookies("userId"),
          ChatLink: room.ChatLink,
        };
        let message = {
          message: `${Cookie.getCookies("userProfileName")} Left`,
          channelID: channel.VideoEntityId,
          roomID: room.ChatRoomId,
          type: 1,
        };
        await deleteAChatRoom(body);
        sendGroupChatMessage(database, message);
        textMessage.current.value = "";
        var chatRoomClone = chatRoom.filter(
          (e) => e.ChatRoomId != room.ChatRoomId
        );
        setChatRooms(chatRoomClone);
        selectRoom(chatRoomClone[chatRoomClone.length - 1].ChatRoomId);
      }
    });
  }
  async function shareOnSocial() {
    if (navigator.share) {
      var chatIndex = chatRoom.find((_room) => _room.ChatRoomId == room);
      let shareText = `${Cookie.getCookies(
        "userProfileName"
      )} is inviting you to stream ${channel.VideoName} and join the room ${
        chatIndex.RoomName
      } on Tapmad! Click the link below to join:
Link: ${window.location.href}
Room ID: ${chatIndex.ChatLink}
It???s going to be intense, don???t miss it. Subscribe to Tapmad or Login to join now!`;
      const shareData = {
        title: channel.VideoName,
        text: shareText,
      };
      await navigator
        .share(shareData)
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Device can not share");
    }
  }

  return (
    <div>
      <Head>
        <style>
          {`
          @media(max-width:640px) {
            .PSLChat_chatBox__2FhEX {
              max-height: 290px
            }
          }
        `}
        </style>
      </Head>
      <div id="tab-chat" className={pslStyles.tabhight}>
        <ul className={`nav nav-tabs  d-flex ${pslStyles.noBorders}`}>
          {chatRoom.length > 0
            ? chatRoom.map((roomData, index) => {
                return (
                  <li
                    className={`nav-item ${pslStyles.chatRoomList}`}
                    key={index}
                    onClick={() => selectRoom(roomData.ChatRoomId)}
                  >
                    <a
                      className={pslStyles.chatRoomName}
                      style={{
                        border:
                          room == roomData.ChatRoomId
                            ? null
                            : "1px solid #66aa33",
                        backgroundColor:
                          room == roomData.ChatRoomId ? null : "#231f20",
                      }}
                    >
                      {roomData.RoomName}
                      {room == roomData.ChatRoomId && !isGeneralRoom ? (
                        <i
                          className={`fa fa-times ${pslStyles.crossIcon}`}
                          onClick={() => deleteRoom(roomData)}
                        ></i>
                      ) : null}
                    </a>
                  </li>
                );
              })
            : null}
          <li className={pslStyles.plusBtn} onClick={() => setModalShow(true)}>
            <a className={`btn btn-dark btn-sm ${pslStyles.addGroup}`}></a>
            <span className={pslStyles.add_plus}>+</span>
          </li>
        </ul>
      </div>
      <div className={pslStyles.chatBox}>
        <div className={pslStyles.all_messages}>
          {chats &&
            Object.keys(chats).map(function (keyName, keyIndex) {
              // setTimeout(() => {
              // document.getElementsByClassName('lastDiv')[0].scrollIntoView({ behavior: 'smooth' });
              // var target = document.getElementsByClassName("lastDiv")[0];
              // target.parentNode.scrollTop = target.offsetTop;
              // }, 100);
              return (
                <div className="row" key={keyIndex}>
                  {chats[keyName].type == 3 && (
                    <div className="col-12">
                      <div
                        className={pslStyles.insideChat}
                        style={{
                          flexDirection:
                            chats[keyName].id == userId ? "row-reverse" : "",
                        }}
                      >
                        <div className={pslStyles.avatar}>
                          <img
                            src={
                              //   chats[keyName].userProfile != ""
                              //     ? chats[keyName].userProfile
                              //     : userProfile
                              userProfile
                            }
                            width="40"
                            style={{ borderRadius: "10px" }}
                          />
                          {/* <img src={userProfile} width="40" style={{ borderRadius: '10px' }} /> */}
                        </div>{" "}
                        &nbsp;&nbsp;
                        <div className="message">
                          <div
                            style={{
                              textAlign:
                                chats[keyName].id == userId ? "right" : "left",
                            }}
                          >
                            {chats[keyName].id == userId ? (
                              <>
                                <small className={pslStyles.msgProfile}>
                                  {chats[keyName].senderName}
                                </small>{" "}
                                &nbsp;{" "}
                                <small className={pslStyles.msgTime}>
                                  {getDayTime(chats[keyName].date)}
                                </small>
                              </>
                            ) : (
                              <>
                                {" "}
                                <small className={pslStyles.msgTime}>
                                  {getDayTime(chats[keyName].date)}
                                </small>{" "}
                                &nbsp;{" "}
                                <small className={pslStyles.msgProfile}>
                                  {chats[keyName].senderName}
                                </small>
                              </>
                            )}
                          </div>
                          <div
                            className={pslStyles.chatMessageBox}
                            style={
                              ({
                                background:
                                  chats[keyName].id == userId
                                    ? "#ffffff00"
                                    : "#ffffff00",
                              },
                              {
                                textAlign:
                                  chats[keyName].id == userId
                                    ? "right"
                                    : "left",
                              })
                            }
                          >
                            {chats[keyName].message}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="col-12 text-center">
                    {chats[keyName].type == 1 || chats[keyName].type == 2 ? (
                      <p className="badge badge-light">
                        {chats[keyName].message}{" "}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          <div className="lastDiv"></div>
        </div>
        <div className={` ${pslStyles.userInput} ${pslStyles.chatTextInput}`}>
          <div className={pslStyles.msgField + " p-0"}>
            <div style={{ flex: "1" }}>
              <textarea
                className={pslStyles.type_msg}
                ref={textMessage}
                placeholder="Type your message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage(e)}
              ></textarea>
            </div>
            {!isGeneralRoom ? (
              <div
                style={{
                  textAlign: "center",
                  paddingLeft: "10px",
                  margin: "auto",
                }}
              >
                <button className={pslStyles.shareChat} onClick={shareOnSocial}>
                  <img className={pslStyles.shareIcon} src={shareIcon} />
                </button>
              </div>
            ) : (
              <></>
            )}

            <div
              style={{
                textAlign: "center",
                paddingLeft: "10px",
                margin: "auto",
              }}
            >
              <button className={pslStyles.sendMessage} onClick={sendMessage}>
                <img className={pslStyles.shareIcon} src={sendMessageIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <CenteredModal
        show={modalShow}
        onHide={() => (setModalShow(false), setCurrentRoomOption(0))}
      >
        <CreateJoinRoomModalBody
          channelId={channel.VideoEntityId}
          mergeRoom={(e) => appendChatRoom(e)}
          onShare={shareOnSocial}
        />
      </CenteredModal>
    </div>
  );
}
