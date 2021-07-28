import React, { useEffect, useState, useContext } from "react";
import { Authcontext } from "../../../../contexts/AuthContext";
import { MainContext } from "../../../../contexts/MainContext";

export default function PackageSelectView({ onChange }) {
    const { authState, updateSelectedPackageId } = useContext(Authcontext)
    const { initialState } = useContext(MainContext);

    useEffect(() => {
        console.log("Uu bhee ", initialState);
        if (initialState.currentPackage) {
            updateSelectedPackageId(
                initialState.currentPackage[0]?.Packages[0]?.ProductId,
                initialState.currentPackage[0]?.Packages[0]?.PackagePrice,
                initialState.currentPackage[0]?.Packages[0]?.PackageName
            );
            // setPackageId(authState.selectedPaymentMethod.Packages[0].ProductId);
        }

    }, [initialState.currentPackage]);

    const onChangePackage = (MainPack) => {
        onChange(MainPack)
    };

    return (
        <>
            {authState.AllPackages &&
                authState.AllPackages.PaymentPackages.length > 0 &&
                authState.AllPackages.PaymentPackages.map((m, i) => {
                    return (
                        <li
                            key={i}
                            className={`list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted ${authState.currentPackage?.PaymentTabId ? (authState.currentPackage?.PaymentTabId == m.PaymentTabId ? "pr_active" : "") : ""
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
