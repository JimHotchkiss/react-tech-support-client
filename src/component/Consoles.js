import React, { useState } from "react";
import "./consoles.css";
import Cameras from "./Cameras";

const Consoles = (props) => {
  return (
    <div>
      <Cameras
        toggleCamera={props.toggleCamera}
        toggleDisplay={props.toggleDisplay}
        cameras={props.cameras}
        monitors={props.monitors}
        consoles={props.consoles}
        selectDisplay={props.selectDisplay}
      />
    </div>
  );
};

export default Consoles;
