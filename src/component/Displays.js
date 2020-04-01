import React from "react";
import "./displays.css";

const Displays = props => {
  console.log(props.consoles);
  const displayList = props.monitors.map((monitor, index) => {
    console.log("monitor:", monitor, "camera:", props.consoles[0]);
    return (
      <div
        key={monitor.name}
        className={"show-display " + (props.camera.open ? "open" : "")}
      >
        <div
          index={index}
          onClick={() => {
            props.selectDisplay(index);
            props.toggleDisplayButtonColor(index);
          }}
          className={"monitor-button " + (monitor.clicked ? "clicked" : "")}
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
