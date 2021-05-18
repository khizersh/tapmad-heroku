import React from "react";
import styles from "../game.module.css";
import { Accordion, Card } from "react-bootstrap";

const CustomCollapse = ({ data }) => {
  return (
    <Accordion  >
      <Card className={styles.bgDark}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h5 className={`mb-0 text-light ${styles.title}`}>
            <img src={data.icon} /> {data.title}
            <i className="fa fa-angle-down rotate-icon float-right"></i>
          </h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{data.content}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CustomCollapse;
