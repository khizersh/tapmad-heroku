import React, { useState } from "react";
import DropdownWithImage from "./DropdownWithImage";
import SignMessage from "./SignMessage";

const PaymentInfo = ({ type }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const data = [
    {
      id: 1,
      label: "Jazz/Warid",
      src: "https://images.tapmad.com/images/mobileOperator/jazz-logo.jpg",
    },
    {
      id: 2,
      label: "Telenor",
      src: "https://images.tapmad.com/images/mobileOperator/telenor-logo.jpg",
    },
    {
      id: 3,
      label: "Zong",
      src: "https://images.tapmad.com/images/mobileOperator/zong-logo.jpg",
    },
    {
      id: 4,
      label: "Ufone",
      src: "https://images.tapmad.com/images/mobileOperator/ufone-logo.jpg",
    },
  ];

  const onChangePaymentMethod = (data) => {
    setSelectedNetwork(data);
    console.log("Data in parent: ", data);
  };
  return (
    <div>
      <div className="pymnt_pge_phne pr-3 pl-3 pb-3 pt-0 mthd_active">
        <div className="form-group mb-0">
          <div className="">
            <div className="input-group ng-scope">
              {type == "simCard" ? (
                <DropdownWithImage
                  data={data}
                  onChange={onChangePaymentMethod}
                />
              ) : type == "easyPaisa" ? (
                <div className="form-control text-center">
                  <img
                    src="https://images.tapmad.com/images/EasypaisaE.png"
                    width="20"
                  />{" "}
                  <span className="font-weight">Easypaisa</span>
                </div>
              ) : (
                <div className="form-control text-center">
                  <img
                    src="https://images.tapmad.com/images/mobileOperator/jazz-cash-logo.jpg"
                    width="20"
                  />{" "}
                  <span className="font-weight">JazzCash</span>
                </div>
              )}

              <span>
                <label className="form-control cntry_cde">+92</label>
              </span>

              <input
                type="text"
                id="input_msisdn12"
                required=""
                minLength="10"
                className="form-control"
                placeholder="3xxxxxxxxx"
              />
            </div>
          </div>
        </div>
        <SignMessage type={type} />
      </div>
    </div>
  );
};

export default PaymentInfo;
