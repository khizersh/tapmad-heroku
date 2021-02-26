import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";
import "../../components/App/Header.css";
import { Cookie } from "../../services/cookies";
import swal from "sweetalert";
import { useRouter } from "next/router";

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
      text: "Redirecting you ...",
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

  useEffect(() => {}, [initialState.isAuthenticated]);
  return (
    <>
      <div className="container-fluid navbar-light scrolling-navbar tm_top_navi m-0">
        <div className="row">
          <div className="col-6 col-sm-2 col-md-3 col-lg-3">
            <Link href="/">
              <img
                className="m-logo btn"
                src="https://www.tapmad.com/images/tm-logo.png"
                width="130"
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-6 .col-lg-6 d-none d-sm-block main_menu">
            <ul className="nav justify-content-center">
              <li className="nav-item topBarLive">
                <Link href="/live" passHref={true} shallow={true}>
                  <a className="nav-link">Live</a>
                </Link>
              </li>
              <li className="nav-item topBarMovies">
                <a className="nav-link" href="/movies">
                  Movies
                </a>
              </li>
              <li className="nav-item topBarShows">
                <Link href="/shows" passHref={true} shallow={true}>
                  <a className="nav-link">Shows</a>
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
                    src="https://www.tapmad.com/images/coint.png"
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
                <a href="/news">
                  <img
                    src="https://www.tapmad.com/images/news-btn.png"
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
                <li id="loginAva1" className="nav-item">
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
