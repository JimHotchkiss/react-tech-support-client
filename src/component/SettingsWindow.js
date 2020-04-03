import React from "react";
import "./settingsWindow.css";
import SettingsTitle from "./SettingsTitle";
import "./settingsTitle.css";

const SettingsWindow = props => {
  return (
    <div className="settings-window-div">
      <SettingsTitle
        updateSpecialty={props.updateSpecialty}
        selectSpecialty={props.selectSpecialty}
        sixteenSpecialties={props.sixteenSpecialties}
        consoles={props.consoles}
        updateCurrentSpecialty={props.updateCurrentSpecialty}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
};

export default SettingsWindow;
