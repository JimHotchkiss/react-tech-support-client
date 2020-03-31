import React from "react";
const SettingsInstructions = props => {
  console.log(props.consoles[1]);
  const cameraInstructions = (
    <p className="info-p-tag">
      Select a CCU, monitor and specialty to display settings.
    </p>
  );
  const displayInstructions = (
    <p className="info-p-tag">
      Select a Display and specialty to display settings.
    </p>
  );
  const specialtyInstructions = (
    <p className="info-p-tag">Select a Specialty to display settings.</p>
  );

  return (
    <div className="instructions-div">
      <div className="info-text-div">
        {props.consoles[0] ? displayInstructions : cameraInstructions}
        {props.consoles[2] ? specialtyInstructions : null}
      </div>
    </div>
  );
};

export default SettingsInstructions;
