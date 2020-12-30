import React from "react";
import SideBar from "./sidebar";

export default function Skeleton({ children }) {
  return (
    <div class="pages_header">
      <SideBar />
      <div class="new-wrapper">{children}</div>
    </div>
  );
}