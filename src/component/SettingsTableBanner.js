import React from "react";
import "./settingsTableBanner.css";
import CameraBanner from "./CameraBanner";
import MonitorBanner from "./MonitorBanner";
const SettingsTableBanner = (props) => {
  return (
    <div className="settings-table-banner">
      <div className="camera-banner-div">
        <CameraBanner />
      </div>
      <div className="monitor-banner-div">
        <MonitorBanner />
      </div>
    </div>
  );
};
export default SettingsTableBanner;
