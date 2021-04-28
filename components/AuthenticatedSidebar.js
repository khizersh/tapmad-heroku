import Link from "next/link";
import React from "react";
import withSignout from "../modules/auth/signout/SignoutHOC";
import { loggingTags } from "../services/apilinks";
import { actionsRequestContent } from "../services/http-service";

const AuthenticatedSidebarBasic = ({ signout }) => {
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
      <li className="sign-out">
        <a onClick={signout}>
          Signout
          <span className="icon">
            <i className="fa fa-sign-in"></i>
          </span>
        </a>
      </li>
    </>
  );
};

const AuthenticatedSidebar = withSignout(AuthenticatedSidebarBasic);
export default AuthenticatedSidebar;
