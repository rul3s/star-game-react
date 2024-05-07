import { useState } from "react";
import "../style/main.css";
import Game from "./Game.jsx";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  const setNewGame = () => {
    setGameId(gameId + 1);
  };

  return (
    <div>
      <div>Game Id {gameId}</div>
      <Game startNewGame={setNewGame} key={gameId} />
    </div>
  );
};

export default StarMatch;
