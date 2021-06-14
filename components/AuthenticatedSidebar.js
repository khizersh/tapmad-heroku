import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import withSignout from "../modules/auth/signout/SignoutHOC";
import { loggingTags } from "../services/apilinks";
import { actionsRequestContent } from "../services/http-service";

const AuthenticatedSidebarBasic = ({ signout, country }) => {
  const { initialState } = useContext(MainContext);
  const [game, setGame] = useState(false);

  const onCLickContent = (page) => {
    let body = {
      event: loggingTags.fetch,
      pageName: page,
    };
    actionsRequestContent(body);
  };

  useEffect(() => {
    // if (initialState.countryCode && initialState.countryCode == "PK") {
    if (
      initialState &&
      initialState.AuthDetails &&
      initialState.AuthDetails.CountryCode == "PK"
    ) {
      setGame(true);
    }
  }, [initialState.AuthDetails, country]);

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
      {game ? (
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
      ) : (
        ""
      )}
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
