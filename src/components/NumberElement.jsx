import { useState } from "react";
import { states, stateColors } from "./helpers/States";

const NumberElement = (props) => {
  const state = props.state;
  const number = props.numberId;

  const handleClick = () => {
    console.log(`Number ${number} clicked`);
    props.onClick(number, state);
  };

  return (
    <button
      className={`number ${state}`}
      style={{ backgroundColor: stateColors[props.state] }}
      onClick={handleClick}
    >
      {number}
    </button>
  );
};

export default NumberElement;
