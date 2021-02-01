import React, { useEffect, useState , useContext} from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import paymentMethod from "./PaymentMethod";

const TaxView = () => {
  const [selectedPaymentMethods, setPaymentMethods] = useState(null);

  const { authState } = useContext(Authcontext);

  useEffect(() => {
    if (authState && authState.selectedPaymentMethod) {
      setPaymentMethods(authState.selectedPaymentMethod);
    }
  }, [authState.selectedPaymentMethod]);

  return (
    <>
      {selectedPaymentMethods &&
        selectedPaymentMethods.Packages.length > 0 &&
        selectedPaymentMethods.Packages.map((m, i) => {
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
