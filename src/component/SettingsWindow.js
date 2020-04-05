import React from "react";
import "./settingsWindow.css";
import SettingsTitle from "./SettingsTitle";
import "./settingsTitle.css";

const SettingsWindow = (props) => {
  console.log("consoles:", props.consoles);
  return (
    <div className="settings-window-div">
      <SettingsTitle
        toggleSpecialty={props.toggleSpecialty}
        selectSpecialty={props.selectSpecialty}
        sixteenSpecialties={props.sixteenSpecialties}
        consoles={props.consoles}
      />
    </div>
  );
};

export default SettingsWindow;
