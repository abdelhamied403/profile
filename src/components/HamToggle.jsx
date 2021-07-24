import React from "react";

import "./HamToggle.scss";

const HamToggle = (props) => {
  return (
    <div id="menu">
      <div id="pencet" className={props.open ? "Diam" : null}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HamToggle;
