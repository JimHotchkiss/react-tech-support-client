import React from "react";
import "./settingsTable.css";
import SettingsTableBanner from "./SettingsTableBanner";
const SettingsTable = (props) => {
  return (
    <div className="tables-div">
      <SettingsTableBanner
        currentCamera={props.currentCamera}
        currentDisplay={props.currentDisplay}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
};
export default SettingsTable;
