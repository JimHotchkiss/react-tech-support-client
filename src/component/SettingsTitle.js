import React from "react";
import SettingsInstructions from "./SettingsInstructions";
import Specialties from "./Specialties";

const SettingsTitle = props => {
  console.log(props);
  return (
    <div className="settings-title-div">
      <h3>Money Settings</h3>

      <div className="specialty-div">
        <Specialties consoles={props.consoles} />
      </div>

      <div className="info-div">
        <div className="settings-info-icon-div"></div>
        <SettingsInstructions consoles={props.consoles} />
      </div>
    </div>
  );
};

export default SettingsTitle;
