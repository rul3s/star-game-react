import { useState } from "react";
import { states, stateColors } from "./helpers/States";

const PlayAgain = (props) => {
  const hasWon = props.gameStatus === "won";

  return (
    <div className="game-done">
      <div className="message" style={{ color: hasWon ? "green" : "red" }}>
        {hasWon ? "You win" : "Game over"}
      </div>
      <button onClick={props.onClick}>Play again?</button>
    </div>
  );
};

export default PlayAgain;
