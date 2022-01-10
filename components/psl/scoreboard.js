import React, { useEffect } from "react";
import { FireBase } from "../../services/firebase";
import { getLiveScore } from "./chat/PSLChat.service";

const ScoreBoard = () => {
  const database = FireBase.database();
  useEffect(async () => {
    const data = await getLiveScore(database, "", (data) => {
      console.log("scoreboard", data);
    });
  }, []);
  return <div></div>;
};

export default ScoreBoard;
