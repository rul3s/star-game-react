import { useState } from "react";
import { states, stateColors } from "./helpers/States";

const PlayAgain = (props) => {
  const gameStatus = props.state;

  return (
    <div className="game-done">
      <p>{gameStatus === "win" ? "You win" : "Game over"}</p>
      <button onClick={props.onClick}>Play again?</button>
    </div>
  );
};

export default PlayAgain;
