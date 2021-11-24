import React, { useEffect, useState } from "react";
import requestIp from "request-ip";
import { Cookie } from "../services/cookies";
import { MyAccountService } from "../modules/my-account/myaccount.service";

const BillingHistory = () => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [form, setForm] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
  });
  const [subscriptionData, setSubscriptionData] = useState([]);

  useEffect(async () => {
    const data = await MyAccountService.getUserPaymentHistoryData(form);
    setSubscriptionData(data.data);
  }, [userId]);

  return (
    <div className="p-5">
      <div>
        <text style={{ fontSize: "31px" }}>Billing History</text>
      </div>
      <table class="table_style bordered">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Package</th>
            <th scope="col">Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionData.Transaction
            ? subscriptionData.Transaction.map((element) => {
                return (
                  <tr>
                    <td className="px-3">
                      {element.UserPaymentStatus == 0 ? "Fail" : "Successful"}
                    </td>
                    <td className="px-3">{element.UserPaymentStartDate}</td>
                    <td className="px-3">{element.UserPaymentPackageName}</td>
                    <td className="px-3">{element.UserPaymentMobileNumber}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};
export default BillingHistory;

export function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  return {
    props: {
      noSideBar: true,
      auth: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
