import React from "react";
import ConsoleCategory from "./ConsoleCategory";
import Consoles from "./Consoles";
import "./consoleTab.css";

const ConsoleTab = (props) => {
  return (
    <div className='console-wrapper'>
      <ConsoleCategory />
      <Consoles
        handleCamera={props.handleCamera}
        handleDisplay={props.handleDisplay}
        cameras={props.cameras}
        monitors={props.monitors}
      />
    </div>
  );
};

export default ConsoleTab;
