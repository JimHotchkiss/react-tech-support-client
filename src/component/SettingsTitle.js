import React from "react";
import SettingsInstructions from "./SettingsInstructions";
import Specialties from "./Specialties";

const SettingsTitle = props => {
  console.log(props);

  const specialty = (
    <div className="specialty-div">
      <Specialties consoles={props.consoles} />
    </div>
  );
  return (
    <div className="settings-title-div">
      <h3>Money Settings</h3>

      {props.consoles[1] && props.consoles[1].clicked ? specialty : null}

      {/* <div className="specialty-div">
        <Specialties consoles={props.consoles} />
      </div> */}

      <div className="info-div">
        <div className="settings-info-icon-div"></div>
        <SettingsInstructions consoles={props.consoles} />
      </div>
    </div>
  );
};

export default SettingsTitle;
