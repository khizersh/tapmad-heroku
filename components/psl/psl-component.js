import { memo, useCallback, useEffect, useState } from "react"
import { getPSLTabsService } from "./psl-service"
import PSLChat from "./chat/PSLChat";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useRouter } from "next/router";
import styles from "./psl.module.css"

export default memo(function PSLComponent({ channel }) {
    const router = useRouter();
    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState();
    useEffect(async () => {
        const tabs = await getPSLTabsService();
        setTabs(tabs.Tabs);
        setSelectedTab(1);
    }, [])

    useEffect(() => {
        const header = document.getElementById("tab-btn");
        const scrollCallBack = window.addEventListener("scroll", () => {
            const player = document.getElementById('player-div1');
            const playerHeight = player.getBoundingClientRect().height;
            const sticky = 100 + 0;
            console.log("sticky ", sticky)
            if (window.pageYOffset > sticky) {
                if (window.screen.width < 639) {
                    header.classList.add("sticky-tab");
                    header.style.position = "fixed";
                    header.style.top = Number(playerHeight) + 58 + "px";
                    header.style.marginTop = "0px";
                    console.log(playerHeight);
                } else {
                    header.classList.remove("sticky-tab");
                }
            } else {
                header.classList.remove("sticky-tab");
                header.style.position = "unset";
                header.style.top = "unset";
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    function handleSelect(e) {
        setSelectedTab(e);

    }
    const RenderViews = useCallback(function () {
        if (selectedTab == 1) {
            return <PSLChat channel={channel} />
        } else if (selectedTab == 2) {
            // return <MatchBids />;
            return <>
                <div className="loader-5 center" id="loader">
                    <span></span>
                </div>
                <iframe src="/game" id="gameFrame" style={{ width: "100%", height: "700px", border: "0px" }} />
            </>
        } else if (selectedTab == 3) {
            router.push("/tapmad-shop");
            return null
        } else {
            return <div></div>;
        }
    })
    useEffect(() => {
        console.log("selectedTab: ", selectedTab);
        var frameObj = document.getElementById('gameFrame');
        var contents = "";

        console.log("on .oad");
        if (frameObj) {
            frameObj.onload = (() => {
                document.getElementById('loader').style.display = "none";
                contents = frameObj.contentDocument || frameObj.contentWindow.document;
                console.log(contents);
                contents.getElementsByClassName('fixed-bottom')[0].style.display = "none";
                contents.getElementsByClassName('scrolling-navbar')[0].style.display = "none";
                contents.getElementsByClassName('primary-nav')[0].style.display = "none";
                contents.getElementsByTagName('footer')[0].style.display = "none";
                contents.getElementById('tshop').style.display = "none";
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
                                    <p className={`${selectedTab == tab.TabId ? styles.colorGreen : "text-white"} m-0`}>{tab.TabName}</p>
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