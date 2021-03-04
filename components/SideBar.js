import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import AuthenticatedSidebar from "./AuthenticatedSidebar";
import NotAuthenticatedSidebar from "./NotAuthenticatedSidebar";

export default function SideBar() {
  const [isAuth, setIsAuth] = useState(false);
  function toggleNavbar() {
    document.getElementsByTagName("html")[0].classList.toggle("openNav");
    document.getElementsByClassName("nav-toggle")[0].classList.toggle("active");
  }
  const { initialState, setSearch } = React.useContext(MainContext);

  const onClickSearch = () => {
    setSearch(!initialState.isSearch);
  };

  useEffect(() => {
    if (initialState) {
      setIsAuth(initialState.isAuthenticated);
    }
  }, [initialState.isAuthenticated]);
  return (
    <div className="primary-nav">
      <button
        className="hamburger open-panel nav-toggle"
        onClick={toggleNavbar}
      ></button>
      <nav className="menu">
        <Link href="/" shallow={true} passHref={true}>
          <a className="logotype">
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
            <li>
              <Link href="/live" shallow={true} passHref={true}>
                <a>
                  Live
                  <span className="icon">
                    <i className="fa fa-video-camera"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/movies" shallow={true} passHref={true}>
                <a>
                  Movies
                  <span className="icon">
                    <i className="fa fa-film"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shows" shallow={true} passHref={true}>
                <a>
                  Shows
                  <span className="icon">
                    <i className="fa fa-ticket"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/catchup" shallow={true} passHref={true}>
                <a>
                  Catchup
                  <span className="icon">
                    <i className="fa fa-circle-o"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="news" shallow={true} passHref={true}>
                <a>
                  News
                  <span className="icon">
                    <i className="fa fa-newspaper-o"></i>
                  </span>
                </a>
              </Link>
            </li>
            {/* conditional menu */}
            {isAuth ? <AuthenticatedSidebar /> : <NotAuthenticatedSidebar />}

            <li className="promoDiv" style={{ display: "list-item" }}>
              <Link href="/promo-code" shallow={true} passHref={true}>
                <a>
                  Promo code
                  <span className="icon">
                    <i className="fa fa-gift"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <a onClick={onClickSearch} className="search-btn">
                Search
                <span className="icon">
                  <i className="fa fa-search"></i>
                </span>
              </a>
            </li>

            <li>
              <Link href="/about" shallow={true} passHref={true}>
                <a>
                  About Us
                  <span className="icon">
                    <i className="fa fa-bookmark-o"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faqs" shallow={true} passHref={true}>
                <a>
                  FAQ
                  <span className="icon">
                    <i class="fa fa-question-circle"></i>
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
