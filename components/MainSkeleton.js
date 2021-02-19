import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Router from "next/router";
import Loader from "./Loader";
import { MainContext } from "../contexts/MainContext";
import Search from "../modules/search/Search";

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

  useEffect(() => {}, [initialState.isSearch]);

  return (
    <div className="pages_header">
      {initialState.loading ? <Loader /> : null}
      {initialState.isSearch ? (
        <Search />
      ) : (
        <>
          <SideBar />
          <div className="new-wrapper">{children}</div>
        </>
      )}
    </div>
  );
}
