import React, { useState } from "react";
import "./consoles.css";
import Cameras from "./Cameras";

const Consoles = props => {
  return (
    <div>
      <Cameras
        updateConsoles={props.updateConsoles}
        toggleOpenDispaly={props.toggleOpenDispaly}
        toggleDisplayButtonColor={props.toggleDisplayButtonColor}
        cameras={props.cameras}
        monitors={props.monitors}
        consoles={props.consoles}
        selectDisplay={props.selectDisplay}
      />
    </div>
  );
};

export default Consoles;
