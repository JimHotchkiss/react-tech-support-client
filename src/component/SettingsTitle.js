import React from "react";
import SettingsInstructions from "./SettingsInstructions";
import Specialties from "./Specialties";

const SettingsTitle = (props) => {
  const specialty = (
    <div className="specialty-div">
      <Specialties
        handleSpecialty={props.handleSpecialty}
        selectSpecialty={props.selectSpecialty}
        sixteenSpecialties={props.sixteenSpecialties}
      />
    </div>
  );
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
