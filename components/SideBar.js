import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import { loggingTags } from "../services/apilinks";
import AuthenticatedSidebar from "./AuthenticatedSidebar";
import NotAuthenticatedSidebar from "./NotAuthenticatedSidebar";
import { actionsRequestContent } from "../services/http-service";

export default function SideBar() {
  const [isAuth, setIsAuth] = useState(false);
  function toggleNavbar() {
    document
      .getElementsByClassName("nav-toggle")[0]
      .classList.toggle("openNav");
    // document.getElementsByTagName("html")[0].classList.toggle("menu").style = "left:"
    // document.getElementsByClassName("nav-toggle")[0].classList.toggle("menu");
    document.getElementsByClassName("menu")[0].classList.toggle("active");
    // document.getElementsByClassName("menu")[0].classList.toggle("active");
  }
  const { initialState, setSearch } = React.useContext(MainContext);

  const onClickSearch = () => {
    setSearch(!initialState.isSearch);
  };

  const onCLickContent = (page) => {
    let body = {
      event: loggingTags.fetch,
      pageName: page,
    };
    actionsRequestContent(body);
  };
  useEffect(() => {
    if (initialState) {
      setIsAuth(initialState.isAuthenticated);
    }
  }, [initialState.isAuthenticated]);
  return (
    <div className="primary-nav">
      <button
        className="hamburger hamburger-icon open-panel nav-toggle"
        onClick={toggleNavbar}
      ></button>
      <nav className="menu">
        <Link href="/" shallow={true} passHref={true}>
          <a className="logotype" onClick={() => onCLickContent("homepage")}>
            <img
              src="https://www.tapmad.com/images/tm-logo.png"
              width="115"
              className="img-fluid img-responsive"
              alt="tapmad logo"
            />
          </a>
        </Link>
        <div className="overflow-container">
          <ul className="menu-dropdown">
            <li onClick={() => onCLickContent("live")}>
              <Link href="/live" shallow={true} passHref={true}>
                <a>
                  Live
                  <span className="icon">
                    <i className="fa fa-video-camera"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={() => onCLickContent("movies")}>
              <Link href="/movies" shallow={true} passHref={true}>
                <a>
                  Movies
                  <span className="icon">
                    <i className="fa fa-film"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={() => onCLickContent("shows")}>
              <Link href="/shows" shallow={true} passHref={true}>
                <a>
                  Shows
                  <span className="icon">
                    <i className="fa fa-ticket"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li onClick={() => onCLickContent("catchup")}>
              <Link href="/catchup" shallow={true} passHref={true}>
                <a>
                  Catchup
                  <span className="icon">
                    <i className="fa fa-circle-o"></i>
                  </span>
                </a>
              </Link>
            </li>
            {/* <li onClick={() => onCLickContent("news")}>
              <Link href="news" shallow={true} passHref={true}>
                <a>
                  News
                  <span className="icon">
                    <i className="fa fa-newspaper-o"></i>
                  </span>
                </a>
              </Link>
            </li> */}
            {/* conditional menu */}
            {isAuth ? (
              <AuthenticatedSidebar onClick={onCLickContent} />
            ) : (
              <NotAuthenticatedSidebar onClick={onCLickContent} />
            )}

            <li onClick={() => onCLickContent("search")}>
              <a onClick={onClickSearch} className="search-btn">
                Search
                <span className="icon">
                  <i className="fa fa-search"></i>
                </span>
              </a>
            </li>

            <li>
              <Link
                href="/about"
                shallow={true}
                passHref={true}
                onClick={() => onCLickContent("about_us")}
              >
                <a>
                  About Us
                  <span className="icon">
                    <i className="fa fa-bookmark-o"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                shallow={true}
                passHref={true}
                onClick={() => onCLickContent("faq")}
              >
                <a>
                  FAQ
                  <span className="icon">
                    <i className="fa fa-question-circle"></i>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
