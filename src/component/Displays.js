import React, { useState } from "react";
import "./displays.css";

const Displays = props => {
  const [click, setClick] = useState(false);
  const [monitors, setsMonitor] = useState([
    {
      name: "4k",
      open: false
    },
    {
      name: "VisionPro",
      open: false
    },
    {
      name: "HDTV Wise",
      open: false
    }
  ]);

  const selectDisplay = index => {
    console.log(props.consoles, monitors[index].name);
  };

  const displayList = monitors.map((monitor, index) => {
    return (
      <div
        key={monitor.name}
        className={"show-display " + (props.camera.open ? "open" : "")}
      >
        <div
          index={index}
          onClick={() => selectDisplay(index)}
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
