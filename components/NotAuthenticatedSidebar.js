import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";
import { SignUpContext } from "../contexts/auth/SignUpContext";

const NotAuthenticatedSidebar = ({ onClick }) => {
  // const [countryCode, setCountryCode] = useState(null);
  const [signIn, setSignIn] = useState(true);
  const { SignUpState } = useContext(SignUpContext);

  return (
    <>
      <li className="subs_contain" id="signUpMenu">
        <a
          href={
            SignUpState?.userCountry?.ShortName == "PK"
              ? "/sign-up?tab=2&packageId=4"
              : "/psl7"
          }
        >
          Subscribe
        </a>
        <span className="icon">
          <i className="fa fa-user-plus"></i>
        </span>
      </li>
      {!signIn ? (
        <li className="sign-out">
          <Link href="/sign-in" shallow={true} passHref={true}>
            <a>
              Login
              <span className="icon">
                <i className="fa fa-sign-in"></i>
              </span>
            </a>
          </Link>
        </li>
      ) : (
        <></>
      )}
      {SignUpState?.userCountry?.ShortName == "PK" ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NotAuthenticatedSidebar;
