import React, { useEffect, useState, useContext } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { useRouter } from "next/router";

var isDefaultSet = false;
export default function TaxView({ onChange }) {
  const { SignUpState } = useContext(SignUpContext);
  const [PackagePrice, setPackagePrice] = useState([]);
  const [SelectedPrice, setSelectedPrice] = useState(null);
  const router = useRouter();
  const { packageId } = router.query;
  // set all products
  useEffect(() => {
    if (SignUpState?.SelectedPackage?.PaymentTabMethods) {
      let array = SignUpState.SelectedPackage.PaymentTabMethods.map((m) => {
        let finalArray = [];
        let pkgArray = m.PackageName?.split(" ");
        finalArray.push(pkgArray[0]);
        if (pkgArray.length > 1) {
          finalArray.push(pkgArray.slice(1).join(" "));
        }
        return {
          ...m,
          PackageNameArray: finalArray,
        };
      });
      setPackagePrice(array);
      onChange(SignUpState.SelectedPackage.PaymentTabMethods[0]);
      setSelectedPrice(SignUpState.SelectedPackage.PaymentTabMethods[0]);
    }
  }, [SignUpState.SelectedPackage]);

  // set default product via query param
  useEffect(() => {
    setTimeout(() => {
      if (packageId && !isDefaultSet) {
        const elem = document.getElementById(packageId);
        if (elem) {
          isDefaultSet = true;
          elem.click();
        }
      }
    }, 1200);
  }, [SignUpState.SelectedPrice, packageId]);

  const onChangePackage = (m) => {
    setSelectedPrice(m);
    onChange(m);
  };
  return (
    <>
      {PackagePrice &&
        PackagePrice.length > 0 &&
        PackagePrice.map((m, i) => {
          return (
            <div className="w-100">
              <li
                key={i}
                className={`w-100 p-1 f-20 text-center cursor-pointer border-0 text-base ${
                  SelectedPrice?.ProductId
                    ? SelectedPrice.ProductId === m.ProductId
                      ? "price-active"
                      : ""
                    : ""
                }`}
                id={m.PackageId}
                onClick={() => onChangePackage(m)}
              >
                {m.PackageNameArray?.length > 1 ? (
                  <>
                    <div className="font-weight-600 line-1 text-left font-17">
                      {m.PackageNameArray[0]}
                    </div>
                    <div className="font-weight-bold line-1 text-left">
                      {m.PackageNameArray[1]}
                    </div>
                  </>
                ) : (
                  <>
                    <span className="font-weight-bold text-left font-17 mt-2 line-1 d-block text-center h3" style={{marginBottom:"12px"}}>
                      {m.PackageName}
                    </span>
                  </>
                )}
                <div className="d-flex justify-content-end mt-10px">
                  <div className="text-white per-month mt-2">
                    {m.PackagePrices[0]}
                  </div>
                  <div className="f-40 font-weight-bold text-white">
                    {m.PackagePrices[1]}
                  </div>
                  <div className="text-white  monthly">
                    <span className="d-block">
                      {m.PackagePrices[2].split(" ")[0]}
                    </span>
                    {m.PackagePrices[2].split(" ").slice(1).join(" ")}
                  </div>
                </div>
                <span className="d-block d-md-none"></span>
                {m.PackageDescription}
              </li>
              {SelectedPrice?.ProductId ? (
                SelectedPrice.ProductId == m.ProductId ? (
                  <div className="triangle-down"></div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          );
        })}
    </>
  );
}
