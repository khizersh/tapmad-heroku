import { Accordion, Card } from "react-bootstrap";
import styles from "./bids.module.css";
import { pslCoins } from "../../../services/imagesLink";

export default function MatchBids() {
    return <div>
        <Accordion defaultActiveKey="0">
            <Card bsPrefix="card border-0 bg-secondary">
                <Accordion.Toggle as={Card.Header} bsPrefix={`${styles.matchTitleBar} card-header`} eventKey="0">
                    <div className={styles.tag}>
                        <div className={styles.cricle}>
                        </div>
                        <div className={styles.tagText}>
                            LIVE
                        </div>
                    </div>
                    <h5 className="mb-0">
                        <button className={`btn btn-link ${styles.teamName}`}>
                            Karachi <span> vs </span> Lahore
                         <p className="mb-0">Pakistan Super league (PSL 6)</p>
                        </button>
                    </h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body bsPrefix="card-body bg-secondary">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-sm-12 mb-5">
                                <div className={styles.bidQ}>
                                    <h5>Aaj ka match konsi team jiteygi?</h5>
                                    <div className={styles.biding}>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className={styles.team1}>
                                                    <h6>Karachi</h6>
                                                    <div className={styles.score}>
                                                        <h6 style={{ margin: '0px' }}>20.1</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className={styles.team_vs}>
                                                    <div style={{
                                                        background: '#464646', border: '1px solid #222222', 'border-radius': '6px', 'padding': '12px', 'margin': 'auto',
                                                        'font-weight': '600'
                                                    }}>
                                                        <h6 style={{ margin: '0px' }}>VS</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className={styles.team1} style={{ margin: '10px 10px 0px 0px' }}>
                                                    <h6>Karachi</h6>
                                                    <div className={styles.score}>
                                                        <h6 style={{ margin: '0px' }}>20.1</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-4">
                                                <div className={styles.quantitybtnqty}>
                                                    <div className={styles.minus}><span><i class="fa fa-minus" aria-hidden="true"></i>
                                                    </span>
                                                    </div>
                                                    <input type="number" className={styles.count} name="qty" value="1" disabled="" tabindex="0" />
                                                    <div className={styles.plus}><span><i class="fa fa-plus" aria-hidden="true"></i>
                                                    </span></div>
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
                                            <button type="button" class={`btn btn-success ${styles.btn_circle}`}>
                                                <span>GO</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
}