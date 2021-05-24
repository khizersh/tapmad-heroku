import React from "react";
import PlayerShopProducts from "./player-shop-products";

export default function PlayerShopRows({
  MerchantTabs,
  selectTab,
  defaultTab,
}) {
  return (
    <>
      {MerchantTabs.map((merchant, index) => {
        return (
          <div
            className="row"
            key={index}
            style={{ borderBottom: "1px solid" }}
            onClick={() => {
              if (defaultTab == 8) {
                selectTab(merchant.MerchantTabId);
              }
            }}
          >
            <div className="col-12">
              <div className="pt-2">
                <span>
                  <img src={merchant.MerchantImageName} width="20" alt={'merchant.MerchantName'} />{" "}
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
