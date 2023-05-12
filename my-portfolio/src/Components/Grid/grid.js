import React from "react";
import "./grid.css";

function Grid( props ) {
  return <div className="grid-container">{props.children}</div>;
}

export default Grid;