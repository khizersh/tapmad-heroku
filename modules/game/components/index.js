import React from "react";
import LeftSidebar from "./left-sidebar";
import GameMain from "./game-main";
import RightSideBar from "./right-sidebar";
import BottomNav from "./bottom-nav";

export default function Game() {
  return (
    <div className="container-fluid pt-3 pt-md-3">
      <div className="row">
        <div className="col-12 col-sm-5 col-md-5 col-lg-3 d-lg-block">
          <LeftSidebar />
        </div>
        <div className="col-12 col-sm-9 col-md-6 col-lg-6">
          <GameMain />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
          <RightSideBar />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}