import Link from "next/link";
import React from "react";

const NotAuthenticatedSidebar = ({ onClick }) => {
  return (
    <>
      <li className="subs_contain" id="signUpMenu">
        <a href="/sign-up">Subscribe</a>
        <span className="icon">
          <i className="fa fa-user-plus"></i>
        </span>
      </li>
      <li
        className="promoDiv"
        style={{ display: "list-item" }}
        onClick={() => onClick("promo_code")}
      >
        <Link href="/promo-code" shallow={true} passHref={true}>
          <a>
            Promo code
            <span className="icon">
              <i className="fa fa-gift"></i>
            </span>
          </a>
        </Link>
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
