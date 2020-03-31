import React, { useState } from "react";
import "./consoles.css";
import Cameras from "./Cameras";

const Consoles = props => {
  return (
    <div>
      <Cameras
        updateInstructions={props.updateInstructions}
        toggleOpenDispaly={props.toggleOpenDispaly}
        cameras={props.cameras}
        consoles={props.consoles}
      />
    </div>
  );
};

export default Consoles;
