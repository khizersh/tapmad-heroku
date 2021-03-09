import React from "react";
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import DashboardSidebar from "../../modules/dashboard/DashboardSidebar";

const index = () => {
  return <></>;
};

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}

export default index;
