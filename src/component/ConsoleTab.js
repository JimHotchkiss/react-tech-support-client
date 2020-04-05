import React from "react";
import "./consoletab.css";
import ConsoleCategory from "./ConsoleCategory";
import Consoles from "./Consoles";

const ConsoleTab = (props) => {
  return (
    <div className="console-tab-div">
      <div className="console-wrapper">
        <ConsoleCategory />
        <Consoles
          consoles={props.consoles}
          toggleCamera={props.toggleCamera}
          toggleDisplay={props.toggleDisplay}
          cameras={props.cameras}
          monitors={props.monitors}
        />
      </div>
    </div>
  );
};

export default ConsoleTab;
