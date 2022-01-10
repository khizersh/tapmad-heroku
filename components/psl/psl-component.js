import { Fragment, memo, useCallback, useEffect, useState } from "react";
import { getPSLTabsService } from "./psl-service";
import PSLChat from "./chat/PSLChat";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useRouter } from "next/router";
import styles from "./psl.module.css";
import { PlayerService } from "../../modules/single-movie/Player.service";
import { SEOFriendlySlugsForVideo } from "../../services/utils";
import Link from "next/link";
import RelatedProductCard from "../../modules/movies/components/RelatedProductCard";
import ScoreBoard from "./scoreboard";
// import ScoreBoard from "./scoreboard";

export default memo(function PSLComponent({ channel }) {
  const router = useRouter();
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  const [relatedVideo, setRelatedVideos] = useState([]);
  async function getRelatedChannels() {
    const res = await PlayerService.getRelatedChannelsOrVODData(
      channel.VideoEntityId,
      channel.IsVideoChannel ? 1 : 0
    );
    if (res.data && res?.data?.Sections?.length > 0 && res.responseCode == 1) {
      setRelatedVideos(res.data.Sections[0].Videos);
    }
  }

  // console.log(tabs);

  useEffect(async () => {
    if (channel.IsChat) {
      const tabs = await getPSLTabsService();
      await getRelatedChannels();
      setTabs([
        ...tabs.Tabs,
        {
          ChatOrder: "3",
          TabIcon:
            "https://d34080pnh6e62j.cloudfront.net/images/VideoOnDemandPreview/activeChat@3x.png",
          TabIconUnActive: "",
          TabId: 3,
          TabName: "Scorecard",
        },
      ]);
      setSelectedTab(1);
    } else {
      await getRelatedChannels();
      setTabs([
        {
          ChatOrder: "2",
          TabIcon:
            "https://d34080pnh6e62j.lcoudfront.net/images/VideoOnDemandPreview/activeChat@3x.png",
          TabIconUnActive: "",
          TabId: 2,
          TabName: "Related",
        },
        {
          ChatOrder: "3",
          TabIcon:
            "https://d34080pnh6e62j.cloudfront.net/images/VideoOnDemandPreview/activeChat@3x.png",
          TabIconUnActive: "",
          TabId: 3,
          TabName: "Scorecard",
        },
      ]);
      setSelectedTab(2);
    }
  }, []);

  useEffect(() => {
    const header = document.getElementById("tab-btn");
    const scrollCallBack = window.addEventListener("scroll", () => {
      const player = document.getElementById("player-div1");
      var playerHeight = 0;
      if (player) {
        playerHeight = player.getBoundingClientRect().height;
      } else {
        return;
      }
      const sticky = 100 + 0;
      if (window.pageYOffset > sticky) {
        if (window.screen.width < 639) {
          header.classList.add("sticky-tab");
          header.style.position = "fixed";
          header.style.top = Number(playerHeight) + 58 + "px";
          header.style.marginTop = "0px";
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
    //console.log("selectedTab", selectedTab);
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
                <span className="font-weight-bold">
                  Chat has been minimized
                </span>
                &nbsp; &nbsp;
                <span
                  role="button"
                  onClick={toggleHandler}
                  className="text-success  font-weight-bold"
                >
                  View Chat
                </span>
              </div>
            </>
          )}
        </>
      );
    } /* else if (selectedTab == tabs.length - 1) {
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
    } */ else if (selectedTab == 2) {
      return (
        <div
          className="text-left mt-3 related-video"
          style={{ height: "100vh", overflow: "scroll" }}
        >
          <h5>Related Videos</h5>
          <div>
            {relatedVideo.length
              ? relatedVideo.map((video, i) => {
                  let slug = SEOFriendlySlugsForVideo(video);
                  return (
                    <Fragment key={i}>
                      <Link href={slug} replace={true} shallow={false} key={i}>
                        <a>
                          <RelatedProductCard video={video} />
                        </a>
                      </Link>
                    </Fragment>
                  );
                })
              : null}
          </div>
        </div>
      );
    } else if (selectedTab == 3) {
      return <ScoreBoard />;
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
                      eventKey={tab.ChatOrder}
                      tabClassName={"tshop-tabs"}
                      title={
                        <div
                          className={`${
                            tab.ChatOrder == 2 ? styles.margTop27 : ""
                          }`}
                        >
                          {tab.ChatOrder != 2 ? (
                            <img
                              src={tab.TabIconUnActive}
                              width={25}
                              alt={tab.TabIconUnActive}
                            />
                          ) : null}
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
