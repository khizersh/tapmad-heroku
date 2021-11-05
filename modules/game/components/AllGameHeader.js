import React, { useEffect, useState } from "react";
import styles from "../game.module.css";

const AllGameHeader = ({ func, data }) => {
  const [selected, setSelected] = useState({
    id: 1,
    img: "//d1s7wg2ne64q87.cloudfront.net/web/images/cricket2.png",
    header: "//d1s7wg2ne64q87.cloudfront.net/web/images/GamePageBanner.jpg",
    title: "Cricket",
    blur: false,
  });
  useEffect(() => {}, [data, selected]);

  const tabs = [
    {
      id: 1,
      img: "//d1s7wg2ne64q87.cloudfront.net/web/images/cricket2.png",
      header: "//d1s7wg2ne64q87.cloudfront.net/web/images/GamePageBanner.jpg",
      title: "Cricket",
      blur: false,
    },
    {
      id: 2,
      img: "//d1s7wg2ne64q87.cloudfront.net/web/images/live-sports-1.png",
      header:
        "//d1s7wg2ne64q87.cloudfront.net/web/images/games/wallpaper-002.jpg",
      title: "Live",
      headerTitle: "No live match is going on",
      headerDesc:
        "Netherlands vs Scotland match will start at 2021-05-19 14:00:00",
      blur: true,
    },
  ];

  const onClick = (m) => {
    setSelected(m);
    let filter = [];
    if (m.id == 2) {
      filter = data.filter((f) => f.isLive == true);
    } else {
      filter = data.filter((f) => f.isLive == false);
    }
    func(filter);
  };

  return (
    <div className="row">
      <div className="col-12 text-center">
        {selected && (
          <>
            <img src={selected.header} width="100%" alt="" height="300" />
          </>
        )}
      </div>
      <div className="col-12 text-center">
        <ul className="list-group list-group-horizontal w-100">
          {tabs.length
            ? tabs.map((m, i) => (
                <li
                  key={i}
                  className={`list-group-item text-center btn ${
                    styles.bgDarkGame
                  } ${selected.id == m.id ? styles.activeLi : ""} w-50`}
                  onClick={() => onClick(m)}
                >
                  <img
                    src={m.img}
                    alt={m.title}
                    className="d-block m-auto"
                    width="40"
                  />
                  <span className="mt-2 text-white">{m.title}</span>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default AllGameHeader;
