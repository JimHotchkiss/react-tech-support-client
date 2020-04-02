import React from "react";
import "./consoletab.css";
import ConsoleCategory from "./ConsoleCategory";
import Consoles from "./Consoles";

const ConsoleTab = props => {
  return (
    <div className="console-tab-div">
      <div className="console-wrapper">
        <ConsoleCategory />
        <Consoles
          updateConsoles={props.updateConsoles}
          consoles={props.consoles}
          toggleOpenDisplay={props.toggleOpenDisplay}
          toggleDisplayButtonColor={props.toggleDisplayButtonColor}
          cameras={props.cameras}
          monitors={props.monitors}
          selectDisplay={props.selectDisplay}
        />
      </div>
    </div>
  );
};

export default ConsoleTab;
