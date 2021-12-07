import { useRouter } from "next/router";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { Authcontext } from "../../../../contexts/AuthContext";
import { MainContext } from "../../../../contexts/MainContext";

export default function PackageSelectView({ onChange }) {
    const { authState, updateSelectedPackageId } = useContext(Authcontext)
    const { initialState, renderSignUp } = useContext(MainContext);
    const router = useRouter();
    const { subspack } = router.query;

    useEffect(() => {
        if (initialState.currentPackage) {
            updateSelectedPackageId(
                initialState.currentPackage[0]?.Packages[0]?.ProductId,
                initialState.currentPackage[0]?.Packages[0]?.PackagePrice,
                initialState.currentPackage[0]?.Packages[0]?.PackageName
            );
            // setPackageId(authState.selectedPaymentMethod.Packages[0].ProductId);
        }
        if (authState?.AllPackages) {
            console.log(authState);
            var selectedPackage = subspack;
            console.log(selectedPackage);
            if (selectedPackage == 'epl') {
                onChange(authState?.AllPackages?.PaymentPackages[1]);
            } else if (selectedPackage == 'allin1') {
                onChange(authState?.AllPackages?.PaymentPackages[0]);
            }
            // will remove after epl
            renderSignUp(true);
        }

    }, [authState.AllPackages]);

    const onChangePackage = (MainPack) => {
        onChange(MainPack);
    }


    return (
        <>
            {authState.AllPackages &&
                authState.AllPackages.PaymentPackages.length > 0 &&
                authState.AllPackages.PaymentPackages.map((m, i) => {
                    return (
                        <li
                            key={i}
                            className={`list-group-item w-100 p-1 text-center list-group-item-action border-0 pb-1 text-muted package${i + 1} ${(initialState.currentPackage?.PaymentTabId == m.PaymentTabId ? "pr_active" : "")
                                }`}
                            onClick={() =>
                                onChangePackage(m)
                            }
                        >
                            <span className="font-weight-bold">{m.PaymentTabName}</span>
                            <span className="d-block d-md-none"></span>
                            {/* {m.PackageDescription} */}
                        </li>
                    );
                })}
        </>
    );
}
