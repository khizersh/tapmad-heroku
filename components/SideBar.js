import React from "react";

export default function SideBar() {
  function toggleNavbar() {
    document.getElementsByTagName("html")[0].classList.toggle("openNav");
    document.getElementsByClassName("nav-toggle")[0].classList.toggle("active");
  }
  return (
    <div className="primary-nav">
      <button
        className="hamburger open-panel nav-toggle"
        onClick={toggleNavbar}
      ></button>
      <nav className="menu">
        <a href="/" className="logotype">
          <img
            src="https://www.tapmad.com/images/tm-logo.png"
            width="115"
            className="img-fluid img-responsive"
            alt="tapmad logo"
          />
        </a>
        <div className="overflow-container">
          <ul className="menu-dropdown">
            <li>
              <a href="/live">Live</a>
              <span className="icon">
                <i className="fa fa-video-camera"></i>
              </span>
            </li>
            <li>
              <a href="/movies">Movies</a>
              <span className="icon">
                <i className="fa fa-film"></i>
              </span>
            </li>
            <li>
              <a href="/shows">Shows</a>
              <span className="icon">
                <i className="fa fa-ticket"></i>
              </span>
            </li>
            <li>
              <a href="/catchup">Catchup</a>
              <span className="icon">
                <i className="fa fa-circle-o"></i>
              </span>
            </li>
            <li>
              <a href="news">News</a>
              <span className="icon">
                <i className="fa fa-newspaper-o"></i>
              </span>
            </li>
            <li className="sideBarGame" style={{ display: "list-item" }}>
              <a href="/game">Game</a>
              <span className="icon">
                <i className="fa fa-gamepad"></i>
              </span>
            </li>
            <li className="subs_contain" id="signUpMenu">
              <a href="/sign-up">Subscribe</a>
              <span className="icon">
                <i className="fa fa-user-plus"></i>
              </span>
            </li>
            <li className="logouts_contain">
              <a href="/myaccount">Profile</a>
              <span className="icon">
                <i className="fa fa-user-plus"></i>
              </span>
            </li>
            <li className="promoDiv" style={{ display: "list-item" }}>
              <a href="/promo-code">Promo code</a>
              <span className="icon">
                <i className="fa fa-gift"></i>
              </span>
            </li>
            <li>
              <a className="search-btn">Search</a>
              <span className="icon">
                <i className="fa fa-search"></i>
              </span>
            </li>
            <li id="loginAva5" className="hidden">
              <a href="#">Signout</a>
              <span className="icon">
                <i className="fa fa-sign-in"></i>
              </span>
            </li>

            <li id="loginAva3">
              <a href="sign-in">Sign In</a>
              <span className="icon">
                <i className="fa fa-sign-in"></i>
              </span>
            </li>

            <li>
              <a href="/about">About Us</a>
              <span className="icon">
                <i className="fa fa-bookmark-o"></i>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
