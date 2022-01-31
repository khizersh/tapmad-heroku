import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Cookie } from "../../../../services/cookies";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import Head from "next/head"

const MobileLayout = ({ children, bgImage }) => {
  const router = useRouter();
  const { SignUpState } = useContext(SignUpContext);

  const [image, setImage] = useState(null);
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

  useEffect(() => {
    setImage(SignUpState?.SelectedPrice?.PackageBannerImageApp, "Image");
  }, [SignUpState]);
  return (
    <div className="mt-0 mt-sm-2">
      <Head>
        <style>
          {`
        .bit-top {
          bottom: 0 !important;
        }
        html body .green-header {
          display: none !important
        }
        .pymnt_pge_pr_list {
          margin-top: 1rem !important
        }
        .pymnt_pge_bx {
          padding: 0 1rem;
        }
        .selected-box {
          padding: 0 0.5rem;
        }
        `}
        </style>
      </Head>
      <div className="container-fluid p-0 p-sm-2 p-md-3 p-lg-3">
        <div className="">
          <div className="col-12 offset-0 col-sm-8 offset-sm-2 col-md-10 offset-md-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-0">
            <div className="pymnt_pge_bx">
              <div className="bg-green p-1 d-flex justify-content-between green-header">
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
                    fontWeight: "bolder",
                  }}
                  onClick={onClickLogin}
                >
                  Login
                </button>
              </div>
              {image ? (
                <img className="w-100 mb-0" alt="sign-up" src={image} />
              ) : (
                <></>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
