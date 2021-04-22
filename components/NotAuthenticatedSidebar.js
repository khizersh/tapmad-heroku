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
      <li className="sign-out">
        <Link href="/sign-in" shallow={true} passHref={true}>
          <a>
            Sign In
            <span className="icon">
              <i className="fa fa-sign-in"></i>
            </span>
          </a>
        </Link>
      </li>
    </>
  );
};

export default NotAuthenticatedSidebar;
