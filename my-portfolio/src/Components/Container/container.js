import React from "react";
import './container.css';

function Container(props) {
  return <div className="row-container">{props.children}</div>;
}

export default Container;