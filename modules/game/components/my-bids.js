import React, { useEffect, useState } from "react";
import { getMatchBetsByUser } from "../../../components/psl/bids/bids.service";
import styles from "../game.module.css";
import CustomCollapse from "./CustomCollapse";

const MyBid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMatchBetsByUser()
      .then((res) => {
        if (res && res.Response.responseCode == 1) {
          setData([
            {
              id: "collapse1",
              title: "In Play",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/coin-white.png",
              content: res.InPlay || "No In Play",
            },
            {
              id: "collapse2",
              title: "Won",
              icon:
                "//d1s7wg2ne64q87.cloudfront.net/web/images/trophy-white.png",
              content: res.Won || "No Win",
            },
            {
              id: "collapse3",
              title: "Lost",
              icon: "//d1s7wg2ne64q87.cloudfront.net/web/images/lost-white.png",
              content: res.Lost || "No Lost",
            },
            {
              id: "collapse4",
              title: "No Result/Draw",
              icon:
                "//d1s7wg2ne64q87.cloudfront.net/web/images/coin-draw-white.png",
              content: res.NoResult || "No draw matches data",
            },
          ]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="container my-4">
        <div
          className="accordion md-accordion"
          id="accordionEx"
          role="tablist"
          aria-multiselectable="true"
        >
          {data.length
            ? data.map((m, i) => <CustomCollapse data={m} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default MyBid;
