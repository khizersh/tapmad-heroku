import React, { useEffect, useState, useContext } from "react";
import {
  getAllLeagueOnline,
  getLeaderBoardByLeague,
} from "../../../components/psl/bids/bids.service";
import { GameContext } from "../../../contexts/GameContext";
import { MainContext } from "../../../contexts/MainContext";
import styles from "../game.module.css";
import { GlobalService } from "../../global-service";
import TabsWithIcon from "../../../components/TabsWithIcon";

const leaderboardComponent = () => {
  const [tabsData, setTabsData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [limit, setLimit] = useState(null);
  const { gameState, updateSelectedTab } = useContext(GameContext);
  const { setLoader } = React.useContext(MainContext);

  const goldCrown =
    "http://d1s7wg2ne64q87.cloudfront.net/web/images/crown-sil.png";
  const brownCrown =
    "http://d1s7wg2ne64q87.cloudfront.net/web/images/crown-brw.png";
  const silverCrown =
    "//d1s7wg2ne64q87.cloudfront.net/web/images/crown-grey.png";
  const goldCoin = "//d1s7wg2ne64q87.cloudfront.net/web/images/coins.png";

  const onClickTab = (tab) => {
    setLoader(true);
    updateSelectedTab({ ...tab, offset: 0 });
    setSelectedTab(tab)
    getLeaderBoardByLeague(tab.LeagueId, 0)
      .then((lead) => {
        if (lead && lead.responseCode == 1) {
          setLoader(false);
          setLeaderBoard(lead.data.LeaderBoard);
        } else {
          setLoader(false);
          setLeaderBoard([]);
        }
      })
      .catch((e) => {
        setLoader(false);
        console.log(e);
      });
  };

  const onReadMore = () => {
    setLoader(true);
    let clone = leaderBoard;

    getLeaderBoardByLeague(
      gameState.selectedTab.LeagueId,
      gameState.selectedTab.offset + limit
    )
      .then((lead) => {
        if (lead && lead.responseCode == 1) {
          if (lead.data.LeaderBoard.length) {
            let limit = lead.data.Size / lead.data.Limit;
            if (limit >= 1) {
              setLimit(lead.data.Limit);
            } else {
              setLimit(0);
            }
            lead.data.LeaderBoard.map((m) => {
              let obj = {
                ...m,
                originalCoin: m.TotalCoins,
              };
              clone.push(obj);
            });
            let array = clone.map((m) => {
              return {
                ...m,
                TotalCoins: GlobalService.nFormatter(m.originalCoin, 1),
              };
            });
            setLeaderBoard(array);
          }
          setLoader(false);
        } else {
          setLoader(false);
        }
      })
      .catch((e) => console.log(e));
    setLoader(true);
    updateSelectedTab({
      ...gameState.selectedTab,
      offset: gameState.selectedTab.offset + limit,
    });
  };

  useEffect(() => {
    if (gameState && gameState.tabs.length) {
      setLoader(true);
      const tabArray =  gameState.tabs.map(tab => {
      return {...tab , title : tab.DisplayName , icon : "" , selectedIcon : ""}
      })
      setSelectedTab(tabArray[0])
      setTabsData(tabArray);
      getLeaderBoardByLeague(gameState.selectedTab.LeagueId, 0)
        .then((lead) => {
          if (lead && lead.responseCode == 1) {
            if (lead.data.LeaderBoard.length) {
              let limit = lead.data.Size / lead.data.Limit;
              if (limit >= 1) {
                setLimit(lead.data.Limit);
              } else {
                setLimit(0);
              }

              let array = lead.data.LeaderBoard.map((m) => {
                return {
                  ...m,
                  TotalCoins:
                    GlobalService.nFormatter(m.TotalCoins, 1) || m.TotalCoins,
                  originalCoin: m.TotalCoins,
                };
              });
              setLeaderBoard(array);
              setLoader(false);
            }
          } else {
            setLoader(false);
          }
        })
        .catch((e) => setLoader(false));
    }
  }, [gameState.tabs]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-md-3">
          <TabsWithIcon data={tabsData} onChange={onClickTab} selected={selectedTab} />
        </div>
      </div>
      <div className={`row ${styles.width}`}>
        <div className="col-12 mt-2">
       {/* commented old code paste here */}
          <table
            className={`table table-striped table-dark  ${styles.tm_btng_tble} mb-0 mt-2`}
          >
            <thead className="thead-light text-center">
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
                    <tr key={i} className="text-center">
                      <td>
                        <span>
                          <img
                            src={
                              m.LeaderPicture
                                ? m.LeaderPicture
                                : "//d1s7wg2ne64q87.cloudfront.net/web/images/17797.png"
                            }
                            className="img-fluid rounded-circle"
                            width="26px"
                          />
                        </span>
                        <span
                          className={`${styles.font400} badge badge-success rounded-circle ml-1 px-2 py-1`}
                        >
                          {m.Rank}
                        </span>
                        <img
                          src={
                            i == 0
                              ? goldCrown
                              : i == 1
                                ? brownCrown
                                : silverCrown
                          }
                          width="20px"
                          className="ml-1"
                        />
                      </td>
                      <td>{m.FullName}</td>
                      <td>
                        {m.TotalCoins}{" "}
                        <span>
                          {" "}
                          <img src={goldCoin} width="25px" />
                        </span>
                      </td>
                    </tr>
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
                    <button className="btn btn-success" onClick={onReadMore}>
                      Load More
                    </button>
                  </th>
                </tr>
              </tfoot>
            ) : null}
          </table>
        </div>
      </div>
    </div>
  );
};

export default leaderboardComponent;


   {/* <div className="">
            <img
              src="https://d34080pnh6e62j.cloudfront.net/images/banners/GamepageHBLPSL6Banner.jpg"
              alt="psl image"
              width="100%"
            />
          </div> */}
          {/* <ul
            className={`list-group list-group-horizontal text-center  mb-2 d-flex`}
          >
            {data.length
              ? data.map((m, i) => (
                <li
                  key={i}
                  onClick={() => onClickTab(m)}
                  className={`rounded-0 p-0 flex-fill ${styles.bgDark} ${m.LeagueId == gameState.selectedTab.LeagueId
                    ? styles.active
                    : ""
                    }`}
                >
                  <div className="nav-link rounded-0 league_tab">
                    {m.DisplayName}
                  </div>
                </li>
              ))
              : null}
          </ul> */}
