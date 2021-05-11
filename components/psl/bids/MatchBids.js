import { Accordion, Card } from "react-bootstrap";
import styles from "./bids.module.css";
import { pslCoins } from "../../../services/imagesLink";
import { useContext, useEffect, useState } from "react";
import { getAllMatchDetails, getAllMatchQuestions } from "./bids.service";
import { FirebaseContext } from "../../../contexts/FireBase";

export default function MatchBids() {
    const [match, setMatches] = useState();
    const [questions, setQuestions] = useState();
    const [team, setTeam] = useState({ answer: 0, odds: 0 });
    const { database } = useContext(FirebaseContext);

    async function getMatchLiveDetails() {
        const matches = await getAllMatchDetails();
        setMatches(matches.MatchOdds);
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
            console.log(_records);
        });
    }
    useEffect(() => {
        getMatchLiveDetails();
        getAllMatchesQuestions();
    }, [])
    return <div>
        <Accordion onSelect={() => setTeam({ ...team, answer: 0, odds: 0 })}>
            {match ? match.map((e, index) => {
                return <Card bsPrefix="card border-0 bg-secondary pt-1" key={index}>
                    <Accordion.Toggle as={Card.Header} bsPrefix={`${styles.matchTitleBar} card-header`} eventKey={index + 1}>

                        <div className={styles.tag}>
                            {e.isLive ? <>
                                <div className={styles.cricle}>
                                </div>
                                <div className={styles.tagText}>
                                    LIVE
                            </div></> : e.StartDate}

                        </div>
                        <h5 className="mb-0">
                            <button className={`btn btn-link ${styles.teamName}`}>
                                {e.matchTitle}
                                <p className="mb-0">{e.leagueName}</p>
                            </button>
                        </h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body bsPrefix="card-body bg-secondary">
                            <div className="row">
                                {questions ? questions.map((ques) => {
                                    if (ques.id == e.matchId) {
                                        return ques.AllQuestion.map((innerQues) => {
                                            return <div className="col-12 col-lg-6 col-sm-12 mb-5 p-0">
                                                <div className={styles.bidQ}>
                                                    <h5>{innerQues.EventQuestion}</h5>
                                                    <div className={styles.biding}>
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <div className={styles.team1} style={{ border: innerQues.Options[0].AnswerId == team.answer ? '1px solid red' : '0px' }} onClick={() => setTeam({ ...team, answer: innerQues.Options[0].AnswerId, odds: innerQues.Options[0].odds })}>
                                                                    <h6>{innerQues.Options[0].GameAnswer}</h6>
                                                                    <div className={styles.score}>
                                                                        <h6 style={{ margin: '0px' }}>{innerQues.Options[0].odds}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-2">
                                                                <div className={styles.team_vs}>
                                                                    <div style={{
                                                                        background: '#464646', border: '1px solid #222222', borderRadius: '6px', 'padding': '12px', 'margin': 'auto',
                                                                        fontWeight: '600'
                                                                    }}>
                                                                        <h6 style={{ margin: '0px' }}>VS</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5">
                                                                <div className={styles.team1} style={{ margin: '10px 10px 0px 0px', border: innerQues.Options[1].AnswerId == team.answer ? '1px solid red' : '0px' }} onClick={() => setTeam({ ...team, answer: innerQues.Options[1].AnswerId, odds: innerQues.Options[1].odds })}>
                                                                    <h6>{innerQues.Options[1].GameAnswer}</h6>
                                                                    <div className={styles.score}>
                                                                        <h6 style={{ margin: '0px' }}>{innerQues.Options[1].odds}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-4">
                                                                <div className={styles.quantitybtnqty}>
                                                                    <button className={styles.minus} type="button" disabled={team.answer == 0 ? true : false} style={{ cursor: team.answer == 0 ? 'not-allowed' : 'pointer' }}>
                                                                        <span>
                                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                                        </span>
                                                                    </button>
                                                                    <input type="text" className={styles.count} name="qty" value="4" disabled={true} readOnly={true} tabIndex="0" />
                                                                    <button className={styles.plus} type="button" disabled={team.answer == 0 ? true : false} style={{ cursor: team.answer == 0 ? 'not-allowed' : 'pointer' }} >
                                                                        <span>
                                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                <span className={styles.bid_text}>Your Bid</span>
                                                            </div>
                                                            <div className="col-4">

                                                            </div>
                                                            <div className="col-4">
                                                                <div className={styles.coins}>
                                                                    <p>0.00
                                                                <span>
                                                                            <img src={pslCoins} />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <span className={styles.coins_text}>You'll Win</span>
                                                            </div>
                                                        </div>
                                                        <div className={`${styles.go_btn} d-flex justify-content-center`}>
                                                            <button type="button" className={`btn btn-success ${styles.btn_circle}`} disabled={team.answer == 0 ? true : false} style={{ cursor: team.answer == 0 ? 'not-allowed' : 'arrow' }}>
                                                                <span>GO</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                }) : null}

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            }) : null}
        </Accordion>
    </div>
}