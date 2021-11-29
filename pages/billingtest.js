import React, { useEffect, useState } from "react";
import requestIp from "request-ip";
import { Cookie } from "../services/cookies";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { creditcardIcon } from "../services/imagesLink";
import BillingTable from "../modules/billing-component/billingtable";

const BillingHistory = () => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [form, setForm] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
  });
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [dataLimit, setDataLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    const data = await MyAccountService.getUserPaymentHistoryData(form);
    setSubscriptionData(data.data);
  }, [userId]);
  const obj = {
    Transaction: [
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "21sds",
        UserPaymentPackageName: "dsaasd",
        UserPaymentMobileNumber: "asa2",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "21sds",
        UserPaymentPackageName: "dsaasd",
        UserPaymentMobileNumber: "asa2",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "21sds",
        UserPaymentPackageName: "dsaasd",
        UserPaymentMobileNumber: "asa2",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "21sds",
        UserPaymentPackageName: "dsaasd",
        UserPaymentMobileNumber: "asa2",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "21sds",
        UserPaymentPackageName: "dsaasd",
        UserPaymentMobileNumber: "asa2",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "21sds",
        UserPaymentPackageName: "dsaasd",
        UserPaymentMobileNumber: "asa2",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "22222",
        UserPaymentPackageName: "yxcyxcy",
        UserPaymentMobileNumber: "weq12",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "22222",
        UserPaymentPackageName: "yxcyxcy",
        UserPaymentMobileNumber: "weq12",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "22222",
        UserPaymentPackageName: "yxcyxcy",
        UserPaymentMobileNumber: "weq12",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "22222",
        UserPaymentPackageName: "yxcyxcy",
        UserPaymentMobileNumber: "weq12",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "22222",
        UserPaymentPackageName: "yxcyxcy",
        UserPaymentMobileNumber: "weq12",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
      {
        UserPaymentStatus: 1,
        UserPaymentStartDate: "3333",
        UserPaymentPackageName: "qweqe",
        UserPaymentMobileNumber: "231sada",
      },
    ],
  };

  return (
    <div className="p-5 container-fluid">
      <div className="offset-1 col-10">
        <div className="row ml-2">
          <img src={creditcardIcon} width="20" alt="card" className="mr-2" />
          <text className="table_text">Billing History</text>
        </div>
        <div>
          <BillingTable subscriptions={subscriptionData} />
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
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
