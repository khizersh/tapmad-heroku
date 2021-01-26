import React, { useEffect, useState } from "react";
import paymentMethod from "./PaymentMethod";

const TaxView = ({ selectedId, data }) => {
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    if (data) {
      let selectedMethod = data.find((f) => f.PaymentId == selectedId);
      if (selectedMethod) {
        setPaymentMethods(selectedMethod.Packages);

        console.log(paymentMethods);
      }
    }
  }, [selectedId]);

  return (
    <>
      {paymentMethods.length > 0 &&
        paymentMethods.map((m, i) => {
          return (
            <li
              key={i}
              className="list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted pr_active"
            >
              <span className="font-weight-bold">{m.PackagePrice}</span>
              Rs + Tax Per Week
            </li>
          );
        })}
    </>
  );
};

export default TaxView;
