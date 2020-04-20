import React from "react";
import "./arrow.css";

const Arrow = (props) => {
  return (
    <a href='#'>
      <div
        className={"arrow-outer-div " + (props.camera.clicked ? "open" : "")}>
        <div className='arrow-div'></div>
      </div>
    </a>
  );
};

export default Arrow;
