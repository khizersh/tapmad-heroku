import React from "react";
import { transparentBox, upgradeIcon } from "../../../../services/imagesLink";

const UpdatePackage = ({ currentPackage }) => {
  const splitPrice = currentPackage?.CurrentPackagePrice.split("-");
  const perMonth = splitPrice[2].split(" ");
  return (
    <>
      <style>
        {`
        .grey-background {
          height: 52px;
          background-color: transparent;
        }
        .selected-box {
          width: 100%;
        }
        .selected-box .bg-green-light {
          padding: 13px 30px 17px;
        }
        `}
      </style>
      <div className="row">
        <div className="col-12">
          <div className="mb-4">
            <h5 className="font-large text-white">
              <img src={transparentBox} />
              <span className="pl-2">Current Pack</span>
            </h5>
          </div>
        </div>
        <div className="selected-box">
          <div className="rounded-lg bg-green-light text-center">
            {/* <h3>{currentPackage?.PackageName}</h3>
          <span className="text-grey">{currentPackage?.PaymentMethod}</span>
          <span className="text-grey">
            {currentPackage?.CurrentPackagePrice}
          </span> */}

            <div className="btnwrp text-center">
              <span className="font-weight-bold line-1 d-block text-center h2 mb-0">
                {currentPackage?.PackageName}
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <div className="text-white per-month line-1">
                  {currentPackage?.PaymentMethod ? (
                    <strong>{currentPackage?.PaymentMethod}: </strong>
                  ) : (
                    <></>
                  )}
                  {splitPrice[0]}
                </div>
                <div className="font-weight-bold text-white line-1 package-title f-40 px-1">
                  {splitPrice[1]}
                </div>
                <div
                  className="text-white monthly line-1"
                  style={{ top: "0px" }}
                >
                  <span className="d-block line-1">{perMonth[0]}</span>
                  {perMonth[1]}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-4">
          <p>
            <img src={upgradeIcon} width={"22"} />{" "}
            <span className="pl-2"> Upgrade to:</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default UpdatePackage;
