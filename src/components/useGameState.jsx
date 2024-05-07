import { useState, useEffect } from "react";
import { utils } from "./helpers/Utils.js";
import { states } from "./helpers/States.js";

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (availableNums.length > 0 && secondsLeft > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (num, numStatus) => {
    switch (numStatus) {
      case states.available:
        const newCandidatesNums = candidateNums.concat(num);
        if (utils.sum(newCandidatesNums) !== stars)
          setCandidateNums(newCandidatesNums);
        else {
          const newAvailableNumbers = availableNums.filter(
            (n) => !newCandidatesNums.includes(n)
          );
          setAvailableNums(newAvailableNumbers);
          setCandidateNums([]);
          setStars(utils.randomSumIn(newAvailableNumbers, 9));
        }
        break;
      case states.wrong:
      case states.candidate:
        setCandidateNums(candidateNums.filter((n) => n !== num));
        break;
    }
  };

  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};

export default useGameState;
