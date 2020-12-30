import React from "react";
import SideBar from "./SideBar";

export default function Skeleton({ children }) {
  return (
    <div className="pages_header">
      <SideBar />
      <div className="new-wrapper">{children}</div>
    </div>
  );
}
