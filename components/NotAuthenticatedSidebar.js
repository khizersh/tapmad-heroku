import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";

const NotAuthenticatedSidebar = ({ onClick, country }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [signIn, setSignIn] = useState(true);
  useEffect(() => {
    AuthService.getGeoInfo()
      .then((res) => {
        setCountryCode(res.countryCode);
        let count = null;
        count = country.find((m) => m.ShortName == res.countryCode);
        if (count == null) {
          setSignIn(false);
        } else {
          setSignIn(true);
        }
      })
      .catch((e) => console.log(e));
    return () => setSignIn(true);
  }, [country]);
  console.log(signIn, "signIn");
  return (
    <>
      <li className="subs_contain" id="signUpMenu">
        <a href={countryCode == "PK" ? "/sign-up?tab=1&packageId=2" : "/psl7"}>
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
      {countryCode && countryCode == "PK" ? (
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
    </>
  );
};

export default NotAuthenticatedSidebar;
