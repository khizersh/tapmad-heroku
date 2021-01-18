import React from "react";
import PlayerShopProducts from "./player-shop-products";

export default function PlayerShopRows({ MerchantTabs }) {
  return (
    <>
      {MerchantTabs.map((merchant, index) => {
        return (
          <div
            className="row"
            key={index}
            style={{ borderBottom: "1px solid" }}
          >
            <div className="col-12">
              <div className="pt-2">
                <span>
                  <img src={merchant.MerchantImageName} width="20" />{" "}
                </span>
                {merchant.MerchantName}
              </div>
              <div className="pt-2">
                <PlayerShopProducts
                  MerchantProducts={merchant.MerchantProducts}
                />
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
