import React, { useState } from "react";
import "./consoles.css";
import Cameras from "./Cameras";

const Consoles = props => {
  console.log(props.cameras);
  const [consoles, setConsoles] = useState([]);
  return (
    <div>
      <Cameras
        consoleLog={props.consoleLog}
        toggleOpenDispaly={props.toggleOpenDispaly}
        cameras={props.cameras}
        consoles={consoles}
      />
    </div>
  );
};

export default Consoles;
