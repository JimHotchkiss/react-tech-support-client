import React from "react";
import Cameras from "./Cameras";

const Consoles = (props) => {
  return (
    <div>
      <Cameras
        handleCamera={props.handleCamera}
        handleDisplay={props.handleDisplay}
        cameras={props.cameras}
        monitors={props.monitors}
        consoles={props.consoles}
      />
    </div>
  );
};

export default Consoles;
