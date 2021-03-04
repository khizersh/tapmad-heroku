import React from "react";

const NotAuthenticatedSidebar = () => {
  return (
    <>
      <li className="subs_contain" id="signUpMenu">
        <a href="/sign-up">Subscribe</a>
        <span className="icon">
          <i className="fa fa-user-plus"></i>
        </span>
      </li>
      <li id="loginAva3">
        <a href="sign-in">Sign In</a>
        <span className="icon">
          <i className="fa fa-sign-in"></i>
        </span>
      </li>
    </>
  );
};

export default NotAuthenticatedSidebar;
