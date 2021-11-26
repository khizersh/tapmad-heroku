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
    router.push("/");
  };

  return (
    <>
      <div className="bg-green px-5 d-flex justify-content-between">
        <div className="pl-4">
          <button className="btn" onClick={onClickBack}>
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
              <img width="11" src={loginUserImage} alt="Login image" />
            </div>
          </button>
          <span className="btn text-white pl-2 font-weight-light ">Login</span>
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
