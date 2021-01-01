import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <>
      <div className="container-fluid navbar-light scrolling-navbar tm_top_navi m-0">
        <div className="row">
          <div className="col-6 col-sm-2 col-md-3 col-lg-3">
            <a href="/" className="tm_logo_grn">
              <img
                src="https://www.tapmad.com/images/tm-logo.png"
                width="130"
                alt=""
              />
            </a>
          </div>
          <div className="col-6 col-sm-6 col-md-6 .col-lg-6 d-none d-sm-block main_menu">
            <ul className="nav justify-content-center">
              <li className="nav-item topBarLive">
                <a className="nav-link" href="/live">
                  Live
                </a>
              </li>
              <li className="nav-item topBarMovies">
                <a className="nav-link" href="/movies">
                  Movies
                </a>
              </li>
              <li className="nav-item topBarShows">
                <a className="nav-link" href="/shows">
                  Shows
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-10 col-md-9 col-lg-3 additnl_menu">
            <ul className="nav usr_btns justify-content-end">
              <li className="nav-item">
                <a className="btn btn-default search-btn btn-sm">
                  <i className="fa fa-search"></i>
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

              <li id="loginAva1" className="nav-item">
                <a href="sign-in" className="pull-right d-xs-none">
                  Sign in
                </a>
              </li>

              <li id="loginAva2" className="nav-item hidden">
                <a href="#" className="pull-right d-xs-none">
                  Signout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
