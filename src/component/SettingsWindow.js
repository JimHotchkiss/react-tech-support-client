import React from "react";
import "./settingsWindow.css";
import SettingsTitle from "./SettingsTitle";
import "./settingsTitle.css";

const SettingsWindow = props => {
  return (
    <div className="settings-window-div">
      <SettingsTitle consoles={props.consoles} />
    </div>
  );
};

export default SettingsWindow;
