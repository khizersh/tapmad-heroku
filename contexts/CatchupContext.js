import React, { useContext } from "react";
import { get } from "../services/http-service";
import { Cookie } from "../services/cookies";
import { CatchupService } from "../modules/catchup/catchup.service";

export const CatchupContext = React.createContext(null);

export default function CatchupProvider({ children }) {
  const [catchupState, setCatchupState] = React.useState({
    selectedTab: null,
    tabs: [],
    relatedContent: [],
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
      setCatchupState({
        tabs: tabArray,
        selectedTab: tabArray[0],
        relatedContent: [],
      });
    }
  }, []);

  function updateSelectedTab(selectedTab) {
    let stateClone = catchupState;
    setCatchupState({
      ...stateClone,
      selectedTab: selectedTab,
    });
  }

  function updateRelatedContent(content) {
    console.log("contentL ", content);
    let stateClone = catchupState;
    setCatchupState({
      ...stateClone,
      relatedContent: content,
    });
  }
  let data = {
    catchupState,
    updateSelectedTab,
    updateRelatedContent,
  };
  return (
    <CatchupContext.Provider value={data}>{children}</CatchupContext.Provider>
  );
}
