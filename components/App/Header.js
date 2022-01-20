import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
// import "./Header.css";
import { tapmadCoin, tapmadLogo, tapmadNews } from "../../services/imagesLink";
// import tapLogo from "../../public/icons/tm-logo.png";
import withSignout from "../../modules/auth/signout/SignoutHOC";
import { AuthService } from "../../modules/auth/auth.service";
import InstallMobileApp from "../../modules/game/components/InstallMobileApp";
import { Cookie } from "../../services/cookies";
import { SignUpContext } from "../../contexts/auth/SignUpContext";

function HeaderBasic({ signout }) {
  const [country, setCountry] = useState("PK");
  const [hidePopup, setHidePopup] = useState(false);
  const { initialState, setSearch } = useContext(MainContext);
  const { SignUpState } = useContext(SignUpContext);

  const onClick = () => {
    setSearch(true);
  };

  const onClose = () => {
    Cookie.setCookies("hidePopup", true);
    setHidePopup(true);
    setTimeout(() => {
      setHidePopup(false);
      Cookie.setCookies("hidePopup", false);
    }, 1.8e9);
  };

  useEffect(async () => {
    const country = await AuthService.getGeoInfo();
    console.log(initialState, "initial");
    if (country) {
      country.countryCode == "PK";
      setCountry(country.countryCode);
    }
    if (Cookie.getCookies("hidePopup")) {
      setHidePopup(true);
      setTimeout(() => {
        setHidePopup(false);
        Cookie.setCookies("hidePopup", false);
      }, 1.8e9);
    }
  }, []);

  return (
    <>
      {SignUpState.isMobile && !hidePopup ? (
        <InstallMobileApp onClose={onClose} />
      ) : (
        <></>
      )}
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
              <li className="nav-item topBarLive">
                <Link href="/live" passHref={true} shallow={true}>
                  <a className="nav-link">Live</a>
                </Link>
              </li>
              <li className="nav-item topBarMovies">
                <Link href="/movies" passHref={true} shallow={true}>
                  <a className="nav-link">Movies</a>
                </Link>
              </li>
              <li className="nav-item topBarShowhides">
                <Link href="/shows" passHref={true} shallow={true}>
                  <a className="nav-link">Shows</a>
                </Link>
              </li>
              <li className="nav-item topBarShows">
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
                  <Link
                    href="/game"
                    passHref={true}
                    prefetch={false}
                    shallow={true}
                  >
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
                  <a aria-label={"news"}>
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
              {country && country == "PK" ? (
                initialState.isAuthenticated ? (
                  <li id="loginAva2" className="nav-item">
                    <a
                      onClick={signout}
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
                )
              ) : (
                <></>
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
