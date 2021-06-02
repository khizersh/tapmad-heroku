import React from "react";
import styles from "../game.module.css";
import { Accordion, Card } from "react-bootstrap";

const CustomCollapse = ({ data }) => {
  const [arrow, setArrow] = React.useState(false);
  return (
    <Card className={styles.bgBlack} onClick={() => setArrow(!arrow)}>
      <Accordion.Toggle as={Card.Header} eventKey={data.id}>
        <h5 className={`mb-0 text-light ${styles.title}`}>
          <img src={data.icon} /> {data.title}
          <i
            className={`fa fa-angle-${
              arrow ? "up" : "down"
            } rotate-icon float-right`}
          ></i>
        </h5>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={data.id}>
        <Card.Body className={styles.cardBody}>{data.content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CustomCollapse;
