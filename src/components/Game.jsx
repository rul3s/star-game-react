import { useState, useEffect } from "react";
import "../style/main.css";
import { utils } from "./helpers/Utils.js";
import { states } from "./helpers/States.js";
import NumberElement from "./NumberElement.jsx";
import PlayAgain from "./PlayAgain.jsx";

import StarsBox from "./StarsBox.jsx";
import useGameState from "./useGameState.jsx";

const Game = (props) => {
  const { stars, availableNums, candidateNums, secondsLeft, setGameState } =
    useGameState();
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "running";
  const gameIsDone = !(availableNums.length > 0 && secondsLeft > 0);

  const onNumberClick = (num, numStatus) => {
    if (!gameIsDone) {
      switch (numStatus) {
        case states.used:
          break;
        case states.available:
        case states.wrong:
        case states.candidate:
          setGameState(num, numStatus);
          break;
      }
    }
  };

  const calculateState = (numberId) => {
    if (!availableNums.includes(numberId)) return states.used;

    if (candidateNums.includes(numberId)) {
      return candidatesAreWrong ? states.wrong : states.candidate;
    }

    return states.available;
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "running" ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsBox count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((numberId) => (
            <NumberElement
              key={numberId}
              numberId={numberId}
              state={calculateState(numberId)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
