import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getBuyCoinsData } from "../../../components/psl/bids/bids.service";
import BuyCoinCard from "./buyCoinCard";
import styles from "../game.module.css";

const BuyCoinModal = ({ open, toggle }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBuyCoinsData()
      .then((res) => {
        if (res && res.responseCode == 1) {
          setData(res.data.CoinsPackages);
        }
      })
      .catch((e) => console.log(e));
  }, []);

 
  return (
    <>
      <Modal show={open} onHide={() => toggle(false)}>
        <Modal.Header closeButton className={`${styles.bgBlack} text-white`} >
          <Modal.Title>Purchase Coins</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <h5 className="mb-3" style={{ color: "black", fontFamily: "revert" }}>
            Apnay mobile balance sy coins khareediye aur games khelty rahen aur
            balance redeem kijiye.
          </h5>
          {data.length
            ? data.map((m, i) => <BuyCoinCard key={i} data={m} />)
            : ""}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BuyCoinModal;
