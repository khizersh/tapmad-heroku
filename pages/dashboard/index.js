import React from "react";
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import DashboardSidebar from "../../modules/dashboard/DashboardSidebar";

const index = () => {
  return <DashboardLayout>gsafkjsafkjgsafjasgkjfgsa</DashboardLayout>;
};

export async function getStaticProps() {
  return { props: { noSideBar: true } };
}

export default index;
