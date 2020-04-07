import React from "react";
import "./settingsWindow.css";
import SettingsTitle from "./SettingsTitle";
import "./settingsTitle.css";

const SettingsWindow = (props) => {
  return (
    <div className="settings-window-div">
      <SettingsTitle
        handleSpecialty={props.handleSpecialty}
        selectSpecialty={props.selectSpecialty}
        sixteenSpecialties={props.sixteenSpecialties}
        consoles={props.consoles}
      />
    </div>
  );
};

export default SettingsWindow;
