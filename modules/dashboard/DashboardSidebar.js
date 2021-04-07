import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
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
            {/* <li>
              <Link href="/dashboard/faq" shallow={true} passHref={true}>
                <a>
                  Faq setting
                  <span className="icon">
                    <i className="fa fa-video-camera"></i>
                  </span>
                </a>
              </Link>
            </li> */}
            <li>
              <Link
                href="/dashboard/homepage-ads"
                shallow={true}
                passHref={true}
              >
                <a>
                  Home page ads
                  <span className="icon">
                    <i className="fa fa-film"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/ads" shallow={true} passHref={true}>
                <a>
                  Player page ads
                  <span className="icon">
                    <i className="fa fa-ticket"></i>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/login" shallow={true} passHref={true}>
                <a>
                  Login
                  <span className="icon">
                    <i className="fa fa-circle-o"></i>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
