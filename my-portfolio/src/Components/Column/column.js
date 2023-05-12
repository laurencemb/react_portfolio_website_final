import React from "react";
import './column.css';

function Column(props) {
  return <div className="column">{props.children}</div>;
}

export default Column;

