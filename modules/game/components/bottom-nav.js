import React from "react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="gm_foo_nav fixed-bottom ng-scope">
      <ul
        className="gm_mob_menu list-group list-group-horizontal d-flex"
        id="footer_nav_a"
      >
        <Link href="/game" className="text-light" target="_self">
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
              <span className="d-block mt-1 mb-0">leaderBoard</span>
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
        </Link>
      </ul>
    </div>
  );
}
