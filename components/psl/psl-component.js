import { memo, useCallback, useEffect, useState } from "react"
import { getPSLTabsService } from "./psl-service"
import PSLChat from "./chat/PSLChat";
import MatchBids from "./bids/MatchBids";

export default memo(function PSLComponent({ channelID }) {
    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState();
    useEffect(async () => {
        const tabs = await getPSLTabsService();
        setTabs(tabs.Tabs);
        setSelectedTab(1);
    }, [])

    const RenderViews = useCallback(function () {
        if (selectedTab == 1) {
            return <PSLChat channelID={channelID} />
        } else if (selectedTab == 2) {
            return <MatchBids />;
        } else {
            return <div></div>;
        }
    })
    return <>
        <div>
            <div className="btn-group w-100">
                {tabs ? tabs.map((e) => {
                    return <div className="w-100 m-2">
                        <button className={`btn w-100 ${selectedTab == e.TabId ? 'btn-primary' : 'btn-dark'}`} onClick={() => setSelectedTab(e.TabId)}>
                            {e.TabName}
                        </button>
                    </div>
                }) : null}
            </div>
            <hr />
            <div>
                <RenderViews />
            </div>
        </div>
    </>
})