import React, { useContext } from "react";
import { CatchupContext } from "../contexts/CatchupContext";
import { CatchupService } from "../modules/catchup/catchup.service";
import TabSlider from "../modules/catchup/TabSlider";

const catchup = ({ tabs, data }) => {
  //   console.log("rpops: ", data);
  const { catchupState } = useContext(CatchupContext);
  console.log("catchupState: ", catchupState);
  return (
    <div>
      <TabSlider tabs={tabs} />
    </div>
  );
};

export default catchup;

export async function getStaticProps() {
  var data;
  try {
    let resp = await CatchupService.getCatchupTvData();
    data = resp.data;
  } catch (error) {
    data = "";
  }
  console.log("data: ", data);
  let tabArray = [];
  if (data) {
    tabArray = data.Tabs.map((m) => {
      return {
        TabId: m.TabId,
        TabName: m.TabName,
        TabPosterPath: m.TabPosterPath,
      };
    });
  }

  return {
    props: {
      testing: true,
      tabs: tabArray,
      data: data,
    },
  };
}
