import React, { useContext } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { CatchupService } from "../modules/catchup/catchup.service";

export const CatchupContext = React.createContext(null);

export default function CatchupProvider({ children }) {
  const [catchupState, setCatchupState] = React.useState({
    selectedTab: null,
    tabs: [],
  });

  React.useEffect(async () => {
    let data = await CatchupService.getCatchupTvData();
    let tabArray = [];
    if (data) {
      tabArray = data.data.Tabs.map((m) => {
        return {
          TabId: m.TabId,
          TabName: m.TabName,
          TabPosterPath: m.TabPosterPath,
          sections: m.Sections,
        };
      });
      setCatchupState({ tabs: tabArray, selectedTab: tabArray[0] });
    }
  }, []);

  function updateSelectedTab(selectedTab) {
    let stateClone = catchupState;
    setAuthState({
      ...stateClone,
      selectedTab: selectedTab,
    });
  }
  let data = {
    catchupState,
    updateSelectedTab,
  };
  return (
    <CatchupContext.Provider value={data}>{children}</CatchupContext.Provider>
  );
}
