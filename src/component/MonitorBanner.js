import React from "react";
import "./displayBanner.css";
const MonitorBanner = (props) => {
  return (
    <div className="monitor-banner-wrapper">
      <div className="monitor-banner-title">
        DISPLAY{" "}
        <p className="monitor-banner-text">
          {props.currentDisplay[0] && props.currentDisplay[0].clicked
            ? props.currentDisplay[0].name
            : "Select Display"}
        </p>
      </div>
      <div className="specialty-monitor-banner-title">
        SPECIALTY{" "}
        <p className="specialty-monitor-banner-text">
          {props.currentSpecialty[0] ? props.currentSpecialty[0].name : null}
        </p>
      </div>
    </div>
  );
};

export default MonitorBanner;
