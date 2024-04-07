import { useState } from "react";
import "../style/main.css";
import { utils } from "./helpers/Utils.js";
import StarElement from "./StarElement.jsx";

const StarsBox = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((starId) => (
        <StarElement key={starId} starId={starId} />
      ))}
    </>
  );
};

export default StarsBox;
