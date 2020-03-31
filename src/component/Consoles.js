import React, { useState } from "react";
import "./consoles.css";
import Cameras from "./Cameras";

const Consoles = props => {
  return (
    <div>
      <Cameras
        updateConsoles={props.updateConsoles}
        toggleOpenDispaly={props.toggleOpenDispaly}
        cameras={props.cameras}
        consoles={props.consoles}
      />
    </div>
  );
};

export default Consoles;
