import React from "react";
import './LeftContainer.css';

function LeftContainer(props) {
  return <div className="left-container">{props.children}</div>;
}

export default LeftContainer;