import React from "react";
import SettingsInstructions from "./SettingsInstructions";
import Specialties from "./Specialties";
import "./settingsTitle.css";

const SettingsTitle = (props) => {
  const specialty = (
    <div
      className={
        "specialty-div " +
        (props.currentSpecialty[0] &&
        props.currentSpecialty[0].clicked &&
        props.currentDisplay[0] &&
        props.currentDisplay[0].clicked === false
          ? "settings"
          : props.currentDisplay[0] && props.currentDisplay[0].clicked
          ? "settings"
          : null)
      }>
      <Specialties
        handleSpecialty={props.handleSpecialty}
        specialties={props.specialties}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
  return (
    <div
      className={
        "settings-title-div " +
        (props.currentSpecialty[0] && props.currentSpecialty[0].clicked
          ? "settings"
          : null)
      }>
      <div className='settings-title-h3-div'>
        <h3>Money Settings</h3>
      </div>
      <div
        className={
          "info-div " +
          (props.currentSpecialty[0] &&
          props.currentSpecialty[0].clicked &&
          props.currentDisplay[0] &&
          props.currentDisplay[0].clicked === false
            ? null
            : props.currentCamera[0] && props.currentCamera[0].open === false
            ? null
            : props.currentSpecialty[0] && props.currentSpecialty[0].clicked
            ? "settings"
            : null)
        }>
        <div className='settings-info-icon-div'></div>
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
