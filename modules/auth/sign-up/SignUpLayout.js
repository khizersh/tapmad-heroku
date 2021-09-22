import React from "react";
import { Cookie } from "../../../services/cookies";
import { useRouter } from "next/router";

export default function SignUpLayout({ children, bgImage }) {
  const router = useRouter();
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

  const onClickLogin = () => {
    router.push("/sign-in");
  };

  return (
    <div className="mt-0 mt-sm-2">
      <div className="container-fluid p-0 p-sm-2 p-md-3 p-lg-3">
        <div className="">
          <div className="col-12 offset-0 col-sm-8 offset-sm-2 col-md-10 offset-md-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-0">
            <div className="pymnt_pge_bx">
              <div className="bg-green p-1 d-flex justify-content-between">
                <button
                  className="btn"
                  style={{
                    fontSize: "13px",
                    color: "black",
                  }}
                  onClick={onClickBack}
                >
                  <img src="/icons/login-back.svg" />
                </button>

                <button
                  type="button"
                  className="btn"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "13px",
                    border: "none",
                    color: "#fff",
                    fontWeight: "bolder"
                  }}
                  onClick={onClickLogin}
                >
                  Login
                </button>
              </div>
              <img className="w-100 mb-0" alt="sign-up" src={bgImage} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
