import { Accordion, Card } from "react-bootstrap";
import styles from "./bids.module.css";
import { pslCoins, userProfile } from "../../../services/imagesLink";
import { useContext, useEffect, useState } from "react";
import { getAllMatchDetails, getAllMatchQuestions } from "./bids.service";
import { Cookie } from "../../../services/cookies";
import swal from "sweetalert";
import { submitMatchBids, updateUserProfile } from "../../../services/apilinks";
import { post } from "../../../services/http-service";
import { GlobalService } from "../../../modules/global-service";
import { FireBase } from "../../../services/firebase";
import { GameContext } from "../../../contexts/GameContext";
import { MainContext } from "../../../contexts/MainContext";

export default function MatchBids({ game, filteredData }) {
  const [match, setMatches] = useState();
  const [questions, setQuestions] = useState();
  const [team, setTeam] = useState({ answer: 0, odds: 0 });
  const database = FireBase.database();
  const [counter, setCounter] = useState(4);
  const [totalOdds, setTotalOdds] = useState(0.0);
  const { updateBuyModal, updateUserCoin } = useContext(GameContext);
  const { initialState } = useContext(MainContext);
  async function getMatchLiveDetails() {
    if (filteredData && filteredData.length) {
      setMatches(filteredData);
    } else {
      const matches = await getAllMatchDetails();
      setMatches(matches.MatchOdds);
    }
  }
  function getAllMatchesQuestions() {
    getAllMatchQuestions(database, (questions) => {
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
    });
  }

  useEffect(() => {
    if (database) {
      getAllMatchesQuestions();
    }
    getMatchLiveDetails();
  }, [filteredData]);

  function increment() {
    var totalCoins = Cookie.getCookies("userCoins");

    var counterClone = counter;
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
        timer: 3000,
      }).then((res) => {
        updateBuyModal(true);
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
  }
  function answerB(innerQues) {
    var teamClone = { ...team };
    setTeam({
      ...teamClone,
      answer: innerQues.Options[1].GameAnswer,
      odds: innerQues.Options[1].odds,
    });
    setTotalOdds(counter * innerQues.Options[1].odds);
  }
  async function submitBid(channelId, questionId) {
    if (!initialState.isAuthenticated) {
      return;
    }
    var userId = Cookie.getCookies("userId");
    const requestData = {
      Version: "V1",
      Language: "en",
      Platform: "Android",
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
      updateUserCoin(response.data.UserTotalCoins);
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
              <Card
                bsPrefix="card border-0 bg-secondary pt-1 btn px-0"
                key={index}
              >
                <Accordion.Toggle
                  as={Card.Header}
                  bsPrefix={`${styles.matchTitleBar} card-header`}
                  eventKey={index + 1}
                >
                  <div className={styles.ballIcon}>
                    {/* {e.isLive ? (
                      <>
                        <div className={styles.cricle}></div>
                        <div className={styles.tagText}>LIVE</div>
                      </>
                    ) : (
                      e.StartDate
                    )} */}
                    <img
                      src="//d1s7wg2ne64q87.cloudfront.net/web/images/png-cricket-ball.png"
                      alt="Ball"
                      width="30px"
                    />
                  </div>
                  <h5 className="mb-0">
                    <span>
                      {e.isLive ? (
                        <>
                          <span className={styles.tagLive}>
                            <div className={styles.cricle}></div>
                            <div className={styles.tagText}>LIVE</div>
                          </span>
                        </>
                      ) : (
                        <span className={styles.tag}>{e.StartDate}</span>
                      )}
                    </span>
                    <button
                      className={`mx-0 btn btn-link ${styles.teamName} ${styles.letter}`}
                    >
                      {e.matchTitle}
                      {/* <p className="mb-0">{e.leagueName}</p> */}
                    </button>
                  </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index + 1}>
                  <Card.Body bsPrefix="card-body bg-secondary">
                    <div className="row">
                      {questions
                        ? questions.map((ques) => {
                          if (ques.id == e.matchId) {
                            return (
                              ques.AllQuestion &&
                              ques.AllQuestion.map((innerQues, index) => {
                                return (
                                  <div
                                    className={`col-12 col-lg-${game ? game : "6"
                                      } col-sm-12 mb-5 p-0`}
                                    key={index}
                                  >
                                    <div className={styles.bidQ}>
                                      <h5>{innerQues.EventQuestion}</h5>
                                      <div className={styles.biding}>
                                        <div className="row">
                                          <div className="col-12 col-lg-5 col-sm-12">
                                            <div
                                              className={styles.team1}
                                              style={{
                                                border:
                                                  innerQues.Options[0]
                                                    .GameAnswer ==
                                                    team.answer
                                                    ? "1px solid #87c242"
                                                    : "1px solid #464646",
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
                                                  style={{
                                                    margin: "0px",
                                                    color: "white",
                                                  }}
                                                >
                                                  {
                                                    innerQues.Options[0]
                                                      .odds
                                                  }
                                                </h6>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-2 col-sm-12 d-none d-md-block">
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
                                          <div className="col-12 col-lg-5 col-sm-12">
                                            <div
                                              className={`${styles.team1} ${styles.team2}`}
                                              style={{
                                                border:
                                                  innerQues.Options[1]
                                                    .GameAnswer ==
                                                    team.answer
                                                    ? "1px solid #87c242"
                                                    : "1px solid #464646",
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
                                              <div
                                                className={styles.score}
                                                style={{
                                                  background:
                                                    innerQues.Options[1]
                                                      .GameAnswer ==
                                                      team.answer
                                                      ? "#87c242"
                                                      : "#2e2e2e",
                                                }}
                                              >
                                                <h6
                                                  style={{
                                                    margin: "0px",
                                                    color: "white",
                                                  }}
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
                                          <div className="col-6 col-lg-6 col-sm-6">
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
                                            <div
                                              className={styles.bid_text}
                                            >
                                              Tukka
                                            </div>
                                          </div>

                                          <div className="col-6 col-lg-6 col-sm-6">
                                            <div className="row">
                                              <div className="col-12">
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
                                              </div>
                                              <div className="col-12 mt-2">

                                                <div
                                                  className={styles.coins_text}
                                                >
                                                  You'll Win
                                                </div>

                                              </div>
                                            </div>
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
                              })
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
