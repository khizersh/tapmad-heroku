import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { rewardPredication } from "../../../components/psl/bids/bids.service";
import { basicSliderConfig } from "../../../services/utils";

const RightSidebar = ({ data }) => {
  const setting = basicSliderConfig(2, 2);
  const [rewards, setRewards] = useState([]);

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
          console.log("res.data.Rewards: ", res.data.Rewards);
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
                <div className="row mt-2" key={i}>
                  <div className="col">
                    <div className="tm_btng_sidebar_hdr pl-2">
                      <h5 className="ng-binding">{m.RewardCategoryName}</h5>
                    </div>
                  </div>
                </div>
                <div className="p-2" style={{ marginRight: "0px", backgroundColor: "#121117" }}>
                  <Slider {...setting}>
                    {m.StoreProducts &&
                      m.StoreProducts.map((n, j) => (
                        <div className="p-2">
                          <img
                            src={n.RewardProductImage}
                            alt="reward"
                            width="100%"
                          />
                          <div className="card-body p-2 text-light text-center">
                            <h5 style={{fontSize:'14px'}}>{n.RewardProductName}</h5>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </>
            ))
          : null}
      </div>
    </>
  );
};

export default RightSidebar;
