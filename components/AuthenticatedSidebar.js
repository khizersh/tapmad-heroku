import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { MainContext } from "../contexts/MainContext";
import withSignout from "../modules/auth/signout/SignoutHOC";
import { loggingTags } from "../services/apilinks";
import { actionsRequestContent } from "../services/http-service";

const AuthenticatedSidebarBasic = ({ signout }) => {
  const [game, setGame] = useState(false);
  const { SignUpState } = useContext(SignUpContext);

  const onCLickContent = (page) => {
    // let body = {
    //   event: loggingTags.fetch,
    //   pageName: page,
    // };
    // actionsRequestContent(body);
  };

  return (
    <>
      {SignUpState?.userCountry?.ShortName != "PK" ? (
        <></>
      ) : (
        <li
          className="logouts_contain"
        >
          <Link href="/myaccount" shallow={true} passHref={true}>
            <a>
              User Profile
              <span className="icon">
                <i className="fa fa-user-plus"></i>
              </span>
            </a>
          </Link>
        </li>
      )}
      {game ? (
        <li
          className="sideBarGame"
          style={{ display: "list-item" }}
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
      ) : (
        ""
      )}
      <li className="sign-out">
        <a onClick={signout}>
          Log Out
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
