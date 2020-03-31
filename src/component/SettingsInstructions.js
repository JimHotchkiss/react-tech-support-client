import React from "react";
const SettingsInstructions = props => {
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
        {props.consoles[0] && props.consoles[0].open
          ? displayInstructions
          : props.consoles[1] && props.consoles[0].open
          ? specialtyInstructions
          : cameraInstructions}
      </div>
    </div>
  );
};

export default SettingsInstructions;