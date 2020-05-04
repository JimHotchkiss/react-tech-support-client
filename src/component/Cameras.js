import React from "react";
import Displays from "./Displays";
import Arrow from "./Arrow";
import "./cameras.css";
const Cameras = (props) => {
  const cameraList = props.cameras.map((camera, index) => {
    return (
      <div className='camera-outside-div' key={index}>
        <div index={index} onClick={props.handleCamera.bind(this, index)}>
          <div className='li-icon-div'>
            <div className='console-li-div'>
              <li className='console-li-element'>
                <a href='#!' index={index}>
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
          handleDisplay={props.handleDisplay}
        />
      </div>
    );
  });
  return (
    <div className='console-row-div'>
      <ul className='console-row-ul'>{cameraList}</ul>
    </div>
  );
};

export default Cameras;
