import React, { useState } from "react";
import "./displays.css";

const Displays = props => {
  const [color, setColor] = useState({ clicked: true });
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

  const toggleColor = () => {
    console.log("I don't get it");
  };

  const displayList = monitors.map((monitor, index) => {
    return (
      <div
        key={monitor.name}
        className={"show-display " + (props.camera.open ? "open" : "")}
      >
        <div onClick={() => toggleColor()} className="monitor-button">
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
      <h3 className="display-title">Displays</h3>
      <div className="display-button-div">{displayList}</div>
    </div>
  );
};

export default Displays;
