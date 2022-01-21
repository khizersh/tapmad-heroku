import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MainContext } from "../contexts/MainContext";
import { loggingTags } from "../services/apilinks";
import AuthenticatedSidebar from "./AuthenticatedSidebar";
import NotAuthenticatedSidebar from "./NotAuthenticatedSidebar";
import { actionsRequestContent } from "../services/http-service";
import { tapmadLogo } from "../services/imagesLink";
import { AuthService } from "../modules/auth/auth.service";
import { useRouter } from "next/router";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { USER_COUNTRY } from "../contexts/auth/SignUpReducer";

export default function SideBar() {
  const [isAuth, setIsAuth] = useState(false);
  const [countries, setCountries] = useState([]);
  const router = useRouter();
  function toggleNavbar() {
    document.querySelector(".nav-toggle").classList.toggle("openNav");
    document.querySelector(".menu").classList.toggle("active-nav");
    onMouseLeave(); // Remove hover class
  }
  const { initialState, setSearch } = React.useContext(MainContext);
  const { dispatch } = React.useContext(SignUpContext);

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

  const onMouseHover = () => {
    document.querySelector(".menu:not(.hover-nav)")?.classList.add("hover-nav");
  };

  const onMouseLeave = () => {
    document.querySelector(".menu.hover-nav")?.classList.remove("hover-nav");
  };

  useEffect(() => {
    document.querySelector(".menu.active-nav")?.classList.remove("active-nav");
    document.querySelector(".menu.hover-nav")?.classList.remove("hover-nav");
  }, [router]);
  useEffect(() => {
    if (initialState) {
      setIsAuth(initialState.isAuthenticated);
    }
  }, [initialState.isAuthenticated]);
  return (
    <div
      className="primary-nav"
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="hamburger hamburger-icon open-panel nav-toggle"
        onClick={toggleNavbar}
      >
        &nbsp;
      </button>
      <nav className="menu">
        <Link href="/" shallow={true} passHref={true}>
          <a className="logotype" onClick={() => onCLickContent("homepage")}>
            <img
              src={tapmadLogo}
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
            <li onClick={() => onCLickContent("news")}>
              <Link href="/news" shallow={true} passHref={true}>
                <a>
                  News
                  <span className="icon">
                    <i className="fa fa-newspaper-o"></i>
                  </span>
                </a>
              </Link>
            </li>
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
