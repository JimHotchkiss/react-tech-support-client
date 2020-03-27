import React, { useState } from "react";
import "./displays.css";

const Displays = props => {
  const [color, setColor] = useState({ clicked: true });
  // console.log(props.camera.open);

  const toggleColor = () => {
    console.log("I don't get it");
    // console.log(color.clicked, props.camera.open);
    // if (color.clicked === undefined) {
    //   console.log("inside undefined");
    //   setColor({ clicked: false });
    // } else if (color.clicked && props.camera.open) {
    //   setColor(!color.clicked);
    // }
  };
  return (
    <div className={"show-display " + (props.camera.open ? "open" : "")}>
      <div className="display-title-div">
        <h3>Displays</h3>
      </div>
      <div
        // onClick={() => toggleColor()}
        className={color.clicked ? "monitor-div" : "monitor-div-clicked"}
      >
        <p>VisionPro</p>
      </div>
      <div className="monitor-div">
        <p>4k</p>
      </div>
    </div>
  );
};

export default Displays;
