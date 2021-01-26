import React from "react";
import SideBar from "./SideBar";
import Router from "next/router";
import Loader from "./Loader";
import { MainContext } from "../contexts/MainContext";

export default function Skeleton({ children }) {
  const { initialState, setLoader } = React.useContext(MainContext);
  Router.onRouteChangeStart = (url) => {
    setLoader(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoader(false);
  };

  Router.onRouteChangeError = () => {
    setLoader(false);
  };
  return (
    <div className="pages_header">
      {initialState.loading ? <Loader /> : null}
      <SideBar />
      <div className="new-wrapper">{children}</div>
    </div>
  );
}
