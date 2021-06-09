import React from "react";
import styles from "../game.module.css";
import { Accordion, Card } from "react-bootstrap";

const CustomCollapse = ({ data, onChange }) => {
  const [arrow, setArrow] = React.useState(false);

  const onChangeTab = () => {
    onChange(data);
    setArrow(!arrow);
  };

  return (
    <Card className={`${styles.bgBlack} mt-1`}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={data.id}
        onClick={() => onChangeTab()}
      >
        <h5 className={`mb-0 text-light ${styles.title}`}>
          <img src={data.icon} /> {data.title}
          <i
            className={`fa fa-angle-${arrow ? "up" : "down"
              } rotate-icon float-right`}
          ></i>
        </h5>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={data.id}>
        <Card.Body className={styles.cardBody}>
          {data.content.length > 0 ? (
            <div className="overflow-auto">
              <table className="table table-responsive table-striped table-dark tm_btng_tble">
                <thead className="thead-light">
                  <tr>
                    <th>Date</th>
                    <th>Questions</th>
                    <th>Answers</th>
                    <th>Odds</th>
                    <th>Games</th>
                    <th style={{width:'50%'}}>You can win</th>
                  </tr>
                </thead>
                <tbody>
                  {data.content.map((m, i) => (
                    <tr key={i} style={{ fontSize: "12px" }}>
                      <td>{m.ChannelEventDate}</td>
                      <td>
                        {m.GameQuestion}
                        <label className="badge badge-light text-dark">
                          {m.MatchName}
                        </label>
                      </td>
                      <td>{m.UserAnswer}</td>
                      <td>{m.QuestionOdds}</td>
                      <td>{m.MyBids}</td>
                      <td>{m.YouWins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            "No " + data.title
          )}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CustomCollapse;
