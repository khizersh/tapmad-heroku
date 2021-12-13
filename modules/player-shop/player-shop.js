import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
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
    setShopTabs(transformedResponse);
  }, []);
  function handleSelect(e) {
    setDefaultTab(e);
    let index = shopTabs.findIndex((tabs) => tabs.MerchantTabId == e);
    let currentSelectedTab = shopTabs[index];
    if (currentSelectedTab.MerchantTabs) {
      return;
    } else {
      fetchMerchantTabs(index, e);
    }
  }
  function changeTabs(e) {
    handleSelect(e);
  }
  async function fetchMerchantTabs(index, tabId) {
    let response = await get(
      `https://app.tapmad.com/api/getProductsByMerchantTabsId/V1/en/android/${tabId}`
    );
    if (response.data.MerchantTabs && response.data.MerchantTabs.length > 0) {
      let tabClone = [...shopTabs];
      tabClone[index].MerchantTabs = response.data.MerchantTabs;
      setShopTabs(tabClone);
    }
  }
  return (
    <>
      <Tabs
        defaultActiveKey={defaultTab}
        activeKey={defaultTab}
        onSelect={(e) => handleSelect(e)}
      >
        {shopTabs.length > 0 &&
          shopTabs.map((tabs, index) => {
            return (
              <Tab
                key={index}
                eventKey={tabs.MerchantTabId}
                tabClassName={
                  tabs.MerchantTabId == RELATED
                    ? "d-lg-none d-md-none tshop-tabs"
                    : `tshop-tabs ${tabs.MerchantTabId == defaultTab ? "shop-active" : ""
                    }`
                }
                title={
                  <div>
                    <img src={tabs.MerchantImageName} width={25} alt={tabs.MerchantTabName} />
                    <p className="text-white m-0">{tabs.MerchantTabName}</p>
                  </div>
                }
              >
                {tabs.MerchantTabs && (
                  <>
                    <PlayerShopRows
                      MerchantTabs={tabs.MerchantTabs}
                      selectTab={(e) => changeTabs(e)}
                      defaultTab={defaultTab}
                    />
                  </>
                )}
              </Tab>
            );
          })}
      </Tabs>
    </>
  );
}
