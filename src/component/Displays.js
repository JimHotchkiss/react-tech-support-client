import React from "react";
import "./displays.css";

const Displays = props => {
  const sixteenDisplayList = props.monitors.map((monitor, index) => {
    if (monitor.name != "HDTV Wise") {
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
    }
  });

  const displayList = props.monitors.map((monitor, index) => {
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
      <div className="display-button-div">
        {props.consoles[0] && props.consoles[0].name === "1688"
          ? sixteenDisplayList
          : displayList}
      </div>
    </div>
  );
};

export default Displays;
