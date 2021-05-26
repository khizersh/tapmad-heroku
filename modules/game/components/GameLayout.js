import React from "react";
import BottomNav from "./bottom-nav";
import BuyCoinModal from "./BuyCoinModal";

const GameLayout = ({ children }) => {
  return (
    <div>
      <BuyCoinModal />
      {children}
      <BottomNav />
    </div>
  );
};

export default GameLayout;
