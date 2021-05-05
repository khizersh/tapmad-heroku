import { useEffect, useState } from "react"
import { getPSLTabsService } from "./psl-service"
import PSLChat from "./chat/PSLChat";

export default function PSLComponent() {
    const [tabs, setTabs] = useState([]);
    useEffect(async () => {
        const tabs = await getPSLTabsService();
        setTabs(tabs.Tabs);
    }, [])
    return <>
        <div>
            <div className="btn-group w-100">
                {tabs ? tabs.map((e) => {
                    return <div className="w-100 m-2">
                        <button className="btn btn-primary w-100">
                            {e.TabName}
                        </button>
                    </div>
                }) : null}
            </div>
            <hr />
            <div>
                <PSLChat />
            </div>
        </div>
    </>
}