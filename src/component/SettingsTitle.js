import React from "react";
import SettingsInstructions from "./SettingsInstructions";

const SettingsTitle = props => {
  return (
    <div className="settings-title-div">
      <h3>Money Settings</h3>

      <div className="info-div">
        <div className="settings-info-icon-div"></div>
        <SettingsInstructions consoles={props.consoles} />
      </div>
    </div>
  );
};

export default SettingsTitle;
