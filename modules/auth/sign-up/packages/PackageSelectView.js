import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/auth/AuthContext";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import { SIGNUP_RENDER } from "../../../../contexts/auth/SignUpReducer";
import { MainContext } from "../../../../contexts/MainContext";
import UpdatePackage from "./UpdatePackage";

export default function PackageSelectView({ onChange }) {
  const { renderSignUp } = useContext(MainContext);
  const { AuthState } = useContext(AuthContext);
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const [currentPackage, setCurrentPackage] = useState(null);
  const router = useRouter();
  const { subspack } = router.query;

  useEffect(() => {
    if (AuthState.PaymentPackages) {
      renderSignUp(true);
    }
    if (AuthState.CurrentUserPackage) {
      setCurrentPackage(AuthState.CurrentUserPackage);
    }
    if (
      SignUpState.SelectedPackage &&
      SignUpState.SelectedPackage.PaymentTabId != null
    ) {
      setTimeout(() => {
        dispatch({ type: SIGNUP_RENDER, data: true });
      });
    }
  }, [
    SignUpState?.SelectedPackage?.PaymentTabId,
    AuthState.CurrentUserPackage,
  ]);

  const onChangePackage = (MainPack) => {
    onChange(MainPack);
  };
  return (
    <>
      {currentPackage ? (
        <UpdatePackage currentPackage={currentPackage} />
      ) : (
        <>
          <style jsx>
            {`
              li {
                padding-left: 10px;
                padding-right: 10px;
              }
              li.pr_active span {
                color: var(--basecolor);
              }
              li span {
                text-transform: capitalize;
                color: black;
              }
              li:hover,
              li:focus {
                background-color: white;  
              }
              li:hover span,
              li:focus span {
                color: var(--basecolor);
              }
              @media (min-width: 992px) {
                li {
                  padding-left: 30px;
                  padding-right: 30px;
                }
                li span {
                  font-size: 1.5em;
                }
              }
            `}
          </style>
          {AuthState.PaymentPackages?.length > 0 &&
            AuthState.PaymentPackages.map((m, i) => {
              return (
                <li
                  key={i}
                  className={`w-auto py-3 rounded-sides text-center list-group-item-action text-muted package${
                    i + 1
                  } ${
                    SignUpState?.SelectedPackage?.PaymentTabId == m.PaymentTabId
                      ? "pr_active"
                      : ""
                  }`}
                  onClick={() => onChangePackage(m)}
                >
                  <span className="font-weight-bold">{m.PaymentTabName}</span>
                  <div
                    className={`${
                      SignUpState?.SelectedPackage?.PaymentTabId ==
                      m.PaymentTabId
                        ? "green-bar"
                        : ""
                    } `}
                  ></div>
                </li>
              );
            })}
        </>
      )}
    </>
  );
}
