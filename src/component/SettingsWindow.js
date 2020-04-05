import React from "react";
import "./settingsWindow.css";
import SettingsTitle from "./SettingsTitle";
import "./settingsTitle.css";

const SettingsWindow = (props) => {
  console.log(props.monitors);
  return (
    <div className="settings-window-div">
      <SettingsTitle
        toggleSpecialty={props.toggleSpecialty}
        selectSpecialty={props.selectSpecialty}
        sixteenSpecialties={props.sixteenSpecialties}
        consoles={props.consoles}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
};

export default SettingsWindow;
