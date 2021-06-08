import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
// import "./Header.css";
import { tapmadCoin, tapmadLogo, tapmadNews } from "../../services/imagesLink";
// import tapLogo from "../../public/icons/tm-logo.png";
import { loggingTags } from "../../services/apilinks";
import { actionsRequestContent } from "../../services/http-service";
import withSignout from "../../modules/auth/signout/SignoutHOC";
import { AuthService } from "../../modules/auth/auth.service";

function HeaderBasic({ signout }) {
  const [country, setCountry] = useState("PK");
  const { initialState } = useContext(MainContext);

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

  useEffect(async () => {
    const country = await AuthService.getGeoInfo();
    if (country) {
      country.countryCode == "PK";
      setCountry(country.countryCode);
    }
  }, []);
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
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 d-none d-sm-block main_menu">
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
              {country && country == "PK" ? (
                <li className="nav-item">
                  <Link href="/game" passHref={true} shallow={true}>
                    <a>
                      <img
                        src={tapmadCoin}
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
                  </Link>
                </li>
              ) : (
                ""
              )}

              <li className="nav-item">
                <Link href="/news" passHref={true} shallow={true}>
                  <a ariaLabel={"news"}>
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
                </Link>
              </li>
              {initialState.isAuthenticated ? (
                <li id="loginAva2" className="nav-item">
                  <a
                    onClick={signout}
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
const Header = withSignout(HeaderBasic);
export default Header;
