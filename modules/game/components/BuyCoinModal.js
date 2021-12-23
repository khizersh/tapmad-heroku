import React, { useEffect, useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { getBuyCoinsData } from "../../../components/psl/bids/bids.service";
import BuyCoinCard from "./buyCoinCard";
import styles from "../game.module.css";
import { GameContext } from "../../../contexts/GameContext";

const BuyCoinModal = () => {
  const [data, setData] = useState([]);
  // open={gameState.buyModal} toggle={updateBuyModal}
  const { gameState, updateBuyModal } = useContext(GameContext);

  useEffect(() => {
    getBuyCoinsData()
      .then((res) => {
        if (res && res.responseCode == 1) {
          setData(res.data.CoinsPackages);
        }
      })
      .catch((e) => console.log(e));
  }, [gameState.buyModal]);

  return (
    <>
      <Modal show={gameState.buyModal} onHide={() => updateBuyModal(false)}>
        <Modal.Header closeButton className={`${styles.bgBlack} text-white`}>
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
