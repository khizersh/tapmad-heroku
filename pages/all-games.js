import React, { useEffect, useState } from "react";
import { getAllMatchDetails } from "../components/psl/bids/bids.service";
import MatchBids from "../components/psl/bids/MatchBids";
import AllGameHeader from "../modules/game/components/AllGameHeader";
import GameLayout from "../modules/game/components/GameLayout";
import styles from "../modules/game/game.module.css";

const Allgames = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(async () => {
    let matches = await getAllMatchDetails();
    setData(matches.MatchOdds);
    setFilter(matches.MatchOdds);
  }, []);

  return (
    <GameLayout>
      <div className={styles.width}>
        <AllGameHeader func={setFilter} data={data} />
        {filter && filter.length ? (
          <MatchBids game="12" filteredData={filter} />
        ) : (
          <p className="text-center">No Record Found</p>
        )}
      </div>
    </GameLayout>
  );
};

export default Allgames;
