import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./player-shop.css";
import { get } from "../../services/http-service";
import { transformResponse } from "./player-shop-service";
import PlayerShopRows from "./player-shop-rows";
import { RELATED } from "./player-shop-constants";

export default function PlayerShop() {
  const [shopTabs, setShopTabs] = useState([]);
  const [defaultTab, setDefaultTab] = useState(8);
  React.useEffect(async () => {
    let response = await get(
      "https://app.tapmad.com/api/getAllMerchantProducts/V1/en/android"
    );
    let transformedResponse = transformResponse(response.data);
    console.log(transformedResponse);
    setShopTabs(transformedResponse);
  }, []);
  function handleSelect(e) {
    let index = shopTabs.findIndex((tabs) => tabs.MerchantTabId == e);
    let currentSelectedTab = shopTabs[index];
    if (currentSelectedTab.MerchantTabs) {
      return;
    } else {
      fetchMerchantTabs(index, e);
    }
  }
  async function fetchMerchantTabs(index, tabId) {
    console.log("Fetching Merhchant Tabs......");
    let response = await get(
      `https://app.tapmad.com/api/getProductsByMerchantTabsId/V1/en/android/${tabId}`
    );
    if (response.data.MerchantTabs && response.data.MerchantTabs.length > 0) {
      console.log(response.data);
      let tabClone = [...shopTabs];
      tabClone[index].MerchantTabs = response.data.MerchantTabs;
      setShopTabs(tabClone);
      console.log(shopTabs);
    }
  }
  return (
    <>
      <Tabs
        defaultActiveKey={defaultTab}
        id="tshop-tabs"
        onSelect={(e) => handleSelect(e)}
      >
        {shopTabs.length > 0 &&
          shopTabs.map((tabs, index) => {
            return (
              <Tab
                key={index}
                eventKey={tabs.MerchantTabId}
                tabClassName={
                  tabs.MerchantTabId == RELATED ? "d-lg-none d-md-none" : ""
                }
                title={
                  <div>
                    <img src={tabs.MerchantImageName} width={25} />
                    <p className="text-white m-0">{tabs.MerchantTabName}</p>
                  </div>
                }
              >
                {tabs.MerchantTabs && (
                  <>
                    <PlayerShopRows MerchantTabs={tabs.MerchantTabs} />
                  </>
                )}
              </Tab>
            );
          })}
      </Tabs>
    </>
  );
}
