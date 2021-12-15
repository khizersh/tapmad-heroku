import React, { useState, useEffect } from "react";
import BottomNav from "./bottom-nav";
import BuyCoinModal from "./BuyCoinModal";

const GameLayout = ({ children }) => {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   if(window.innerWidth <= 800){
  //     if(window.parent && window.parent.location && window.parent.location.pathname.includes("watch")){
  //       setShow(false)
  //     }
  //   }
  // }, [])

  return (
    // <div className="game-header">
    <div >
      {children}
      <BottomNav />
    </div>
  );
};

export default GameLayout;
