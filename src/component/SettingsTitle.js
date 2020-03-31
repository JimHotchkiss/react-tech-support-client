import React from "react";
import SettingsInstructions from "./SettingsInstructions";

const SettingsTitle = () => {
  return (
    <div className="settings-title-div">
      <h3>Money Settings</h3>

      <div className="info-div">
        <div className="settings-info-icon-div"></div>
        <SettingsInstructions />
      </div>
    </div>
  );
};

export default SettingsTitle;
