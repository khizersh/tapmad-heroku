import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../../../contexts/auth/AuthContext";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import { MainContext } from "../../../../contexts/MainContext";

export default function PackageSelectView({ onChange }) {
  const { renderSignUp } = useContext(MainContext);
  const { AuthState } = useContext(AuthContext);
  const { SignUpState } = useContext(SignUpContext);
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
  }, [SignUpState?.SelectedPackage]);

  const onChangePackage = (MainPack) => {
    onChange(MainPack);
  };
  return (
    <>
      {AuthState.PaymentPackages &&
        AuthState.PaymentPackages.length > 0 &&
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
                  SignUpState?.SelectedPackage?.PaymentTabId == m.PaymentTabId
                    ? "green-bar"
                    : ""
                } `}
              ></div>
              {/* {m.PackageDescription} */}
            </li>
          );
        })}
    </>
  );
}
