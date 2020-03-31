import React, { useState } from "react";
import Displays from "./Displays";
import Arrow from "./Arrow";

const Cameras = props => {
  console.log(props.consoles);

  const cameraList = props.cameras.map((camera, index) => {
    return (
      <div className="camera-outside-div" key={index}>
        <div
          index={index}
          onClick={() => {
            props.updateConsoles(index);
            props.toggleOpenDispaly(index);
          }}
        >
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

export default Cameras;
