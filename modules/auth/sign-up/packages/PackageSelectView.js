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
      var selectedPackage = subspack;
      if (selectedPackage == "epl") {
        onChange(AuthState.PaymentPackages[1]);
      } else if (selectedPackage == "allin1") {
        onChange(AuthState.PaymentPackages[0]);
      }
      // will remove after epl

      renderSignUp(true);
    }
    if (AuthState.CurrentUserPackage) {
      setCurrentPackage(AuthState.CurrentUserPackage);
    }
    if (
      SignUpState.SelectedPackage &&
      SignUpState.SelectedPackage.PaymentTabId != null
    ) {
      console.log("Pakcage is ", SignUpState.SelectedPackage);
      setTimeout(() => {
        dispatch({ type: SIGNUP_RENDER, data: true });
      });
    }
  }, [SignUpState?.SelectedPackage?.PaymentTabId]);

  const onChangePackage = (MainPack) => {
    onChange(MainPack);
  };
  return (
    <>
      {currentPackage ? (
        <UpdatePackage currentPackage={currentPackage} />
      ) : (
        <>
          {AuthState.PaymentPackages?.length > 0 &&
            AuthState.PaymentPackages.map((m, i) => {
              return (
                <li
                  key={i}
                  className={`w-100 p-1 rounded-sides text-center list-group-item-action  py-3 text-muted package${
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
