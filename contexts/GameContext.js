import React, { useContext } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import {
  getAllLeagueOnline,
  getLeaderBoardByLeague,
} from "../components/psl/bids/bids.service";

export const GameContext = React.createContext(null);

export default function GameProvider({ children }) {
  const [gameState, setGameState] = React.useState({
    selectedTab: null,
    tabs: [],
    buyModal: false,
    userCoin: 0,
  });

  React.useEffect(async () => {
    await getAllLeagueTabs();
  }, []);

  async function getAllLeagueTabs() {
    try {
      const res = await getAllLeagueOnline();
      if (res && res.responseCode == 1) {
        if (res.data.Leagues) {
          setGameState({
            ...gameState,
            tabs: res.data.Leagues,
            selectedTab: { ...res.data.Leagues[0], offset: 0 },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function updateSelectedTab(selectedTab) {
    let stateClone = gameState;
    setGameState({
      ...stateClone,
      selectedTab: selectedTab,
    });
  }
  function updateUserCoin(coin) {
    let stateClone = gameState;
    setGameState({
      ...stateClone,
      userCoin: coin,
    });
  }
  function updateBuyModal(data) {
    let stateClone = gameState;
    setGameState({
      ...stateClone,
      buyModal: data,
    });
  }

  let data = {
    gameState,
    updateSelectedTab,
    updateBuyModal,
    updateUserCoin,
  };
  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
}
