import React from "react";
import LeftSidebar from "./left-sidebar";
import GameMain from "./game-main";
import RightSideBar from "./right-sidebar";
import BottomNav from "./bottom-nav";
import GameLayout from "./GameLayout";
import MatchBids from "../../../components/psl/bids/MatchBids";

export default function Game() {
  return (
    <GameLayout>
      <div className="container-fluid pt-3 pt-md-3">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-5 col-lg-3 d-lg-block">
            <LeftSidebar />
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-lg-6">
            {/* <GameMain /> */}
            <div>
              <img
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/GamePageBanner.jpg"
                alt="psl image"
                width="100%"
              />
            </div>
            <MatchBids game="12" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <RightSideBar />
          </div>
        </div>
      </div>
    </GameLayout>
  );
}
