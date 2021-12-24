import { memo, useCallback, useEffect, useState } from "react";
import { getPSLTabsService } from "./psl-service";
import PSLChat from "./chat/PSLChat";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useRouter } from "next/router";
import styles from "./psl.module.css";

export default memo(function PSLComponent({ channel }) {
  const router = useRouter();
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(async () => {
    const tabs = await getPSLTabsService();
    setTabs(tabs.Tabs);
    setSelectedTab(1);
  }, []);

  useEffect(() => {
    // const header = document.getElementById("tab-btn");
    // const scrollCallBack = window.addEventListener("scroll", () => {
    //     const player = document.getElementById('player-div1');
    //     var playerHeight = 0;
    //     if (player) {
    //         playerHeight = player.getBoundingClientRect().height;
    //     } else {
    //         return;
    //     }
    //     const sticky = 100 + 0;
    //     if (window.pageYOffset > sticky) {
    //         if (window.screen.width < 639) {
    //             header.classList.add("sticky-tab");
    //             header.style.position = "fixed";
    //             header.style.top = Number(playerHeight) + 58 + "px";
    //             header.style.marginTop = "0px";
    //         } else {
    //             header.classList.remove("sticky-tab");
    //         }
    //     } else {
    //         header.classList.remove("sticky-tab");
    //         header.style.position = "unset";
    //         header.style.top = "unset";
    //     }
    // });
    // return () => {
    //     window.removeEventListener("scroll", scrollCallBack);
    // };
  }, []);
  function handleSelect(e) {
    setSelectedTab(e);
  }
  const RenderViews = useCallback(function () {
    const [display, toggle] = useState(true);
    const toggleHandler = () => toggle(!display);
    if (selectedTab == 1) {
      return (
        <>
          <div className="d-flex justify-content-end text-primary my-2">
            <div role="button" tabIndex={0} onClick={toggleHandler}>
              {display ? "Hide" : "Show"}
            </div>
          </div>
          {display ? (
            <PSLChat channel={channel} />
          ) : (
            <>
              <div className="text-center">
                <text className="font-weight-bold">
                  Chat has been minimized
                </text>
                &nbsp; &nbsp;
                <text
                  role="button"
                  onClick={toggleHandler}
                  className="text-success  font-weight-bold"
                >
                  View Chat
                </text>
              </div>
            </>
          )}
        </>
      );
    } else if (selectedTab == 2) {
      // return <MatchBids />;
      return (
        <>
          <div className="loader-5 center" id="loader">
            <span></span>
          </div>
          <iframe
            src="/game"
            id="gameFrame"
            style={{ width: "100%", height: "700px", border: "0px" }}
          />
        </>
      );
    } else if (selectedTab == 3) {
      router.push("/tapmad-shop");
      return null;
    } else {
      return <div></div>;
    }
  });

  useEffect(() => {
    var frameObj = document.getElementById("gameFrame");
    var contents = "";

    if (frameObj) {
      frameObj.onload = () => {
        document.getElementById("loader").style.display = "none";
        contents = frameObj.contentDocument || frameObj.contentWindow.document;
        contents.getElementsByClassName("fixed-bottom")[0].style.display =
          "none";
        contents.getElementsByClassName("scrolling-navbar")[0].style.display =
          "none";
        contents.getElementsByClassName("primary-nav")[0].style.display =
          "none";
        contents.getElementsByTagName("footer")[0].style.display = "none";
        contents.getElementById("tshop").style.display = "none";
      };
    }
  }, [selectedTab]);

  console.log("selectedTab : ", selectedTab, tabs);
  return (
    <>
      <div>
        <div id="tab-btn">
          <Tabs
            defaultActiveKey={selectedTab}
            activeKey={selectedTab}
            onSelect={(e) => handleSelect(e)}
          >
            {tabs
              ? tabs.map((tab, index) => {
                  return (
                    <Tab
                      key={index}
                      eventKey={tab.TabId}
                      tabClassName={"tshop-tabs"}
                      title={
                        <div>
                          <img
                            src={tab.TabIconUnActive}
                            width={25}
                            alt={tab.TabIconUnActive}
                          />
                          <p
                            className={`${
                              selectedTab == tab.TabId
                                ? styles.colorGreen
                                : "text-white"
                            } m-0`}
                          >
                            {tab.TabName}
                          </p>
                        </div>
                      }
                    ></Tab>
                  );
                })
              : null}
          </Tabs>
        </div>
        {/* <hr /> */}
        <div>
          <RenderViews />
        </div>
      </div>
    </>
  );
});
