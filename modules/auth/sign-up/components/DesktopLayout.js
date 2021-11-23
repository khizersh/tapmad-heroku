import React from "react";
import { useRouter } from "next/router";
import { Cookie } from "../../../../services/cookies";
import { loginUserImage, tapmadLogo } from "../../../../services/imagesLink";

const DesktopLayout = ({ children, bgImage }) => {
  const router = useRouter();
  const onClickLogin = () => {
    router.push("/sign-in");
  };

  const onClickBack = () => {
    var backUrl = Cookie.getCookies("backUrl");
    if (!backUrl) {
      router.push("/");
    } else {
      if (
        backUrl.split("/")[1] == "watch" ||
        backUrl.split("/")[1] == "catchup-watch"
      ) {
        router.push("/");
      } else {
        router.push(backUrl);
      }
    }
  };

  return (
    <>
      <div className="bg-green px-5 d-flex justify-content-between">
        <div className="pl-4">
          <button
            className="btn"
            style={{
              fontSize: "13px",
              color: "black",
            }}
            onClick={onClickBack}
          >
            <img className="pl-3" src={tapmadLogo} width="130px" />
          </button>
        </div>
        <div
          onClick={onClickLogin}
          style={{ margin: "auto 0px" }}
          className="pr-5"
        >
          <button className="btn btn-login">
            <div>
              <img width="10px" src={loginUserImage} alt="Login image" />
            </div>
          </button>
          <span  className="btn text-white pl-2 font-weight-light ">Login</span>
        </div>
      </div>
      <div className="grey-background"></div>
      <div className="mt-0 mt-sm-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="">
                {/* <img className="w-100 mb-0" alt="sign-up" src={bgImage} /> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
