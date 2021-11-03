import React, { useState, useEffect, useContext } from "react";
import Slider from "@ant-design/react-slick";
import swal from "sweetalert";
import {
  rewardPredication,
  updateVoucher,
} from "../../../components/psl/bids/bids.service";
import { MainContext } from "../../../contexts/MainContext";
import { GameContext } from "../../../contexts/GameContext";
import { Cookie } from "../../../services/cookies";
import { basicSliderConfig } from "../../../services/utils";
import styles from "../game.module.css";
import { CenteredModal } from "../../../components/Modal";
import VoucherBuyModal from "./VoucherBuyModal";
import { userProfile, logo } from "../../../services/imagesLink";

const RightSidebar = ({ shop }) => {
  const setting = basicSliderConfig(2, 2);
  const [rewards, setRewards] = useState([]);
  const [voucherModal, setVoucherModal] = useState(false);
  const [voucherModalData, setVoucherModalData] = useState(null);
  const [copyText, setCopyText] = useState("Copy");
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
        console.log(res);
        if (res && res.responseCode == 6) {
          swal({
            title: res.message,
            icon: "success",
          });
        } else if (res && res.responseCode == 1) {
          if (res.data.IsPopup) {
            console.log(res);
            setVoucherModal(true);
            setVoucherModalData(res.data);
          } else {
            swal({
              title: res.message,
              icon: "success",
            });
          }
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

  const onClickCopy = (data) => {
    navigator.clipboard.writeText(data);
    setCopyText("Copied!");
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
      <VoucherBuyModal
        show={voucherModal}
        onHide={() => setVoucherModal(false)}
      >
        {voucherModalData && (
          <div className="container">
            <div className="row">
              <div className="col-6 text-center">
                <img
                  // src={voucherModalData.ProductImage}
                  src={logo}
                  alt="Tapmad logo"
                  width="70px"
                />
              </div>
              <div className="col-6 text-center">
                <img
                  src={voucherModalData.ProductImage}
                  alt="Tapmad logo"
                  width="70px"
                />
              </div>
              <div className="col-12 mt-3 text-center">
                <p>{voucherModalData.message}</p>
                {/* <p>sdgaJHFDGAdfgjhaGDJKAfgdkjaG</p> */}
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  value={voucherModalData.PromoCode}
                  // value={"WY78EQ8946TZXBDVFETY78"}
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-primary"
                  onClick={() => onClickCopy(voucherModalData.PromoCode)}
                // onClick={() => onClickCopy("safasfasfasf")}
                >
                  {copyText}
                </button>
              </div>
            </div>
          </div>
        )}
      </VoucherBuyModal>
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
                              className={`btn m-auto ${styles.discountImage}`}
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
