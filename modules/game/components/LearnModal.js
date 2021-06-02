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
            <b>Khelian Jhatt Sawal Patt Jawab aur jeetain dheeroon coins</b>
          </p>
          <ul className={styles.learnList}>
            <li>Reward section mein jain aur khelian Jhat Sawal Patt Jawab.</li>
            <li>
              Es khel mein ao ko sawalo ke jawab dene hain kuch seconds mein.
            </li>
            <li>
              Mukhtalif sawalaat ki nouiyat ki hisaab se Coins jeete ya haare.
              Khelne ke liye aap ke paas utne hi coins hone chahiye jitney ka
              sawaal hai.
            </li>
            <li>
              Sawalaat ki mukhtalif categories hain jesay ke Pakistani, Indian
              movies aur Sports.
            </li>
            <li>Apna jawab ka intikhaab kijiye.</li>
            <li>
              Sahi Jawab ki surat mein lagaye gaye coins ho jain gay double jab
              ke galat pe utne hi coins ho jain ain miuns.
            </li>
          </ul>

          <p>
            <b>Lagain Tukka Coins ke sath aur karain un ko teen gunna</b>
          </p>
          <ul className={styles.learnList}>
            <li>Reward section mein jain aur khelian Tukka Lagao.</li>
            <li>Bid lagane ke liye match ka intekhaab kijiye.</li>
            <li>
              Muktalif sawalaat pe apne pasandeeda jawab ka intekhaab kijiye aur
              apne jama shuda coins se bid lagaiye.
            </li>
            <li>
              Sahi tukke ki surat mein ap ke bid kiye hue coins ho jain teen
              gunna.
            </li>
            <li>
              Ghalat tukke ki surat mein ap ke bid kiye hue Coins ho jain gay
              minus.
            </li>
          </ul>

          <p>
            <b>Khareediye Coins apne Mobile balance se</b>
          </p>
          <ul className={styles.learnList}>
            <li>
              Coins khatam hone ki surat mein ap apne mobile balance se bhi
              Coins khareed sakte hain.
            </li>
          </ul>

          <p>
            <b>Ziada se zaida coins jeetain, aur leader board pe aain.</b>
          </p>
          <ul className={styles.learnList}>
            <li>Har roz Top 10 users ko mile gay Rs.500 ke mobile balances.</li>
            <li>Har hafte ke Top user ko milay ga Rs.10000 ka cash prize.</li>
            <li>
              Jab ke Tournament ke Top user ko milay ga Rs.100000 ka cash prize.
              2nd place ko 50000 aur 3rd place ko 25000.
            </li>
          </ul>

          <p>
            <b>Coins istemaal kijiye apna mobile balance kareedne ke liye</b>
          </p>
          <ul className={styles.learnList}>
            <li>
              Agar mobile balance ho gaya ha khatam tou ap apne jama shuda Coins
              se apna mobile balance bhi kareed sakte hain.
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
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LearnModal;
