import React from "react";
import { tableBackIcon, tableNextIcon } from "../../services/imagesLink";

const BillingTable = ({ subscriptions }) => {
  return (
    <table class="mt-3 table_style rounded">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Date</th>
          <th scope="col">Package</th>
          <th scope="col">Mobile Number</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions
          ? subscriptions.map((element) => {
              return (
                <tr>
                  <td className="px-3">
                    {element.UserPaymentStatus == 0 ? "Failure" : "Successful"}
                  </td>
                  <td className="px-3 py-2">{element.UserPaymentStartDate}</td>
                  <td>{element.UserPaymentPackageName}</td>
                  <td>{element.UserPaymentMobileNumber}</td>
                </tr>
              );
            })
          : ""}
      </tbody>
    </table>
  );
};
export default BillingTable;
