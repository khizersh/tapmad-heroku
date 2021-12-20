import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNav() {
  const { asPath } = useRouter();
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Home",
      image:
        "//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/house_green.png",
      link: "/game",
    },
    {
      id: 2,
      title: "Games",
      image:
        "//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/calendar_green.png",
      link: "/all-games",
    },
    {
      id: 3,
      title: "T Shop",
      image:
        "//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/trophy_green.png",
      link: "/tapmad-shop",
    },
    {
      id: 4,
      title: "LeaderBoard",
      image:
        "//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/crown_green.png",
      link: "/leaderboard",
    },
    {
      id: 5,
      title: "My Game",
      image:
        "//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/auction_green.png",
      link: "/my-game",
    },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onClickTab = (data) => {
    setActiveTab(data);
  };

  useEffect(() => {
    if (tabs.length) {
      let path = tabs.find((m) => m.link == asPath);
      setActiveTab(path)
    }
  }, []);

  return (
    <div className="gm_foo_nav fixed-bottom ng-scope">
      <style jsx>
        {`
        .btmbtn {
          font-size: 0.9em
        }
        `}
      </style>
      <ul
        className="gm_mob_menu list-group list-group-horizontal d-flex"
        id="footer_nav_a"
      >
        {tabs.length
          ? tabs.map((m, i) => (
              <Link key={i} href={m.link} className="text-light" target="_self">
                <li
                  className={`list-group-item ${
                    activeTab && activeTab.id == m.id
                      ? "border-bottom-game"
                      : ""
                  } border-left-0 border-top-0 btn border-right-0 rounded-0 bg-transparent flex-fill p-1 text-center`}
                  onClick={() => onClickTab(m)}
                >
                  <a className="text-light" id="g_home" target="_self">
                    <img src={m.image} width="30" alt="" />{" "}
                    <span
                      className={`btmbtn d-block mt-1 mb-0 ${
                        activeTab && activeTab.id == m.id ? "color-green" : ""
                      }`}
                    >
                      {m.title}
                    </span>
                  </a>
                </li>
              </Link>
            ))
          : null}
        {/* <Link href="/game" className="text-light" target="_self">
          <li className="list-group-item border-left-0 border-top-0 btn border-right-0 rounded-0 bg-transparent flex-fill p-1 text-center">
            <a className="text-light" id="g_home" target="_self">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/house_green.png"
                width="30"
                alt=""
              />{" "}
              <span className="d-block mt-1 mb-0">Home</span>
            </a>
          </li>
        </Link>
        <Link href="/all-games" className="text-light" target="_self">
          <li className="list-group-item border-left-0 border-top-0 border-right-0 btn rounded-0 bg-transparent flex-fill p-1 text-center">
            <a className="text-light" id="g_games" target="_self">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/calendar_green.png"
                width="30"
                alt=""
              />{" "}
              <span className="d-block mt-1 mb-0">Games</span>
            </a>
          </li>
        </Link>
        <Link href="/tapmad-shop" className="text-light" target="_self">
          <li className="list-group-item border-left-0 btn border-top-0 border-right-0 rounded-0 bg-transparent flex-fill p-1 text-center">
            <a
              // href="https://www.tapmad.com/tapmad-shop"
              className="text-light"
              id="g_rewards"
              target="_self"
            >
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/trophy_green.png"
                width="30"
                alt=""
              />{" "}
              <span className="d-block mt-1 mb-0">T Shop</span>
            </a>
          </li>
        </Link>
        <Link href="/leaderboard" className="text-light" target="_self">
          <li className="list-group-item border-left-0 btn border-top-0 border-right-0 rounded-0 bg-transparent flex-fill p-1 text-center">
            <a className="text-light">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/crown_green.png"
                width="30"
                alt=""
              />{" "}
              <span className="d-block mt-1 mb-0">LeaderBoard</span>
            </a>
          </li>
        </Link>
        <Link href="/my-bids" className="text-light" target="_self">
          <li className="list-group-item border-left-0 btn border-top-0 border-right-0 rounded-0 bg-transparent flex-fill p-1 text-center">
            <a className="text-light">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/mobApp/auction_green.png"
                width="30"
                alt=""
              />{" "}
              <span className="d-block mt-1 mb-0">My Bids</span>
            </a>
          </li>
        </Link> */}
      </ul>
    </div>
  );
}
