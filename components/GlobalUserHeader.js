import React, { useContext, useEffect, useState } from "react";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import Image from "next/image";
import Link from "next/link";
import { MainContext } from "../contexts/MainContext";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { Cookie } from "../services/cookies";
import { UPDATE_USER_DETAILS } from "../contexts/auth/SignUpReducer";

const GlobalUserHeader = () => {
  const { initialState } = useContext(MainContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const userId = Cookie.getCookies("userId");
  useEffect(async () => {
    if (!SignUpState && userId) {
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
    // setUserData(user);
  });
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
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <Link href="/">
          <a title="Tapmad">
            <Image src="/icons/logo_white.png" width={168} height={56} />
          </a>
        </Link>
        {/* <button
            className="btn"
            style={{
              fontSize: "13px",
              color: "black",
            }}
            onClick={onClickBack}
          >
            <img src="/icons/login-back.svg" />
          </button> */}
        <div className="avatarWrapper">
          <div className="avatar line-1">
            {!initialState.isAuthenticated ? (
              <Link href="/sign-in">
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
                  <span className="ml-2">My account</span>
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
      </div>
    </NavbarHOC>
  );
};

export default GlobalUserHeader;
