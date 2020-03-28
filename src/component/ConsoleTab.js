import React from "react";
import "./consoletab.css";
import ConsoleCategory from "./ConsoleCategory";
import Consoles from "./Consoles";

const ConsoleTab = () => {
  return (
    <div className="console-tab-div">
      <div className="console-wrapper">
        <ConsoleCategory />
        <Consoles />
      </div>
    </div>
  );
};

export default ConsoleTab;
