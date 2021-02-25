import React, { useEffect, useState } from "react";
import { post } from "../../services/http-service";
import { Cookie } from "../../services/cookies";
import {
  getUserByUserId,
  getUserPaymentHistory,
} from "../../services/apilinks";
import { Button } from "react-bootstrap";
const UserStatus = ({ pdata, userId }) => {
  const [subscritionData, setSubscritionData] = useState(null);
  const [subscritionHistory, setSubscritionHistory] = useState([]);
  const [form, setForm] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: null,
  });
  useEffect(() => {
    if (pdata.UserActiveSubscription) {
      setSubscritionData(pdata);
    }
    if (userId) {
      setForm({ ...form, UserId: userId });

      post(getUserPaymentHistory, { ...form, UserId: userId }).then((res) => {
        if (
          res.data &&
          res.data.Response &&
          res.data.Response.responseCode == 1
        ) {
          setSubscritionHistory(res.data.Transaction);
        }
      });
    }
  }, [pdata, userId]);

  const unSubscribe = () => {
    console.log("UunSubscribe");
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
                    <td>
                      {m.IsSubscribe == "1" ? (
                        "Deactivated"
                      ) : (
                        <button className="btn btn-red" onClick={unSubscribe}>
                          Unsubscribe
                        </button>
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
              <th>Expiry Date</th>
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
