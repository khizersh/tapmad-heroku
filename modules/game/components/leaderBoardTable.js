import React from "react";
import {
  positionOne,
  positionTwo,
  positionThree,
} from "../../../services/imagesLink";
import styles from "../game.module.css";

const leaderBoardTable = ({ leaderBoard }) => {
  // const goldCrown =
  // "http://d1s7wg2ne64q87.cloudfront.net/web/images/crown-sil.png";
  //   const brownCrown =
  //     "http://d1s7wg2ne64q87.cloudfront.net/web/images/crown-brw.png";
  //   const silverCrown =
  //     "//d1s7wg2ne64q87.cloudfront.net/web/images/crown-grey.png";
  //   const goldCoin = "//d1s7wg2ne64q87.cloudfront.net/web/images/coins.png";

  return (
    <div>
      <div className="d-flex justify-space-even">
        {leaderBoard.length > 2 ? (
          <>
            <div>
              <img src={positionTwo} width={70} />{" "}
              <p className="font-11 d-block text-center">
                {leaderBoard[1].FullName}
              </p>{" "}
            </div>
            <div>
              <img src={positionOne} width={90} />{" "}
              <p className="font-11 d-block text-center">
                {leaderBoard[0].FullName}
              </p>{" "}
            </div>
            <div>
              <img src={positionThree} width={70} />{" "}
              <p className="font-11 d-block text-center">
                {leaderBoard[2].FullName}
              </p>{" "}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <table className={`w-100 P-5`}>
        <thead className="">
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Coins Won</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoard.length ? (
            leaderBoard.map((m, i) => (
              <>
                {i > 2 ? (
                  <tr key={i} className="">
                    <td> 
                      <span className={`${styles.font400} text-grey`}>#{m.Rank}</span>
                    </td>
                    <td className="text-grey">{m.FullName}</td>
                    <td className="text-grey">{m.TotalCoins} </td>
                  </tr>
                ) : null}
              </>
            ))
          ) : (
            <td colSpan="3" className="text-center">
              Record not found
            </td>
          )}
        </tbody>
        {/* {limit ? (
              <tfoot>
                <tr>
                  <th colSpan="3" className="text-center">
                    <button className="btn btn-success" onClick={onReadMore}>
                      Load More
                    </button>
                  </th>
                </tr>
              </tfoot>
            ) : null} */}
      </table>
    </div>
  );
};

export default leaderBoardTable;
