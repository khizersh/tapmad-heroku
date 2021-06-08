import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import BuyCoinModal from "./BuyCoinModal";
import { Accordion, Card } from "react-bootstrap";
import styles from "../game.module.css";
import LearnModal from "./LearnModal";
import { GameContext } from "../../../contexts/GameContext";
import { getUserChallengeData } from "../../../components/psl/bids/bids.service";
import { Cookie } from "../../../services/cookies";

export default function LeftSidebar() {
  const [userChallenge, setUserChallenge] = useState(null);
  const [learnMore, setLearnMore] = useState(false);
  const { gameState, updateBuyModal, updateUserCoin } = useContext(GameContext);

  const onClickBuy = () => {
    updateBuyModal(true);
  };

  const onClickLearnMore = () => {
    setLearnMore(!learnMore);
  };

  useEffect(() => {
    let userId = Cookie.getCookies("userId");
    if (userId) {
      let body = {
        Language: "en",
        Platform: "Web",
        UserId: userId,
        Version: "V1",
      };
      getUserChallengeData(body)
        .then((res) => {
          if (res && res.data && res.data.responseCode == 1) {
            setUserChallenge(res.data);
          }
        })
        .catch((e) => console.log(e));
    }

    let userCoin = Cookie.getCookies("userCoins");
    updateUserCoin(userCoin);
  }, [gameState.userCoin]);

  return (
    <div>
      {/* <BuyCoinModal /> */}
      <LearnModal open={learnMore} toggle={onClickLearnMore} />
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
                src="/static/ava.png"
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
            <p className="color-white user-coins ng-binding">
              Coins : {gameState && gameState.userCoin > 0 ? gameState.userCoin : 0}{" "}
            </p>
            <a
              href="#"
              data-toggle="modal"
              data-target="#largeModal_Learn"
              className="d-block mt-2 text-primary"
              onClick={onClickLearnMore}
            >
              <i className="fa fa-info"></i> Learn more
            </a>
          </div>
        </div>
        <div className="p-0 tm_btng_sidebar_btns2 d-block">
          <Link href="/my-bids?channel=play">
            <a className="btn d-inline-block text-muted" target="_self">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/coin-white.png"
                alt="in-play"
              />
              <p className="m-0 ng-binding">
                In Play:{userChallenge ? userChallenge.InPlay : 0}
              </p>
            </a>
          </Link>
          <Link href="/my-bids?channel=won">
            <a className="btn d-inline-block text-muted" target="_self">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/trophy-white.png"
                alt="won"
              />
              <p className="m-0 ng-binding">
                Won: {userChallenge ? userChallenge.Won : 0}
              </p>
            </a>
          </Link>
          <Link href="/my-bids?channel=lost">
            <a className="btn d-inline-block text-muted" target="_self">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/lost-white.png"
                alt="Lost"
              />
              <p className="m-0 ng-binding">
                Lost: {userChallenge ? userChallenge.Lost : 0}
              </p>
            </a>
          </Link>
          <Link href="/leaderboard">
            <a className="btn d-inline-block text-muted" target="_self">
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/rank-white.png"
                alt="rank"
              />
              <p className="m-0 ng-binding">
                Rank: {userChallenge ? userChallenge.Rank : 0}
              </p>
            </a>
          </Link>
        </div>
      </div>
      {/* 
      <div className="tm_btng_sidebar text-center mb-3 d-none d-lg-block">
        <div className="tm_btng_sidebar_hdr pl-2">
          <h5 className="text-left">Live Sports</h5>
        </div>
        <Accordion>
          <Card style={{ backgroundColor: "#121117" }}>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.tm_btng_sidebar_hdr}
              eventKey="0"
            >
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/png-cricket-ball.png"
                className="img-fluid mr-2"
                width="20"
                alt=""
              />
              Cricket
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="tm_btng_sidebar_hdr">
              <ul className="list-group-flush list-group text-light m-0">
                <li
                  className="list-group-item "
                  className={styles.sideBarLiHeader}
                >
                  <h6 className="m-0 text-muted text-left pl-2">
                    Today Matches
                  </h6>
                </li>
                <li
                  className="list-group-item text-muted text-left"
                  className={styles.listSidebar}
                >
                  <a href="#" className="text-muted">
                    West Indies vs Ireland
                  </a>
                </li>
                <li
                  className="list-group-item text-muted text-left"
                  className={styles.listSidebar}
                >
                  <a href="#" className="text-muted">
                    Dhaka Platoon vs Rangpur Rangers
                  </a>
                </li>
                <li
                  className="list-group-item  text-left"
                  className={styles.listSidebar}
                >
                  <a href="#" className="text-muted">
                    Melbourne Renegades vs Melbourne Stars
                  </a>
                </li>
              </ul>
            </Accordion.Collapse>
          </Card>
          <Card style={{ backgroundColor: "#121117" }}>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.tm_btng_sidebar_hdr}
              eventKey="1"
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/sports-59/512/Soccer-512.png"
                alt=""
                width="22px"
              />{" "}
              Football
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="tm_btng_sidebar_hdr">
              <ul className="list-group-flush list-group text-light m-0">
                <li
                  className="list-group-item "
                  className={styles.sideBarLiHeader}
                >
                  <h6 className="m-0 text-muted text-left pl-2">
                    Today Matches
                  </h6>
                </li>
                <li
                  className="list-group-item text-muted text-left"
                  className={styles.listSidebar}
                >
                  <a href="#" className="text-muted">
                    Premier League
                  </a>
                </li>
                <li
                  className="list-group-item text-muted text-left"
                  className={`${styles.listSidebar}`}
                >
                  <a href="#" className="text-muted">
                    UEFA Champions League
                  </a>
                </li>
                <li
                  className="list-group-item  text-left"
                  className={styles.listSidebar}
                >
                  <a href="#" className="text-muted">
                    Primera División
                  </a>
                </li>
              </ul>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div> */}
      {/* <div className="tm_btng_sidebar text-center mb-3  d-none d-lg-block">
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
      </div> */}
    </div>
  );
}
