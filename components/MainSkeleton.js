import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Router from "next/router";
import Loader from "./Loader";
import { MainContext } from "../contexts/MainContext";
import Search from "../modules/search/Search";
import { closeNavBar, setUrlToCookies } from "../services/utils";
import { Authcontext } from "../contexts/AuthContext";

export default function Skeleton({ children }) {
  const { initialState, setLoader } = React.useContext(MainContext);
  // const { authState } = React.useContext(Authcontext);

  Router.onRouteChangeStart = (url) => {
    // console.log(url);
    // closeNavBar();
    let key = url.split("/")[1];
    setUrlToCookies(key, url);
    setLoader(true);
  };
  Router.onRouteChangeComplete = () => {
    setLoader(false);
  };

  Router.onRouteChangeError = () => {
    setLoader(false);
  };

  useEffect(() => { }, [initialState.isSearch]);

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
