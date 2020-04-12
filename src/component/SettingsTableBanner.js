import React from "react";
import "./settingsTableBanner.css";
import CameraBanner from "./CameraBanner";
import MonitorBanner from "./MonitorBanner";
const SettingsTableBanner = (props) => {
  console.log(props.currentCamera);
  return (
    <div className="settings-table-banner">
      <div className="camera-banner-div">
        <CameraBanner
          currentCamera={props.currentCamera}
          currentSpecialty={props.currentSpecialty}
        />
      </div>
      <div className="monitor-banner-div">
        <MonitorBanner
          currentDisplay={props.currentDisplay}
          currentSpecialty={props.currentSpecialty}
        />
      </div>
    </div>
  );
};
export default SettingsTableBanner;
