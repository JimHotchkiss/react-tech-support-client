import React from "react";
import "./consoletab.css";
import ConsoleCategory from "./ConsoleCategory";
import Consoles from "./Consoles";

const ConsoleTab = props => {
  console.log("consoleTab:", props.consoles);
  return (
    <div className="console-tab-div">
      <div className="console-wrapper">
        <ConsoleCategory />
        <Consoles
          updateConsoles={props.updateConsoles}
          consoles={props.consoles}
          toggleOpenDispaly={props.toggleOpenDispaly}
          cameras={props.cameras}
          monitors={props.monitors}
          selectDisplay={props.selectDisplay}
        />
      </div>
    </div>
  );
};

export default ConsoleTab;
