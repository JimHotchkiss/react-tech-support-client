import React from "react";

const Arrow = props => {
  return (
    <a href="#">
      <div className={"arrow-outer-div " + (props.camera.open ? "open" : "")}>
        <div className="arrow-div"></div>
      </div>
    </a>
  );
};

export default Arrow;
