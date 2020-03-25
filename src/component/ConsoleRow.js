import React from "react";
import "./consoleRow.css";

const ConsoleRow = () => {
  const cameras = ["1688", "1588", "Precision", "1488", "1288", "1188"];
  const cameraList = cameras.map(camera => {
    return <li className="ccu-li-element">{camera}</li>;
  });
  return (
    <div className="console-row-div">
      <ul className="console-row-ul">{cameraList}</ul>
    </div>
  );
};

export default ConsoleRow;
