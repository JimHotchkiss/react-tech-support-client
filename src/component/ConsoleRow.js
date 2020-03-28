import React, { useState } from "react";
import "./consoleRow.css";
import Displays from "./Displays";
import Arrow from "./Arrow";

const ConsoleRow = () => {
  const [cameras, setCameras] = useState([
    {
      name: "1688",
      open: false
    },
    {
      name: "1588",
      open: false
    },
    {
      name: "Precision",
      open: false
    },
    {
      name: "1488",
      open: false
    },
    {
      name: "1288",
      open: false
    },
    {
      name: "1188",
      open: false
    }
  ]);

  // Toggle function
  const toggleDisplay = index => {
    setCameras(
      cameras.map((camera, i) => {
        if (i === index) {
          camera.open = !camera.open;
        } else {
          camera.open = false;
        }
        return camera;
      })
    );
  };

  const cameraList = cameras.map((camera, index) => {
    return (
      <div key={index}>
        <div index={index} onClick={() => toggleDisplay(index)}>
          <div className="li-icon-div">
            <div className="console-li-div">
              <li className="console-li-element">
                <a index={index} href="#">
                  {camera.name}
                </a>
              </li>
            </div>
            <Arrow camera={camera} />
          </div>
        </div>
        <Displays camera={camera} />
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
