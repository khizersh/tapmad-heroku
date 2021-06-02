import React, { useEffect, useLayoutEffect, useState } from "react";
import { getMatchBetsByUser } from "../../../components/psl/bids/bids.service";
import styles from "../game.module.css";
import CustomCollapse from "./CustomCollapse";
import { Accordion, Card } from "react-bootstrap";

const MyBid = ({ type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMatchBetsByUser()
      .then((res) => {
        console.log(res);
        if (res && res.Response.responseCode == 1) {
          setData([
            {
              id: "play",
              title: "In Play",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/coin-white.png",
              content: res.InPlay || "No In Play",
            },
            {
              id: "won",
              title: "Won",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/trophy-white.png",
              content: res.Won || "No Win",
            },
            {
              id: "lost",
              title: "Lost",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/lost-white.png",
              content: res.Lost || "No Lost",
            },
            {
              id: "draw",
              title: "No Result/Draw",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/coin-draw-white.png",
              content: res.NoResult || "No draw matches data",
            }
          ]);
        }
      })
      .catch((e) => console.log(e));
  }, [type]);

  return (
    <div>
      <div className="container my-4">
        <div
          className="accordion md-accordion"
          id="accordionEx"
          role="tablist"
          aria-multiselectable="true"
          className={styles.width}
        >
          <Accordion className="mt-3" activeKey={type}>
            {data.length > 0
              ? data.map((m, i) => <CustomCollapse data={m} index={i} />)
              : null}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MyBid;
