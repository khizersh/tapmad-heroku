import React from "react";
import MatchBids from "../components/psl/bids/MatchBids";
import GameLayout from "../modules/game/components/GameLayout";
import styles from "../modules/game/game.module.css"

const Allgames = () => {
  return (
    <GameLayout>
      <div className={styles.width}>
        <MatchBids game="12" />
      </div>
    </GameLayout>
  );
};

export default Allgames;
