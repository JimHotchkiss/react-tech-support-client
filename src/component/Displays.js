import React from "react";
import "./displays.css";

const Displays = props => {
  return (
    <div className={"show-display " + (props.camera.open ? "open" : "")}>
      <div className="display-title-div">
        <h3>Displays</h3>
      </div>
      <div className="monitor-div">
        <p>VisionPro</p>
      </div>
      <div className="monitor-div">
        <p>4k</p>
      </div>
    </div>
  );
};

export default Displays;
