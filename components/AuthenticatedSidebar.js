import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../contexts/MainContext";
import { Cookie } from "../services/cookies";

const AuthenticatedSidebar = () => {
  const router = useRouter();
  const { setLoader, setisAuthenticateFalse } = useContext(MainContext);
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

  return (
    <>
      <li className="logouts_contain">
        <Link href="/myaccount" shallow={true} passHref={true}>
          <a>
            Profile
            <span className="icon">
              <i className="fa fa-user-plus"></i>
            </span>
          </a>
        </Link>
      </li>
      <li className="sideBarGame" style={{ display: "list-item" }}>
        <Link href="/game" shallow={true} passHref={true}>
          <a>
            Game
            <span className="icon">
              <i className="fa fa-gamepad"></i>
            </span>
          </a>
        </Link>
      </li>
      <li id="loginAva5">
        <a onClick={onClickSignout}>
          Signout
          <span className="icon">
            <i className="fa fa-sign-in"></i>
          </span>
        </a>
      </li>
    </>
  );
};

export default AuthenticatedSidebar;
