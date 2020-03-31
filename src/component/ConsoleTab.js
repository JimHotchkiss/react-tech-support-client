import React from "react";
import "./consoletab.css";
import ConsoleCategory from "./ConsoleCategory";
import Consoles from "./Consoles";

const ConsoleTab = props => {
  console.log(props);
  return (
    <div className="console-tab-div">
      <div className="console-wrapper">
        <ConsoleCategory />
        <Consoles
          consoles={props.consoles}
          updateInstructions={props.updateInstructions}
          toggleOpenDispaly={props.toggleOpenDispaly}
          cameras={props.cameras}
        />
      </div>
    </div>
  );
};

export default ConsoleTab;
