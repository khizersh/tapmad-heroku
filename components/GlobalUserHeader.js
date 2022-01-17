import React, { useContext, useEffect, useState } from "react";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import Image from "next/image";
import Link from "next/link";
import { MainContext } from "../contexts/MainContext";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { Cookie } from "../services/cookies";
import { UPDATE_USER_DETAILS } from "../contexts/auth/SignUpReducer";
import { useRouter } from "next/router";
import { AuthService } from "../modules/auth/auth.service";

const GlobalUserHeader = () => {
  const [userData, setUserData] = useState(null);
  const { initialState } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const userId = Cookie.getCookies("userId");
  const router = useRouter();
  const [screenSize, setScreenSize] = useState(false);
  const [countryCode, setCountryCode] = useState("PK");

  useEffect(async () => {
    const country = await AuthService.getGeoInfo();
    country && setCountryCode(country.countryCode);
  }, []);

  useEffect(() => {
    !screenSize && setScreenSize(screen.width);
  }, []);

  useEffect(async () => {
    if (!userData) {
      if (!SignUpState?.UserDetails?.ProfileName && userId) {
        const user = await MyAccountService.getUserData({
          Version: "V1",
          Language: "en",
          Platform: "web",
          UserId: userId,
        });
        dispatch({
          type: UPDATE_USER_DETAILS,
          data: { ProfileName: user.data?.ProfileData?.UserProfileFullName },
        });
      }
      setUserData(SignUpState.UserDetails.ProfileName);
    }
  }, [SignUpState.UserDetails.ProfileName]);

  return (
    <NavbarHOC>
      <style jsx>
        {`
          .avatarWrapper {
            position: relative;
          }
          .avatarList {
            position: absolute;
            right: 0;
            top: 53px;
            background-color: white;
            padding: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            width: 285px;
            color: black;
          }
          .link-text {
            font-size: 0.8em;
          }
        `}
      </style>
      <div
        className={`container ${
          screenSize ? "d-flex" : "d-none"
        } flex-wrap align-items-center justify-content-between`}
      >
        {router.pathname.indexOf("/my-account" > -1) && screenSize < 799 ? (
          <>
            <div
              role="button"
              className="fa fa-chevron-left text-white h3 my-2"
              title="Go Back"
              onClick={() => router.push(Cookie.getCookies("backUrl") || "/")}
            />
            <Link href="/editprofile">
              <a
                className="btn btn-light text-base rounded-pill line-1 btn-lg"
                title="Edit Profile"
              >
                Edit Profile
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <a title="Tapmad">
                <Image src="/icons/logo_white.png" width={114} height={38} />
              </a>
            </Link>
            <div className="avatarWrapper">
              <div className="avatar line-1">
                {!initialState.isAuthenticated ? (
                  <Link href={countryCode == "PK" ? "/sign-in" : "/"}>
                    <a className="text-white d-flex align-items-center">
                      <Image
                        src="/icons/avatar-placeholder.svg"
                        width={36}
                        height={36}
                      />
                      <span className="ml-2">Login</span>
                      {/* <i className="fa fa-angle-down ml-2" /> */}
                    </a>
                  </Link>
                ) : (
                  <Link href="/myaccount">
                    <a className="text-white d-flex align-items-center">
                      <Image
                        src="/icons/avatar-placeholder.svg"
                        width={36}
                        height={36}
                      />
                      <span className="ml-2">{userData}</span>
                      {/* <i className="fa fa-angle-down ml-2" /> */}
                    </a>
                  </Link>
                )}
                {/*
            <div className="avatarList">
              <div className="d-flex flex-wrap align-items-center border-bottom border-dark pb-3 mb-3">
                <Image
                  src="/icons/avatar-placeholder2.svg"
                  width={86}
                  height={86}
                />
                <div className="flex-grow-1 flex-shrink-1 ml-3">
                  <span className="d-block mb-2">User</span>
                  <div className="btn btn-primary d-inline-flex align-items-center text-white rounded-pill px-4">
                    <Image
                      src="/icons/login-avatar.svg"
                      width={19}
                      height={19}
                    />
                    <span className="ml-2 font-weight-bold">Login</span>
                  </div>
                </div>
              </div>
              <Link href="/">
                <a className="d-flex align-items-center">
                  <Image src="/icons/info-icon.svg" width={22} height={22} />
                  <span className="ml-2 link-text">About</span>
                </a>
              </Link>
              <Link href="/">
                <a className="d-flex align-items-center mt-2">
                  <Image src="/icons/discount-voucher.svg" width={22} height={22} />
                  <span className="ml-2 link-text">Promo Codes</span>
                </a>
              </Link>
            </div> */}
              </div>
            </div>
          </>
        )}
      </div>
    </NavbarHOC>
  );
};

export default GlobalUserHeader;
