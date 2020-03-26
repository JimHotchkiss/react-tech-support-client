import React from "react";
import "./consoleRow.css";

const ConsoleRow = () => {
  const cameras = ["1688", "1588", "Precision", "1488", "1288", "1188"];
  const cameraList = cameras.map(camera => {
    return (
      <div key={camera} className="li-icon-div">
        <div className="console-li-div">
          <li className="console-li-element">
            <a href="#">{camera}</a>
          </li>
        </div>

        <a href="#">
          <div className="expand-icon-div"></div>
        </a>
      </div>
    );
  });
  return (
    <div className="console-row-div">
      <ul className="console-row-ul">{cameraList}</ul>
    </div>
  );
};

export default ConsoleRow;
