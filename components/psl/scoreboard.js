import React, { PureComponent, useEffect } from "react";
import { FireBase } from "../../services/firebase";
import { getLiveScore } from "./chat/PSLChat.service";

class ScoreBoard extends PureComponent {
  render() {
    const database = FireBase.database();

    useEffect(async () => {
      await getLiveScore(database, "", (data) => {});
    }, []);
    return (
      <>
        <style jsx>
          {`
            .scrpnl {
              background-color: #2b363a;
              border-radius: 7px;
              padding: 0.9rem 1.2rem;
            }
            .scrpnl table {
              width: 100%;
              font-weight: 300;
            }
            .scrpnl table th {
              font-weight: 400;
            }
            .scrpnl table th + th,
            .scrpnl table td + td {
              text-align: center;
            }
            .scrpnl thead th:first-child,
            .scrpnl tbody td + td {
              color: var(--basecolor);
            }
            .scrpnl dl {
              margin: 0;
            }
            .scrpnl dl dt {
              color: var(--basecolor);
              font-weight: 400;
            }
          `}
        </style>
        <div className="my-3">Google ads</div>

        <h2 className="font-weight-light mb-0 text-center h5 line-1">
          {data.team_1} vs {data.team_2} <br /> KK{" "}
          <span className="text-base">{data.LiveScore}</span>
        </h2>
        <span className="text-center font-weight-light d-block">
          Overs: 16.5
        </span>

        <div className="scrpnl mt-4">
          <table>
            <thead>
              <tr>
                <th>Batsman</th>
                <th>R</th>
                <th>P'Ship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Babar Azam</td>
                <td>38</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
          <table className="mt-2">
            <thead>
              <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M.Amir</td>
                <td>3</td>
                <td>1</td>
                <td>33</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="scrpnl mt-3">
          <dl>
            <dt>Last 15 balls:</dt>
            <dd>1 . 2 . 4 6 W 1 1 1 2 2 2 4</dd>
          </dl>
        </div>
      </>
    );
  }
}

export default ScoreBoard;
