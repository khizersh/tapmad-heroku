import React, { useContext, useState } from "react";
import { Cookie } from "../../../services/cookies";
import styles from "../game.module.css";
import { MainContext, initialState } from "../../../contexts/MainContext";
import { MyAccountService } from "../../my-account/myaccount.service";
import { makeCoinTransactionData } from "../../../components/psl/bids/bids.service";
import swal from "sweetalert";

const buyCoinCard = ({ data }) => {
  const [formData, setFormData] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: Cookie.getCookies("userId"),
  });

  const { initialState } = useContext(MainContext);
  const onClickBuy = async () => {
    const resp = await MyAccountService.getUserData(formData);
    if (resp && resp.responseCode == 1) {
      let body = {
        Version: "v1",
        Language: "en",
        Platform: "web",
        CoinProductCode: data.CoinProductCode,
        UserId: Cookie.getCookies("userId"),
        ProudctCoins: data.ProudctCoins,
        CoinProductPrice: data.CoinProductPrice,
        MobileNo: resp.data.UserProfile.MobileNumber,
        OperatorId: resp.data.UserProfile.OperatorId,
        TransactionType: 1,
      };
      const respCoin = await makeCoinTransactionData(body);
      if (respCoin && respCoin.responseCode == "0009") {
        return swal({ title: respCoin.message, icon: "error", timer: 3000 });
      } else {
        return swal({ title: respCoin.message, icon: "success", timer: 3000 });
      }
    }
  };
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
              <button onClick={onClickBuy}>Buy Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default buyCoinCard;
