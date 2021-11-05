import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../game.module.css";

const LearnModal = ({ open, toggle }) => {
  return (
    <>
      <Modal show={open} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Istemaal karne ka Tariqa</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.bgBlack} style={{ color: "#fff" }}>
          <p>
            <b>Tukka Lagao!</b>
          </p>
          <ul className={styles.learnList}>
            <li>Reward section mein ja ke Tukka Lagao khelein.</li>
            <li>
              Saath saath HBL PSL 6 ki live stream ka intekhaab karein, aur apne tukkay lagayein!
            </li>
            <li>
              Sahi tukkay ki surat mein apkelagaye hue coins teen gunna ziada hojayenge.
            </li>
            <li>
              Ghalat tukke ki surat mein apne jitne coins lagaye thay, who minus hojayenge.
            </li>
            <li>Ziada se ziada coins jeetain, leaderboard pe awwal position hasil karein for daily, weekly and monthly prizes!</li>
            <li>
              Agar apkay coins khatam horahe hain, tou aap apne mobile balance ke zariye aur coins khareed sakte hain.
            </li>
          </ul>

          <p>
            <b>Leaderboard</b>
          </p>
          <ul className={styles.learnList}>
            <li>Jitnay ziada coins lagayenge, utna ziada chance milega leaderboard pe top rehne ka! </li>
            <li>Jitnay coins aap jeetainge, woh apke leaderboard pe display hojayenge.</li>
            <li>
              Mahinay ke akhir mei, top 100 users ko milenge beshumar inamat!
            </li>
            <li>
              Rank 100 to rank 50 ko milega <b>Rs. 50</b> ka mobile balance.
            </li>
            <li>
              Rank 49 to rank 10 ko milega <b>Rs. 100</b> ka mobile balance.
            </li>
            <li>
              Rank 100 to rank 50 ko milega <b>Rs. 100 </b> ka mobile balance aur <b>free tapmad weekly subscription.</b>
            </li>
            <li>
              Top 3 jeeten ge <b>smart phone.</b>
            </li>
          </ul>

          <p>
            <b>Terms and Conditions</b>
          </p>
          <ul className={styles.learnList}>
            <li>
              Tapmad reserves the right to withdraw any promotion, game or
              feature of the rewards section, and change value of coins at any
              time without prior notice.
            </li>
            <li>
              The coins do not represent real currency and cannot be substituted
              for real money. Coins will be reduced after prizes have been
              distributed.
            </li>
            <li>
              The coins will expire if the user unsubscribes or remains inactive
              for over 7 days.
            </li>
            <li>
              Prizes for the leaderboard will be announced every month.
            </li>
            <li>
              At the end of each month the winnings will be reset and a new leaderboard will be created.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LearnModal;
