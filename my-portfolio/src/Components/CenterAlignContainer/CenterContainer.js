import React from "react";
import './CenterContainer.css';

function CenterContainer(props) {
  return <div className="center-container">{props.children}</div>;
}

export default CenterContainer;