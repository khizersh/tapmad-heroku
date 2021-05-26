import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import swal from "sweetalert";
import {
  rewardPredication,
  updateVoucher,
} from "../../../components/psl/bids/bids.service";
import { MainContext } from "../../../contexts/MainContext";
import { GameContext } from "../../../contexts/GameContext";
import { Cookie } from "../../../services/cookies";
import { basicSliderConfig } from "../../../services/utils";
const RightSidebar = ({ shop }) => {
  const setting = basicSliderConfig(2, 2);
  const [rewards, setRewards] = useState([]);
  const { setLoader } = useContext(MainContext);
  const { updateBuyModal } = useContext(GameContext);

  const onClickVoucher = (data) => {
    setLoader(true);
    let userId = Cookie.getCookies("userId");
    let body = {
      Language: "en",
      Platform: "android",
      ProductId: data.RewardProductId,
      UserId: userId,
      Version: "V1",
    };

    updateVoucher(body)
      .then((res) => {
        setLoader(false);
        if (res && res.responseCode == 6) {
          swal({
            title: res.message,
            icon: "success",
          });
        } else if (res && res.responseCode == 8) {
          swal({
            title: res.message,
            icon: "error",
          });
        } else if (res && res.responseCode == 4) {
          swal({
            title: res.message,
            icon: "error",
            timer: 3000,
          }).then((r) => updateBuyModal(true));
        } else {
          swal({
            title: res.message,
            icon: "error",
          });
        }
      })
      .catch((e) => console.log(e));
    setLoader(false);
  };

  useEffect(() => {
    let body = {
      Language: "en",
      Platform: "web",
      Version: "V1",
    };
    rewardPredication(body)
      .then((res) => {
        if (res && res.responseCode == 1) {
          setRewards(res.data.Rewards);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div>
        {rewards && rewards.length
          ? rewards.map((m, i) => (
              <>
                {" "}
                <div className={`row mt-2`} key={i}>
                  <div className="col">
                    <div className="tm_btng_sidebar_hdr pl-2">
                      <h5 className="ng-binding">{m.RewardCategoryName}</h5>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="p-2"
                      style={{ marginRight: "0px", backgroundColor: "#121117" }}
                    >
                      <Slider {...setting}>
                        {m.StoreProducts &&
                          m.StoreProducts.map((n, j) => (
                            <div className="p-2 text-center">
                              <img
                                onClick={() => onClickVoucher(n)}
                                src={n.RewardProductImage}
                                alt="reward"
                                width={shop ? shop : "100%"}
                                className=" btn m-auto"
                              />
                              <div
                                className="card-body p-2 text-light"
                                onClick={() => onClickVoucher(n)}
                              >
                                <h5
                                  style={{
                                    fontSize: "14px",
                                    cursor: "pointer",
                                  }}
                                >
                                  {n.RewardProductName}
                                </h5>
                              </div>
                            </div>
                          ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </>
            ))
          : null}
      </div>
    </>
  );
};

export default RightSidebar;
