import React from "react";
import "./display.css";

const Displays = (props) => {
  const displayList = props.monitors.map((monitor, index) => {
    return (
      <div
        key={monitor.name}
        className={"show-display " + (props.camera.clicked ? "open" : "")}>
        <div
          index={index}
          onClick={props.handleDisplay.bind(this, index)}
          className={"monitor-button " + (monitor.clicked ? "clicked" : "")}>
          <p>{monitor.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div
      className='display-div'
      className={"show-display " + (props.camera.clicked ? "open" : "")}>
      <h3 className='display-title'>Display</h3>
      <div className='display-button-div'>{displayList}</div>
    </div>
  );
};

export default Displays;
