import "../style/main.css";
import { utils } from "./helpers/Utils.js";

const StarMatch = () => {
  const stars = 6;

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map((starId) => (
            <div key={starId} className="star" />
          ))}
        </div>
        <div className="right">
          {utils.range(1, 9).map((numberId) => (
            <button key={numberId} className="number">
              {numberId}
            </button>
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
