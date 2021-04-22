import React from "react";
import { Cookie } from "../../../services/cookies";
import { useRouter } from "next/router";
import { signUpImage } from "../../../services/imagesLink";

export default function SignUpLayout({ children, bgImage }) {
  const router = useRouter();
  const onClickBack = () => {
    var backUrl = Cookie.getCookies("backUrl");
    if (!backUrl) {
      router.push("/");
    } else {
      if (backUrl.split("/")[1] == "watch") {
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
          <div className="col-12 offset-0 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-4 p-0">
            <div className="pymnt_pge_bx">
              <button
                className="btn float-left p-0"
                style={{
                  position: "absolute",
                  top: "-8px",
                  background: "#ffffff",
                  color: "black",
                }}
                onClick={onClickBack}
                className="mt-2 btn"
              >
                <i className="fa fa-arrow-left"></i> Back
              </button>

              <img className="w-100 mb-0" src={signUpImage} />
              <button
                type="button"
                className="btn pull-right"
                style={{
                  textTransform: "uppercase",
                  fontSize: "13px",
                  border: "none",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  background: "#ffffff",
                }}
                onClick={onClickLogin}
              >
                Login
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
