import React from "react";
import { tableBackIcon, tableNextIcon } from "../../services/imagesLink";

const BillingTable = ({ subscriptions }) => {
  return (
    <table class="mt-3 table_style rounded billing-table">
      <thead>
        <tr>
          <th scope="col" className="border-top-left">Status</th>
          <th scope="col">Date</th>
          <th scope="col">Package</th>
          <th scope="col" className="border-top-right">Mobile Number</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions
          ? subscriptions.map((element , ind) => {
              return (
                <tr>
                  <td className={`px-3 ${ind + 1 == subscriptions.length ? "border-bottom-left" :  ""}`}>
                    {element.UserPaymentStatus == 0 ? "Failure" : "Successful"}
                  </td>
                  <td className="px-3 py-2">{element.UserPaymentStartDate}</td>
                  <td>{element.UserPaymentPackageName}</td>
                  <td className={`px-3 ${ind + 1 == subscriptions.length ? "border-bottom-right" :  ""}`}>{element.UserPaymentMobileNumber}</td>
                </tr>
              );
            })
          : ""}
      </tbody>
    </table>
  );
};
export default BillingTable;
