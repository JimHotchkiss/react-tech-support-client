import React from "react";
import Displays from "./Displays";
import Arrow from "./Arrow";
const Cameras = props => {
  const cameraList = props.cameras.map((camera, index) => {
    return (
      <div className="camera-outside-div" key={index}>
        <div
          index={index}
          onClick={() => {
            props.toggleOpenDispaly(index);
            props.updateConsoles(index);
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
        <Displays
          consoles={props.consoles}
          camera={camera}
          monitors={props.monitors}
          selectDisplay={props.selectDisplay}
        />
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
