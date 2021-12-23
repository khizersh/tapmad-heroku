import React, { useEffect, useLayoutEffect, useState } from "react";
import { getMatchBetsByUser } from "../../../components/psl/bids/bids.service";
import styles from "../game.module.css";
import CustomCollapse from "./CustomCollapse";
import { Accordion, Card } from "react-bootstrap";

const MyBid = ({ type }) => {
  const [data, setData] = useState([]);
  const [openTab, setOpenTab] = useState(type);
  useEffect(() => {
    getMatchBetsByUser()
      .then((res) => {
        console.log("Data", res);
        if (res && res.Response.responseCode == 1) {
          setData([
            {
              id: "play",
              title: "In Play",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/coin-white.png",
              content: Array.isArray(res.InPlay) ? res.InPlay : [],
            },
            {
              id: "won",
              title: "Won",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/trophy-white.png",
              content: Array.isArray(res.Won) ? res.Won : [],
            },
            {
              id: "lost",
              title: "Lost",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/lost-white.png",
              content: Array.isArray(res.Lost) ? res.Lost : [],
            },
            {
              id: "draw",
              title: "Result/Draw",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/coin-draw-white.png",
              content: Array.isArray(res.NoResult) ? res.NoResult : [],
            },
          ]);
        }
      })
      .catch((e) => console.log(e));

    if (type) {
      setOpenTab(type);
    }
  }, [type]);

  const onChange = (e) => {
    if (openTab == e.id) {
      setOpenTab("");
    } else {
      setOpenTab(e.id);
    }
  };
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
          {openTab ? (
            <Accordion className="mt-3" activeKey={openTab}>
              {data.length > 0
                ? data.map((m, i) => (
                    <CustomCollapse data={m} key={i} onChange={onChange} />
                  ))
                : null}
            </Accordion>
          ) : (
            <Accordion className="mt-3">
              {data.length > 0
                ? data.map((m, i) => (
                    <CustomCollapse data={m} key={i} onChange={onChange} />
                  ))
                : null}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBid;
