import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";
// import "./Header.css";
import { Cookie } from "../../services/cookies";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { tapmadCoin, tapmadLogo, tapmadNews } from "../../services/imagesLink";
import { loggingTags } from "../../services/apilinks";
import { actionsRequestContent } from "../../services/http-service";

export default function Header() {
  const {
    initialState,
    setLoader,
    setisAuthenticateFalse,
    setSearch,
  } = useContext(MainContext);

  const router = useRouter();
  const onClickSignout = () => {
    setLoader(true);
    swal({
      title: "You have logged out!",
      text: "Redirecting you in 2s...",
      timer: 3000,
    }).then((res) => {
      Cookie.setCookies("isAuth", 0);
      setisAuthenticateFalse();
      router.push("/");
      setLoader(false);
    });
  };

  const onClick = () => {
    setSearch(true);
  };

  const onCLickContent = (event) => {
    let body = {
      event: loggingTags.fetch,
      pageName: event,
    };
    actionsRequestContent(body);
  };
  useEffect(() => {}, [initialState.isAuthenticated]);
  return (
    <>
      <div className="container-fluid navbar-light scrolling-navbar tm_top_navi m-0">
        <div className="row">
          <div className="col-6 col-sm-2 col-md-3 col-lg-3">
            <Link href="/" passHref={true} shallow={true}>
              <a className="m-logo btn">
                <img src={tapmadLogo} width="130" alt="logo" />
              </a>
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-6 .col-lg-6 d-none d-sm-block main_menu">
            <ul className="nav justify-content-center">
              <li
                className="nav-item topBarLive"
                onClick={() => onCLickContent("live")}
              >
                <Link href="/live" passHref={true} shallow={true}>
                  <a className="nav-link">Live</a>
                </Link>
              </li>
              <li
                className="nav-item topBarMovies"
                onClick={() => onCLickContent("movies")}
              >
                <Link href="/movies" passHref={true} shallow={true}>
                  <a className="nav-link">Movies</a>
                </Link>
              </li>
              <li
                className="nav-item topBarShows"
                onClick={() => onCLickContent("shows")}
              >
                <Link href="/shows" passHref={true} shallow={true}>
                  <a className="nav-link">Shows</a>
                </Link>
              </li>
              <li
                className="nav-item topBarShows"
                onClick={() => onCLickContent("catchup")}
              >
                <Link href="/catchup" passHref={true} shallow={true}>
                  <a className="nav-link">Catchup</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-10 col-md-9 col-lg-3 additnl_menu">
            <ul className="nav usr_btns justify-content-end">
              <li className="nav-item">
                <a
                  className="btn btn-default search-btn btn-sm"
                  onClick={onClick}
                >
                  <i className="fa fa-search hov-green"></i>
                </a>
              </li>
              <li className="nav-item">
                <p
                  className="tm_stre_lnk"
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontWeight: "bold",
                    float: "left",
                    maxWidth: "80px",
                    display: "block",
                  }}
                >
                  <img
                    src={tapmadCoin}
                    style={{
                      width: "20px",
                      marginTop: "17px",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    className="img-fluid toGames"
                    alt=""
                  />
                </p>
                <a href="news">
                  <img
                    src={tapmadNews}
                    style={{
                      width: "20px",
                      marginTop: "17px",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
              {initialState.isAuthenticated ? (
                <li id="loginAva2" className="nav-item">
                  <a
                    onClick={onClickSignout}
                    className="pull-right d-xs-none btn nav-link hov-green"
                  >
                    Signout
                  </a>
                </li>
              ) : (
                <li
                  id="loginAva1"
                  className="nav-item"
                  onClick={() => onCLickContent("sign-in")}
                >
                  <Link href="/sign-in">
                    <a className="pull-right d-xs-none hov-green">Sign in</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
