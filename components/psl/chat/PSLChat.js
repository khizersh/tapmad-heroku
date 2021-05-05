import { sendMessage } from "../../../services/imagesLink";
import pslStyles from "./PSLChat.module.css";
export default function PSLChat() {
    return <div>
        <div className={pslStyles.chatBox}>
            <div className="row">
                <div className="col-12">
                    <div className={pslStyles.insideChat}>
                        <div className={pslStyles.avatar}>
                            <img src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png" width="40" style={{ 'border-radius': '10px' }} />
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
                    <div style={{ width: "80%" }}>
                        <textarea className={pslStyles.type_msg} placeholder="Type your message..."></textarea>
                    </div>
                    <div style={{ width: "20%", textAlign: "center" }}>
                        <button className={pslStyles.sendMessage}>
                            <img src={sendMessage} width="20" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div >
}