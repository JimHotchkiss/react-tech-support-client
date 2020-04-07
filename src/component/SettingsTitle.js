import React from "react";
import SettingsInstructions from "./SettingsInstructions";
import Specialties from "./Specialties";

const SettingsTitle = (props) => {
  const specialty = (
    <div className="specialty-div">
      <Specialties
        handleSpecialty={props.handleSpecialty}
        specialties={props.specialties}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
  return (
    <div className="settings-title-div">
      <h3>Money Settings</h3>
      <div className="info-div">
        <div className="settings-info-icon-div"></div>
        <SettingsInstructions
          currentCamera={props.currentCamera}
          currentDisplay={props.currentDisplay}
          currentSpecialty={props.currentSpecialty}
        />
      </div>
      {specialty}
    </div>
  );
};

export default SettingsTitle;
