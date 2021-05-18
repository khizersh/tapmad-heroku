import React from "react";
import styles from "../game.module.css";

const buyCoinCard = ({ data }) => {
  console.log("data in buy: ", data);
  const coin = "//d1s7wg2ne64q87.cloudfront.net/web/images/coin.png";
  return (
    <div className={`${styles.tm_pcoins_bx}`}>
      <div className="row">
        <div className="col-xs-4 col-sm-4">
          <ul className={styles.tm_pcoins_icn}>
            <li>
              <img src={coin} alt="coin" />
            </li>
            <li>
              <span>{data.ProudctCoins}</span>
            </li>
          </ul>
        </div>
        <div className="col-xs-8 col-sm-8 text-right">
          <ul className={`${styles.tm_pcoins_icn} ${styles.tm_pcoins_btn}`}>
            <li>
              <span>{data.CoinProductPrice} Rs + Tax</span>
            </li>
            <li>
              <button>Buy Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default buyCoinCard;
