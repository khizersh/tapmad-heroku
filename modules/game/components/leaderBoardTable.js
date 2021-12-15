import React from "react";
import {
  positionOne,
  positionTwo,
  positionThree,
  leaderBoardUseIcon,
} from "../../../services/imagesLink";
import styles from "../game.module.css";

const leaderBoardTable = ({ leaderBoard }) => {


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
      <table className={`w-100 P-5 table-leaderboard`}>
        <thead >
          <tr >
            <th scope="col" className="border-top-left border-bottom-left">Rank</th>
            <th scope="col" className="pl-5">Player Name</th>
            <th scope="col" className="border-top-right border-bottom-right ">Game won</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoard.length ? (
            leaderBoard.map((m, i) => (
              <>
                {i > 2 ? (
                  <tr key={i} className="">
                    <td> 
                      <span >#{m.Rank}</span>
                    </td>
                    <td className="pl-5"><span><img src={leaderBoardUseIcon} width={30}/></span> {m.FullName}</td>
                    <td >{m.TotalCoins} </td>
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
