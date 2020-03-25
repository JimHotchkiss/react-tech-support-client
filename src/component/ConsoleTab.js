import React from "react";
import "./consoletab.css";
import ConsoleCategory from "./ConsoleCategory";
import ConsoleRow from "./ConsoleRow";

const ConsoleTab = () => {
  return (
    <div className="console-tab-div">
      <div className="console-wrapper">
        <ConsoleCategory />
        <ConsoleRow />
      </div>
    </div>
  );
};

export default ConsoleTab;
