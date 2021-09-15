import React, { useEffect, useState, useContext } from "react";
import { MyAccountService } from "./myaccount.service";
import { post } from "../../services/http-service";
import { Cookie } from "../../services/cookies";
import {
  getUserByUserId,
  getUserPaymentHistory,
} from "../../services/apilinks";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { GlobalService } from "../global-service";
import { MainContext } from "../../contexts/MainContext";

const UserStatus = ({ pdata, userId }) => {
  const { setLoader } = useContext(MainContext);
  const [subscritionData, setSubscritionData] = useState(null);
  const [subscritionHistory, setSubscritionHistory] = useState([]);
  const [deactivated, setdeactivated] = useState(false);
  const [form, setForm] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: null,
  });
  useEffect(async () => {
    if (pdata.UserActiveSubscription) {
      setSubscritionData(pdata);
    }
    if (userId) {
      setForm({ ...form, UserId: userId });

      const data = await MyAccountService.getUserPaymentHistoryData({
        ...form,
        UserId: userId,
      });

      if (data != null) {
        if (data.responseCode == 1) {
          setSubscritionHistory(data.data.Transaction);
        }
      }
    }
  }, [pdata, userId]);

  const unSubscribe = (data) => {
    setLoader(true);
    let body = {
      Language: "en",
      Platform: "Web",
      ProductId: data.UserPackageType,
      UserId: userId,
      Version: "V1",
      headers: GlobalService.authHeaders() || null,
    };
    MyAccountService.unsubcribeUser(body)
      .then((res) => {
        if (res.responseCode == 1) {
          swal({
            title: res.message,
            timer: 2500,
            icon: "success",
          });
          setdeactivated(true);
          setLoader(false);
        } else {
          swal({
            title: res.message,
            timer: 2500,
            icon: "error",
          });
          setLoader(false);
        }
      })
      .catch((e) => {
        setLoader(false);
        console.log(e);
      });
  };
  return (
    <div className="left-profile">
      {/* current status */}
      <h5 className="text-center text-light mb-3">Current Status</h5>
      <div className="table-responsive">
        <table className="table table-striped table-dark tm_btng_tble">
          <thead className="thead-light">
            <tr>
              <th>Start Date</th>
              <th>Expiry Date</th>
              <th>Package ID</th>
              <th>Status</th>
              <th>Price</th>
              <th>Unsubscribe</th>
            </tr>
          </thead>
          <tbody>
            {subscritionData &&
              subscritionData.UserActiveSubscription.length > 0
              ? subscritionData.UserActiveSubscription.map((m, i) => (
                <tr key={i}>
                  <td>{m.UserSubscriptionStartDate}</td>
                  <td>{m.UserSubscriptionExpiryDate}</td>
                  <td>{m.UserPackageType}</td>
                  <td>
                    {subscritionData.User && subscritionData.User.UserIsActive
                      ? "Active"
                      : "Inactive"}
                  </td>
                  <td>{m.Price + ' Rs'}</td>
                  <td>
                    {!deactivated ? (
                      m.IsSubscribe == "0" ? (
                        "Deactivated"
                      ) : (
                        <button
                          className="btn btn-red"
                          onClick={() => unSubscribe(m)}
                        >
                          Unsubscribe
                        </button>
                      )
                    ) : (
                      "Deactivated"
                    )}
                  </td>
                </tr>
              ))
              : null}
          </tbody>
        </table>
      </div>

      {/* history */}

      <h5 className="text-center text-light mb-3">Subscription History</h5>
      <div className="table-responsive">
        <table className="table table-striped table-dark tm_btng_tble">
          <thead className="thead-light">
            <tr>
              <th>S.NO</th>
              <th>Current Date</th>
              <th>Package</th>
              <th>Mobile#</th>
              <th>Network</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {subscritionHistory.length > 0
              ? subscritionHistory.map((m, i) => (
                <tr key={i}>
                  <td>{++i}</td>
                  <td>{m.UserPaymentStartDate}</td>
                  <td>{m.UserPaymentPackageName}</td>
                  <td>{m.UserPaymentMobileNumber}</td>
                  <td>{m.UserPaymentOperatorID}</td>
                  <td>
                    {m.UserPaymentStatus == "1" ? "Success" : "Failure"}
                  </td>
                </tr>
              ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserStatus;
