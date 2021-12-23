import React, { useEffect, useState } from "react";
import requestIp from "request-ip";
import { Cookie } from "../services/cookies";
import { useRouter } from "next/router";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { creditcardIcon, leftArrow, rightArrow } from "../services/imagesLink";
import BillingTable from "../modules/billing-component/billingtable";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import { SignUpContext } from "../contexts/auth/SignUpContext";

const BillingHistory = () => {
  const router = useRouter();
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [form, setForm] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
  });
  const { SignUpState } = React.useContext(SignUpContext);
  console.log("SignUpState : ", SignUpState);
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(async () => {
    try {
      const data = await MyAccountService.getUserPaymentHistoryData(form);
      if (data.responseCode === 1) {
        setSubscriptionData(data.data);
        const page = Math.ceil(data.data.Transaction.length / 10);
        let pageArray = [];
        for (let index = 0; index < page; index++) {
          pageArray.push(index + 1);
        }
        setPages(pageArray);
        setCurrentData(obj.Transaction.slice(1, 10));
      }
    } catch (error) {}
  }, [userId]);

  const onClickPage = (page) => {
    setCurrentPage(page);
    let startingValue = 0,
      endingValue = 10;
    if (page == 1) {
      startingValue = 0;
      endingValue = 10;
    } else {
      startingValue = (page - 1) * 10;
      endingValue = page * 10;
    }
    setCurrentData(obj.Transaction.slice(startingValue, endingValue));
  };
  const onClickBack = () => {
    router.push("/");
  };

  const clickEditProfile = () => {
    router.push("/editprofile");
  };

  const onNext = () => {
    if (currentPage < pages.length && currentPage > 0) {
      onClickPage(currentPage + 1);
    }
  };
  const onPreviuos = () => {
    if (currentPage <= pages.length && currentPage > 1) {
      onClickPage(currentPage - 1);
    }
  };
  const onclickBack = () => {
  const backURL = Cookie.getCookies("backUrl") || "/";
  router.push(backURL);
  };



  return (
    <div className="">
      <NavbarHOC>
        <div>
          <button
            className="btn"
            style={{
              fontSize: "13px",
              color: "black",
            }}
            onClick={onClickBack}
          >
            <img src="/icons/login-back.svg" />
          </button>
        </div>
        <div className="margin-y-auto mr-2">
          <img src={creditcardIcon} width="20" alt="card" className="mr-2" />
          <a onClick={clickEditProfile} className="text-white">
            Billing Details
          </a>
        </div>
      </NavbarHOC>
      <div className="offset-md-1 col-md-10  col-12 ">
        {SignUpState.isMobile ? null : (
          <div className="row ml-2 margTop-90">
            <img src={creditcardIcon} width="20" alt="card" className="mr-2" />
            <text className="table_text">Billing History</text>
            <button
                type="button"
                className="btn btn-gradient text-light rounded-pill w-100 px-3 font-11"
                onClick={onclickBack}
              >
                Back
              </button>
          </div>
        )}

        <div className="row">
          <div className="col-12">
            <BillingTable subscriptions={subscriptionData.Transaction} />
          </div>
          <div className="col-12 text-right">
            <div className="mt-3 float-right">
              <a href="#" onClick={onPreviuos}>
                <img className="rotate-180 mr-2" width="7" src={leftArrow} />
              </a>
              {pages.map((pg, i) => (
                <a
                  className={`text-white  ${
                    pg == currentPage ? "bg-green" : "bg-dark"
                  } pagination-btn mr-1 font-11 cursor-pointer`}
                  onClick={() => onClickPage(pg)}
                >
                  {pg}
                </a>
              ))}
              <a href="#" onClick={onNext}>
                <img className="ml-1" width="7" src={leftArrow} />
              </a>
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
      protected: true,
      auth: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
