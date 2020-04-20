import React from "react";
import SettingsTitle from "./SettingsTitle";
import "./settingsWindow.css";

const SettingsWindow = (props) => {
  return (
    <div className='settings-window-div'>
      <SettingsTitle
        handleSpecialty={props.handleSpecialty}
        specialties={props.specialties}
        consoles={props.consoles}
        currentCamera={props.currentCamera}
        currentDisplay={props.currentDisplay}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
};

export default SettingsWindow;
