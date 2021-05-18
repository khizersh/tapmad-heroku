import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getBuyCoinsData } from "../../../components/psl/bids/bids.service";
import BuyCoinCard from "./buyCoinCard";

const BuyCoinModal = ({ open, toggle }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBuyCoinsData()
      .then((res) => {
        if (res && res.responseCode == 1) {
          setData(res.data.CoinsPackages);
        }
        console.log("ggg: ", res);
      })
      .catch((e) => console.log(e));
  }, []);

  const onClick = () => {
    console.log("onClick");
  };
  return (
    <>
      <Modal show={open} onHide={toggle}>
        <Modal.Header closeButton>
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
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BuyCoinModal;
