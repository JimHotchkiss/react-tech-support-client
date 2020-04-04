import React from "react";
import SettingsInstructions from "./SettingsInstructions";
import Specialties from "./Specialties";

const SettingsTitle = (props) => {
  const specialty = (
    <div
      className={
        "specialty-div " +
        (props.currentSpecialty != null && props.currentSpecialty.clicked
          ? "settings"
          : "")
      }
    >
      <Specialties
        updateSpecialty={props.updateSpecialty}
        selectSpecialty={props.selectSpecialty}
        sixteenSpecialties={props.sixteenSpecialties}
        consoles={props.consoles}
        updateCurrentSpecialty={props.updateCurrentSpecialty}
        currentSpecialty={props.currentSpecialty}
      />
    </div>
  );
  return (
    <div
      className={
        "settings-title-div " +
        (props.currentSpecialty != null && props.currentSpecialty.clicked
          ? "settings"
          : "")
      }
    >
      <h3>Money Settings</h3>
      <div
        className={
          "info-div " +
          (props.currentSpecialty != null && props.currentSpecialty.clicked
            ? "settings"
            : "")
        }
      >
        <div
          className={
            "settings-info-icon-div " +
            (props.currentSpecialty != null && props.currentSpecialty.clicked
              ? "settings"
              : "")
          }
        ></div>
        <SettingsInstructions consoles={props.consoles} />
      </div>
      {props.consoles[1] && !props.consoles[1].clicked && props.consoles[2]
        ? specialty
        : props.consoles[1] && props.consoles[1].clicked
        ? specialty
        : null}
    </div>
  );
};

export default SettingsTitle;
