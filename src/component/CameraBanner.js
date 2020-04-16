import React from "react";
import "./cameraBanner.css";
const CameraBanner = (props) => {
  console.log(props.currentCamera);
  return (
    <div className="camera-banner-wrapper">
      <div className="camera-banner-title">
        CCU{" "}
        <p className="camera-banner-text">
          {props.currentCamera[0] && props.currentCamera[0].open
            ? props.currentCamera[0].name
            : "Select CCU"}
        </p>
      </div>
      <div className="specialty-banner-title">
        SPECIALTY{" "}
        <p className="specialty-banner-text">
          {props.currentSpecialty[0] ? props.currentSpecialty[0].name : null}
        </p>
      </div>
    </div>
  );
};

export default CameraBanner;
