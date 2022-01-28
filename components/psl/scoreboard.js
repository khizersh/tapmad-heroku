import React, { Component } from "react";
import { FireBase } from "../../services/firebase";
import { getLiveScore } from "./chat/PSLChat.service";

class ScoreBoard extends Component {
  state = { data: null };

  // checkData(data) {
  //   if (Array.isArray(data)) {
  //     return "array";
  //   } else {
  //     return "object";
  //   }
  // }

  componentDidMount() {
    const database = FireBase.database();
    getLiveScore(database, this.props.eventKey, (data) => {
      // console.log("data in live : ", data);
      this.setState({ data: data[0] });
      // data && this.setState({ data: data[0] });
    });
  }

  // Restrict re-render if LiveScore is matched or data assigned
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state);
  //   if (!this.state?.data) return true;
  //   console.log("state", this.state.data);
  //   console.log("nextState", nextState.data);
  //   const data =
  //     this.checkData(this.state.data) === "array"
  //       ? !this.state.data[0].LiveScore === nextState.data[0].LiveScore
  //       : !this.state.data.LiveScore === nextState.data.LiveScore;
  //   return data;
  // }

  render() {
    const { data } = this.state;
    console.log("data", data);
    return (
      <>
        <style jsx>
          {`
            .scrpnl {
              background-color: #2b363a;
              border-radius: 7px;
              padding: 0.9rem 1.2rem;
              width: 420px;
              margin: auto;
              max-width: 100%;
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
            .scrpnl dl dd {
              margin-bottom: 0;
              font-weight: 300;
            }
          `}
        </style>

        {/* <div className="my-3">Google ads</div> */}

        {data ? (
          <>
            <h2 className="font-weight-light mb-0 text-center h5 line-1 mt-3">
              {data.team_1} vs {data.team_2} <br /> {data.CurrentTeamPlaying}{" "}
              <span className="text-base">{data.LiveScore}</span>
            </h2>
            <span className="text-center font-weight-light d-block">
              Overs: {data.Overs}
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
                    <td>{data.BatsmanName}</td>
                    <td>{data.BatsmanSocre}</td>
                    <td>{data.Partnership}</td>
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
                    <td>{data.BowlerName}</td>
                    <td>{data.BowlerOvers}</td>
                    <td>{data.BowlerMaiden}</td>
                    <td>{data.BowlerSocre}</td>
                    <td>{data.BowlerWickets}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="scrpnl mt-3 mb-4">
              <dl>
                <dt>Last 17 balls:</dt>
                <dd>{data.RecentOvers}</dd>
              </dl>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default ScoreBoard;
