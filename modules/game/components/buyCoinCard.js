import React, { useContext, useState } from "react";
import { Cookie } from "../../../services/cookies";
import styles from "../game.module.css";
import { MainContext, initialState } from "../../../contexts/MainContext";
import { MyAccountService } from "../../my-account/myaccount.service";
import { makeCoinTransactionData } from "../../../components/psl/bids/bids.service";
import swal from "sweetalert";
import { GameContext } from "../../../contexts/GameContext";

const buyCoinCard = ({ data }) => {
  const [formData, setFormData] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: Cookie.getCookies("userId"),
  });
  const { updateUserCoin } = useContext(GameContext);

  const { setLoader } = useContext(MainContext);

  const onClickBuy = async () => {
    // setLoader(true);
    const resp = await MyAccountService.getUserData(formData);
    if (resp && resp.responseCode == 1) {
      // console.log("data", resp);
      let body = {
        Version: "v1",
        Language: "en",
        Platform: "web",
        CoinProductCode: data.CoinProductCode,
        UserId: Cookie.getCookies("userId"),
        ProudctCoins: data.ProudctCoins,
        CoinProductPrice: data.CoinProductPrice,
        MobileNo: resp.data.ProfileData.UserProfileMobile,
        OperatorId: resp.data.ProfileData.OperatorId,
        TransactionType: 1,
      };
      makeCoinTransactionData(body)
        .then((respCoin) => {
          if (respCoin && respCoin.responseCode == "10") {
            setLoader(false);
            Cookie.setCookies("userCoins", respCoin.data.UserTotalCoins);
            updateUserCoin(respCoin.data.UserTotalCoins);
            return swal({
              title: respCoin.message,
              icon: "success",
              timer: 3000,
            });
          } else {
            setLoader(false);
            return swal({
              title: respCoin.message,
              icon: "error",
              timer: 3000,
            });
          }
        })
        .catch((e) => setLoader(false));
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
