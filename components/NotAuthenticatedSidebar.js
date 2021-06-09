import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";

const NotAuthenticatedSidebar = ({ onClick, country }) => {
  const { initialState } = useContext(MainContext);
  const [countryCode, setCountryCode] = useState(null);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    AuthService.getGeoInfo()
      .then((res) => {
        setCountryCode(res.countryCode);
        let count = null;
        count = country.find((m) => m.ShortName == res.countryCode);
        if (count == null) {
          setSignIn(false);
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <li className="subs_contain" id="signUpMenu">
        <a href="/sign-up">Subscribe</a>
        <span className="icon">
          <i className="fa fa-user-plus"></i>
        </span>
      </li>
      {countryCode && countryCode == "PK" ? (
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
      ) : null}

      {signIn ? (
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
      ) : (
        ""
      )}
    </>
  );
};

export default NotAuthenticatedSidebar;
