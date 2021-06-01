import { Accordion, Card } from "react-bootstrap";
import styles from "./bids.module.css";
import { pslCoins } from "../../../services/imagesLink";
import { useContext, useEffect, useRef, useState } from "react";
import { getAllMatchDetails, getAllMatchQuestions } from "./bids.service";
import { FirebaseContext } from "../../../contexts/FireBase";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { submitMatchBids } from "../../../services/apilinks";
import { post } from "../../../services/http-service";
import { GlobalService } from "../../../modules/global-service";

export default function MatchBids({ game, filteredData }) {
  const [match, setMatches] = useState();
  const [questions, setQuestions] = useState();
  const [team, setTeam] = useState({ answer: 0, odds: 0 });
  const firebas = useContext(FirebaseContext);
  const [counter, setCounter] = useState(4);
  const [totalOdds, setTotalOdds] = useState(0.0);

  async function getMatchLiveDetails() {
    if (filteredData && filteredData.length) {
      setMatches(filteredData);
    } else {
      const matches = await getAllMatchDetails();
      setMatches(matches.MatchOdds);
     
    }
  }
  function getAllMatchesQuestions() {
    getAllMatchQuestions(firebas.database, (questions) => {
      let _records = [];
      for (var key in questions) {
        if (questions[key]) {
          _records.push({
            ...questions[key],
            id: key,
          });
        }
      }
      setQuestions(_records);
      console.log(_records);
    });
  }
  useEffect(() => {
    if (firebas && firebas.database) {
      getMatchLiveDetails();
      getAllMatchesQuestions();
    }
  }, [filteredData]);
  function increment() {
    var totalCoins = Cookie.getCookies("userCoins");

    var counterClone = counter;
    d;
    if (counterClone < totalCoins) {
      counterClone = counterClone * 2;
      setCounter(counterClone);
      setTotalOdds(team.odds * counterClone);
    } else {
      swal({
        text: "You can not increase more coins, please purchase more coins",
        icon: "error",
        allowOutsideClick: false,
        closeOnClickOutside: false,
      });
    }
  }
  function decrement() {
    if (counter > 4) {
      var counterClone = counter;
      counterClone = counterClone / 2;
      setCounter(counterClone);
      setTotalOdds(team.odds * counterClone);
    }
  }
  function answerA(innerQues) {
    var teamClone = { ...team };
    setTeam({
      ...teamClone,
      answer: innerQues.Options[0].GameAnswer,
      odds: innerQues.Options[0].odds,
    });
    setTotalOdds(counter * innerQues.Options[0].odds);
    console.log(team);
  }
  function answerB(innerQues) {
    var teamClone = { ...team };
    setTeam({
      ...teamClone,
      answer: innerQues.Options[1].GameAnswer,
      odds: innerQues.Options[1].odds,
    });
    setTotalOdds(counter * innerQues.Options[1].odds);
    console.log(team);
  }
  async function submitBid(channelId, questionId) {
    var userId = Cookie.getCookies("userId");
    const requestData = {
      Version: "V1",
      Language: "en",
      Platform: "android",
      ChannelId: channelId,
      QuestionId: questionId,
      UserId: userId,
      AnswerId: team.answer,
      UserBidCoins: counter,
      QuestionOdds: team.odds,
    };
    const response = await post(submitMatchBids, requestData);
    if (response.data && response.data.Response.responseCode == 1) {
      Cookie.setCookies("userCoins", response.data.UserTotalCoins);
      swal({
        title: "Your answer has been submitted successfully.",
        text: "Thank you for playing the game",
        icon: "success",
        allowOutsideClick: false,
        closeOnClickOutside: false,
        timer: 3000,
      });
    } else {
      swal({
        title: "Something Went Wrong",
        icon: "error",
        allowOutsideClick: false,
        closeOnClickOutside: false,
        timer: 3000,
      });
    }
  }
  return (
    <div>
      <Accordion onSelect={() => setTeam({ ...team, answer: 0, odds: 0 })}>
        {match
          ? match.map((e, index) => {
              return (
                <Card bsPrefix="card border-0 bg-secondary pt-1" key={index}>
                  <Accordion.Toggle
                    as={Card.Header}
                    bsPrefix={`${styles.matchTitleBar} card-header`}
                    eventKey={index + 1}
                  >
                    <div className={styles.tag}>
                      {e.isLive ? (
                        <>
                          <div className={styles.cricle}></div>
                          <div className={styles.tagText}>LIVE</div>
                        </>
                      ) : (
                        e.StartDate
                      )}
                    </div>
                    <h5 className="mb-0">
                      <button
                        className={`btn btn-link ${styles.teamName} ${styles.letter}`}
                      >
                        {e.matchTitle}
                        <p className="mb-0">{e.leagueName}</p>
                      </button>
                    </h5>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index + 1}>
                    <Card.Body bsPrefix="card-body bg-secondary">
                      <div className="row">
                        {questions
                          ? questions.map((ques) => {
                              if (ques.id == e.matchId) {
                                return ques.AllQuestion.map(
                                  (innerQues, index) => {
                                    return (
                                      <div
                                        className={`col-12 col-lg-${
                                          game ? game : "6"
                                        } col-sm-12 mb-5 p-0`}
                                        key={index}
                                      >
                                        <div className={styles.bidQ}>
                                          <h5>{innerQues.EventQuestion}</h5>
                                          <div className={styles.biding}>
                                            <div className="row">
                                              <div className="col-5">
                                                <div
                                                  className={styles.team1}
                                                  style={{
                                                    border:
                                                      innerQues.Options[0]
                                                        .GameAnswer ==
                                                      team.answer
                                                        ? "1 solid #87c242"
                                                        : "0px",
                                                  }}
                                                  onClick={() =>
                                                    answerA(innerQues)
                                                  }
                                                >
                                                  <h6>
                                                    {
                                                      innerQues.Options[0]
                                                        .GameAnswer
                                                    }
                                                  </h6>
                                                  <div
                                                    className={styles.score}
                                                    style={{
                                                      background:
                                                        innerQues.Options[0]
                                                          .GameAnswer ==
                                                        team.answer
                                                          ? "#87c242"
                                                          : "#2e2e2e",
                                                    }}
                                                  >
                                                    <h6
                                                      style={{ margin: "0px" }}
                                                    >
                                                      {
                                                        innerQues.Options[0]
                                                          .odds
                                                      }
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-2">
                                                <div className={styles.team_vs}>
                                                  <div
                                                    style={{
                                                      background: "#464646",
                                                      border:
                                                        "1px solid #222222",
                                                      borderRadius: "6px",
                                                      padding: "12px",
                                                      margin: "auto",
                                                      fontWeight: "600",
                                                    }}
                                                  >
                                                    <h6
                                                      style={{ margin: "0px" }}
                                                    >
                                                      VS
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-5">
                                                <div
                                                  className={`${styles.team1} ${styles.team2}`}
                                                  style={{
                                                    border:
                                                      innerQues.Options[1]
                                                        .GameAnswer ==
                                                      team.answer
                                                        ? "1px solid red"
                                                        : "0px",
                                                  }}
                                                  onClick={() =>
                                                    answerB(innerQues)
                                                  }
                                                >
                                                  <h6>
                                                    {
                                                      innerQues.Options[1]
                                                        .GameAnswer
                                                    }
                                                  </h6>
                                                  <div className={styles.score}>
                                                    <h6
                                                      style={{ margin: "0px" }}
                                                    >
                                                      {
                                                        innerQues.Options[1]
                                                          .odds
                                                      }
                                                    </h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-4">
                                              <div className="col-4">
                                                <div
                                                  className={
                                                    styles.quantitybtnqty
                                                  }
                                                >
                                                  <button
                                                    className={styles.minus}
                                                    type="button"
                                                    disabled={
                                                      team.answer == 0
                                                        ? true
                                                        : false
                                                    }
                                                    style={{
                                                      cursor:
                                                        team.answer == 0
                                                          ? "not-allowed"
                                                          : "pointer",
                                                    }}
                                                    onClick={decrement}
                                                  >
                                                    <span>
                                                      <i
                                                        className="fa fa-minus"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </span>
                                                  </button>
                                                  <input
                                                    type="text"
                                                    className={styles.count}
                                                    value={GlobalService.nFormatter(
                                                      counter,
                                                      1
                                                    )}
                                                    disabled={true}
                                                    readOnly={true}
                                                    tabIndex="0"
                                                  />
                                                  <button
                                                    className={styles.plus}
                                                    type="button"
                                                    disabled={
                                                      team.answer == 0
                                                        ? true
                                                        : false
                                                    }
                                                    style={{
                                                      cursor:
                                                        team.answer == 0
                                                          ? "not-allowed"
                                                          : "pointer",
                                                    }}
                                                    onClick={increment}
                                                  >
                                                    <span>
                                                      <i
                                                        className="fa fa-plus"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </span>
                                                  </button>
                                                </div>
                                                <span
                                                  className={styles.bid_text}
                                                >
                                                  Your Bid
                                                </span>
                                              </div>
                                              <div className="col-4"></div>
                                              <div className="col-4">
                                                <div className={styles.coins}>
                                                  <p>
                                                    {GlobalService.nFormatter(
                                                      totalOdds,
                                                      1
                                                    )}
                                                    <span>
                                                      <img src={pslCoins} />
                                                    </span>
                                                  </p>
                                                </div>
                                                <span
                                                  className={styles.coins_text}
                                                >
                                                  You'll Win
                                                </span>
                                              </div>
                                            </div>
                                            <div
                                              className={`${styles.go_btn} d-flex justify-content-center`}
                                            >
                                              <button
                                                type="button"
                                                className={`btn btn-success ${styles.btn_circle}`}
                                                disabled={
                                                  team.answer == 0
                                                    ? true
                                                    : false
                                                }
                                                style={{
                                                  cursor:
                                                    team.answer == 0
                                                      ? "not-allowed"
                                                      : "pointer",
                                                }}
                                                onClick={() =>
                                                  submitBid(
                                                    ques.id,
                                                    innerQues.QuestionId
                                                  )
                                                }
                                              >
                                                <span>GO</span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                );
                              }
                            })
                          : null}
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })
          : null}
      </Accordion>
    </div>
  );
}
