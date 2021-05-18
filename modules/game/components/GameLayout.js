import React from "react";
import BottomNav from "./bottom-nav";

const GameLayout = ({ children }) => {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
};

export default GameLayout;
