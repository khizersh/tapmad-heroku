import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";
import { loggingTags } from "../services/apilinks";
import { Cookie } from "../services/cookies";
import { actionsRequestContent } from "../services/http-service";

const AuthenticatedSidebar = () => {
  const router = useRouter();
  const { setLoader, setisAuthenticateFalse } = useContext(MainContext);

  const onClickSignout = async () => {
    setLoader(true);
    let data = {
      UserId: Cookie.getCookies("userId"),
      headers: {
        Authorization: Cookie.getCookies("content-token"),
      },
    };
    const resp = await AuthService.logoutUser(data);

    if (resp && resp.Response.responseCode == 1) {
      swal({
        title: "You have logged out!",
        text: "Redirecting you in 2s...",
        timer: 1900,
        icon: "success",
        buttons: false,
      }).then((res) => {
        Cookie.setCookies("isAuth", 0);
        setisAuthenticateFalse();
        router.push("/");
        setLoader(false);
      });
    } else {
      swal({
        title: "Something went wrong. Please try again!",
        timer: 1900,
        icon: "error",
        buttons: false,
      });
    }
  };

  const onCLickContent = (page) => {
    let body = {
      event: loggingTags.fetch,
      pageName: page,
    };
    actionsRequestContent(body);
  };
  return (
    <>
      <li className="logouts_contain" onClick={() => onCLickContent("profile")}>
        <Link href="/myaccount" shallow={true} passHref={true}>
          <a>
            Profile
            <span className="icon">
              <i className="fa fa-user-plus"></i>
            </span>
          </a>
        </Link>
      </li>
      <li
        className="sideBarGame"
        style={{ display: "list-item" }}
        onClick={() => onCLickContent("game")}
      >
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
