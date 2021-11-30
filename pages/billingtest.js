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
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(async () => {
    // const data = await MyAccountService.getUserPaymentHistoryData(form);
    // setSubscriptionData(data.data);
    const page = Math.ceil(obj.Transaction.length / 10);
    let pageArray = [];
    for (let index = 0; index < page; index++) {
      pageArray.push(index + 1);
    }
    setPages(pageArray);
    setCurrentData(obj.Transaction.slice(1, 10));
  }, [userId, currentPage]);

  const onClickPage = (page) => {
    console.log(page * 10);
    let startingValue = 0,
      endingValue = 10;
    if (page == 1) {
      startingValue = 0;
      endingValue = 10;
    } else {
      startingValue = (page - 1) * 10;
      endingValue = page * 10;
    }
    setCurrentData(obj.Transaction.slice(startingValue, endingValue))
  };
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
        <div className="row">
          <div className="col-12">
            <BillingTable subscriptions={currentData} />
          </div>
          <div className="col-12">
            <div className="pagination float-right">
              <a href="#">&laquo;</a>
              {pages.map((pg, i) => (
                <a className="btn btn-success" onClick={() => onClickPage(pg)}>
                  {pg}
                </a>
              ))}
              <a href="#">&raquo;</a>
            </div>
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
