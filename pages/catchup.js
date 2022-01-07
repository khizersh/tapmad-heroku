import React from "react";
import TabDetails from "../modules/catchup/TabDetails";
import TabSlider from "../modules/catchup/TabSlider";

const catchup = () => {
  return (
    <div className="container-fluid">
      <TabSlider />
      <TabDetails />
    </div>
  );
};

export default catchup;
