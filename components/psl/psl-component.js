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
import loadable from "@loadable/component";
import Image from "next/image";
// import ScoreBoard from "./scoreboard";

export default memo(function PSLComponent({ channel, movie }) {
  const router = useRouter();
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  let ScoreBoard;

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

  const { Event_key } = channel;

  useEffect(async () => {
    const tabs = await getPSLTabsService();
    await getRelatedChannels();
    setTabs(tabs.Tabs);
    setSelectedTab(1);
    if (!channel.IsChat) {
      setSelectedTab(3);
    }
    return () => {
      setTabs([]);
      setSelectedTab(null);
    };
    // setTimeout(() => location.reload(), 1e5);
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
      // const sticky = 100 + 0;
      // if (window.pageYOffset > sticky) {
      //   if (window.screen.width < 639) {
      //     header.classList.add("sticky-tab");
      //     header.style.position = "fixed";
      //     header.style.top = Number(playerHeight) + 58 + "px";
      //     header.style.marginTop = "0px";
      //   } else {
      //     header.classList.remove("sticky-tab");
      //   }
      // } else {
      //   header.classList.remove("sticky-tab");
      //   header.style.position = "unset";
      //   header.style.top = "unset";
      // }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  function handleSelect(e) {
    setSelectedTab(e);
  }
  const RenderViews = useCallback(function () {
    const [display, toggle] = useState(true);
    const toggleHandler = () => toggle(!display);

    // Chat Tab <start>
    if (selectedTab == 1 && channel.IsChat) {
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
    }
    // Chat Tab <end>

    /* else if (selectedTab == tabs.length - 1) {
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
    } */

    // Related Videos <start>
    else if (selectedTab == 3) {
      return (
        <div
          className="text-left mt-3 related-video"
          style={{ height: "100vh", overflow: "scroll" }}
        >
          <h5>Related Videos</h5>
          <div>
            {relatedVideo.length ? (
              relatedVideo.map((video, i) => {
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
            ) : (
              <p>No Related videos found!</p>
            )}
          </div>
        </div>
      );
    }
    // Related Videos <end>

    // Schedule tab <start>
    else if (selectedTab == 2) {
      return (
        <Image
          src="/schedule-web-min.jpg"
          className="mt-4"
          width="1122"
          height="1597"
        />
      );
    }
    // Schedule tab <end>

    // Scoreboard tab <start>
    else if (selectedTab == 4 && Event_key) {
      // else if (selectedTab == 4 && !Event_key) {
      if (!ScoreBoard) {
        ScoreBoard = loadable(() => import("./scoreboard"));
      }
      return <ScoreBoard eventKey={Event_key} />;
    }
    // Scoreboard tab <end>
    else {
      return <></>;
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
                  if (tab.ChatOrder == 1 && !channel.IsChat) {
                    return <></>;
                  } else if (tab.ChatOrder == 2 && !channel.IsChat) {
                    return <></>;
                  } else if (tab.ChatOrder == 4 && !Event_key) {
                    return <></>;
                  } else
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
                                selectedTab == tab.ChatOrder
                                  ? styles.colorGreen
                                  : "text-white"
                              } m-0`}
                            >
                              {tab.TabName}
                            </p>
                          </div>
                        }
                      />
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
