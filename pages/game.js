import React from "react";
import Game from "../modules/game/components";

function Games() {
  return (
    <div>
      <Game />
    </div>
  );
}
export default Games;

export function getStaticProps() {
  return {
    props: {
      protected: true,
      env: process.env.TAPENV
    },
  };
}
