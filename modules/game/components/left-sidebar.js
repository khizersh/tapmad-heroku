import React, { useState, useEffect } from "react";
import Link from "next/link";
import BuyCoinModal from "./BuyCoinModal";

export default function LeftSidebar() {
  const [buyCoinModal, setBuyCoinModal] = useState(false);

  const onClickBuy = () => {
    setBuyCoinModal(!buyCoinModal);
  };

  return (
    <div>
      <BuyCoinModal open={buyCoinModal} toggle={onClickBuy} />
      <div className="tm_btng_sidebar mb-3 text-center">
        <div className="tm_btng_sidebar_hdr mb-2 d-none d-lg-block d-md-none">
          <h5>User Profile</h5>
        </div>
        <div className="tm_btn_usr_img_nme">
          <div className="row">
            <div className="col-lg-4 col-md-4 d-none d-lg-block d-md-block">
              <div className="p-2 tm_btng_sidebar_btns">
                <Link href="/my-bids">
                  <a className="btn border-0 text-muted">
                    <i className="fa fa-btc d-block pb-1"></i>
                    My Bids
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4 ">
              <img
                src="https://app.tapmad.com/pics/profilepics/img-20190528-5ced055b2a438ProfilePicture.jpg"
                className="img-fluid pb-0 mt-2 mb-2 rounded-circle"
                width="60"
                height="60"
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4 d-none d-lg-block d-md-block">
              <div className="p-2 tm_btng_sidebar_btns">
                <a
                  id="buy_coins"
                  className="btn border-0 text-muted"
                  onClick={onClickBuy}
                >
                  <i className="fa fa-gift d-block pb-1"></i>Buy Coins
                </a>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block d-lg-block d-xl-block">
            <h6 className="mt-2 ng-binding"></h6>
            <p className="color-white user-coins ng-binding">Coins : 18999 </p>
            <a
              href="#"
              data-toggle="modal"
              data-target="#largeModal_Learn"
              className="d-block mt-2 text-primary"
            >
              <i className="fa fa-info"></i> Learn more
            </a>
          </div>
        </div>
        <div className="p-0 tm_btng_sidebar_btns2 d-block">
          <a
            href="https://www.tapmad.com/my-bids?channel=inPlay"
            className="btn d-inline-block text-muted"
            target="_self"
          >
            <img src="//d1s7wg2ne64q87.cloudfront.net/web/images/coin-white.png" />
            <p className="m-0 ng-binding">In Play: 0</p>
          </a>
          <a
            href="https://www.tapmad.com/my-bids?channel=won"
            className="btn d-inline-block text-muted"
            target="_self"
          >
            <img src="//d1s7wg2ne64q87.cloudfront.net/web/images/trophy-white.png" />
            <p className="m-0 ng-binding">Won: 4</p>
          </a>
          <a
            href="https://www.tapmad.com/my-bids?channel=lost"
            className="btn d-inline-block text-muted"
            target="_self"
          >
            <img src="//d1s7wg2ne64q87.cloudfront.net/web/images/lost-white.png" />
            <p className="m-0 ng-binding">Lost: 9</p>
          </a>
          <a
            href="https://www.tapmad.com/leaderboard"
            className="btn d-inline-block text-muted"
            target="_self"
          >
            <img src="//d1s7wg2ne64q87.cloudfront.net/web/images/rank-white.png" />
            <p className="m-0 ng-binding">Rank: 0</p>
          </a>
        </div>
      </div>
      <div className="tm_btng_sidebar text-center mb-3  d-none d-lg-block">
        <div className="tm_btng_sidebar_hdr pl-2">
          <h5 className="text-left">Live Sports</h5>
        </div>
        <ul className="text-left list-group-flush list-group">
          <li>
            <a
              className="list-group-item bg-transparent p-2 text-light collapsed"
              data-target="#multiCollapseExample1"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/png-cricket-ball.png"
                className="img-fluid mr-2"
                width="20"
                alt=""
              />
              Cricket<span className="fa fa-plus pull-right mt-1"></span>
            </a>
          </li>
          <li
            className="list-group-item bg-transparent multi-collapse p-0 collapse"
            id="multiCollapseExample1"
          >
            <ul className="list-group-flush list-group text-light m-0">
              <li className="list-group-item bg-transparent tm_btng_sidebar_hdr">
                <h6 className="m-0 text-muted pl-2 ">Today Matches</h6>
              </li>
              <li className="list-group-item bg-transparent text-muted">
                West Indies vs Ireland
              </li>
              <li className="list-group-item bg-transparent text-muted">
                Dhaka Platoon vs Rangpur Rangers
              </li>
              <li className="list-group-item bg-transparent text-muted">
                Melbourne Renegades vs Melbourne Stars
              </li>
            </ul>
          </li>

          <li>
            <a
              className="list-group-item bg-transparent p-2 text-light collapsed"
              data-toggle="collapse"
              data-target="#multiCollapseExample2"
              aria-expanded="false"
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/sports-59/512/Soccer-512.png"
                className="img-fluid mr-2"
                width="20"
                alt=""
              />
              Football<span className="fa fa-plus pull-right mt-1"></span>
            </a>
          </li>
          <li
            className="list-group-item bg-transparent multi-collapse p-0 collapse"
            id="multiCollapseExample2"
          >
            <ul className="list-group-flush list-group text-light m-0">
              <li className="list-group-item bg-transparent tm_btng_sidebar_hdr">
                <h6 className="m-0 text-muted pl-2 ">Today Matches</h6>
              </li>
              <li className="list-group-item bg-transparent text-muted">
                Premier League
              </li>
              <li className="list-group-item bg-transparent text-muted">
                UEFA Champions League
              </li>
              <li className="list-group-item bg-transparent text-muted">
                Primera División
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="tm_btng_sidebar text-center mb-3  d-none d-lg-block">
        <div className="tm_btng_sidebar_hdr pl-2">
          <h5 className="text-left">Live Matches</h5>
        </div>
        <ul className="text-left  list-group-flush list-group">
          <li className="list-group-item bg-transparent p-2">
            <a href="#">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/png-cricket-ball.png"
                className="img-fluid mr-2"
                width="20"
                alt=""
              />
              BPL
            </a>
          </li>
          <li className="list-group-item bg-transparent p-2">
            <a href="#">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/png-cricket-ball.png"
                className="img-fluid mr-2"
                width="20"
                alt=""
              />
              IPL
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
