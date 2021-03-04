import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import "./dashboard.style.css";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardSidebar />
      <div className="container">{children}</div>
    </>
  );
};

export default DashboardLayout;
