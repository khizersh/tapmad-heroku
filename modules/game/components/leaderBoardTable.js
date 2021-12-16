import React from "react";
import {
  positionOne,
  positionTwo,
  positionThree,
  leaderBoardUseIcon,
} from "../../../services/imagesLink";
import styles from "../game.module.css";

const leaderBoardTable = ({ leaderBoard , limit , onReadMore}) => {


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
            <th scope="col" className="border-left-10">Rank</th>
            <th scope="col" className="pl-5">Player Name</th>
            <th scope="col" className="border-right-10 ">Game won</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoard.length ? (
            leaderBoard.map((m, i) => (
              <>
                {i > 2 ? (
                  <>
                  <tr key={i} className="">
                    <td className="pl-4"> 
                      <span >#{m.Rank}</span>
                    </td>
                    <td className="pl-5"><span><img src={leaderBoardUseIcon} width={30}/></span> {m.FullName}</td>
                    <td className="pl-4">{m.TotalCoins} </td>
                  </tr>
                  </>
                ) : null}
              </>
            ))
          ) : (
            <td colSpan="3" className="text-center">
              Record not found
            </td>
          )}
        </tbody>
        {limit ? (
              <tfoot>
                <tr>
                  <th colSpan="3" className="text-center">
                    <button className="btn subscribe-btn bg-green" onClick={onReadMore}>
                      Load More
                    </button>
                  </th>
                </tr>
              </tfoot>
            ) : null}
      </table>
    </div>
  );
};

export default leaderBoardTable;
