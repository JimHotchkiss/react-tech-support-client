import React from "react";
import "./displays.css";

const Displays = props => {
  const displayList = props.monitors.map((monitor, index) => {
    return (
      <div
        key={monitor.name}
        className={"show-display " + (props.camera.open ? "open" : "")}
      >
        <div
          index={index}
          onClick={() => props.selectDisplay(index)}
          className="monitor-button"
        >
          <p>{monitor.name}</p>
        </div>
      </div>
    );
  });
  return (
    <div
      className="display-div"
      className={"show-display " + (props.camera.open ? "open" : "")}
    >
      <h3 className="display-title">Display</h3>
      <div className="display-button-div">{displayList}</div>
    </div>
  );
};

export default Displays;
