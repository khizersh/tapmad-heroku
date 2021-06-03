import { memo, useCallback, useEffect, useState } from "react"
import { getPSLTabsService } from "./psl-service"
import PSLChat from "./chat/PSLChat";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
export default memo(function PSLComponent({ channel }) {
    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState();
    useEffect(async () => {
        const tabs = await getPSLTabsService();
        setTabs(tabs.Tabs);
        setSelectedTab(1);
    }, [])

    useEffect(() => {
        const header = document.getElementById("tab-btn");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky-tab");
            } else {
                header.classList.remove("sticky-tab");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    function handleSelect(e) {
        console.log(e);
        setSelectedTab(e);

    }
    const RenderViews = useCallback(function () {
        if (selectedTab == 1) {
            return <PSLChat channel={channel} />
        } else if (selectedTab == 2) {
            // return <MatchBids />;
            return <iframe allow src="/game" id="gameFrame" style={{ width: "100%", height: "500px", border: "0px" }} />;
        } else {
            return <div></div>;
        }
    })
    useEffect(() => {
        var frameObj = document.getElementById('gameFrame');
        var contents = "";

        if (frameObj) {
            frameObj.onload = (() => {
                contents = frameObj.contentDocument || frameObj.contentWindow.document;
                console.log(contents)
                contents.getElementsByClassName('fixed-bottom')[0].style.display = "none";
                contents.getElementsByClassName('scrolling-navbar')[0].style.display = "none";
                contents.getElementsByClassName('primary-nav')[0].style.display = "none";
                contents.getElementsByTagName('footer')[0].style.display = "none";
            })
        }
    }, [selectedTab])
    return <>
        <div>
            <div id="tab-btn" >
                <Tabs
                    defaultActiveKey={selectedTab}
                    activeKey={selectedTab}
                    onSelect={(e) => handleSelect(e)}
                >
                    {tabs ? tabs.map((tab, index) => {
                        return <Tab
                            key={index}
                            eventKey={tab.TabId}
                            tabClassName={'tshop-tabs'}
                            title={
                                <div>
                                    <img src={tab.TabIconUnActive} width={25} alt={tab.TabIconUnActive} />
                                    <p className="text-white m-0">{tab.TabName}</p>
                                </div>
                            }
                        ></Tab>
                    }) : null}
                </Tabs>
            </div>
            <hr />
            <div>
                <RenderViews />
            </div>
        </div>
    </>
})