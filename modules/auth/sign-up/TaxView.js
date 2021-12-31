import React, { useEffect, useState, useContext } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { useRouter } from "next/router";

// let isDefaultSet = false;
export default function TaxView({ onChange }) {
  const { SignUpState } = useContext(SignUpContext);
  const [PackagePrice, setPackagePrice] = useState([]);
  const [SelectedPrice, setSelectedPrice] = useState(null);
  const [isDefaultSet, setIsDefaultSet] = useState(false);
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
      console.log(packageId, isDefaultSet, "timer");
      if (packageId && !isDefaultSet) {
        const elem = document.getElementById(packageId);
        if (elem) {
          setIsDefaultSet(true);
          elem.click();
        }
      }
    }, 1000);
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
            <div style={{ position: "relative", maxWidth: "33.3333%" }}>
              <style jsx>
                {`
                  .package-title {
                    font-size: 1.5em;
                  }
                  li {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                  }
                  li > span {
                    font-size: 1.5em;
                    margin: auto;
                  }
                  .triangle-down {
                    position: absolute;
                    left: 0;
                    right: 0;
                  }
                  @media (max-width: 480px) {
                    li {
                      padding-left: 10px !important;
                      padding-right: 10px !important;
                    }
                    .f-40 {
                      font-size: 1em;
                    }
                  }
                `}
              </style>
              <li
                key={i}
                className={`w-100 py-2 px-4 f-20 text-center cursor-pointer border-0 text-base ${
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
                    <div className="font-weight-bold line-1 text-left font-16">
                      {m.PackageNameArray[0]}
                    </div>
                    <div className="font-weight-bold line-1 text-left">
                      {m.PackageNameArray[1]}
                    </div>
                  </>
                ) : (
                  <>
                    <span className="font-weight-bold text-left font-17 line-1 d-block text-center h3">
                      {m.PackageName}
                    </span>
                  </>
                )}
                <div className="d-flex justify-content-end align-items-center">
                  <div className="text-white per-month">
                    {m.PackagePrices[0]}
                  </div>
                  <div className="font-weight-bold text-white line-1 package-title">
                    {m.PackagePrices[1]}
                  </div>
                  <div
                    className="text-white monthly line-1"
                    style={{ top: "0" }}
                  >
                    <span className="d-block line-1">
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
