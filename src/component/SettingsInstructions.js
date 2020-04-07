import React from "react";
const SettingsInstructions = (props) => {
  console.log(props);
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
        {props.currentDisplay[0] && props.currentDisplay[0].clicked
          ? specialtyInstructions
          : props.currentCamera[0] && props.currentCamera[0].open
          ? displayInstructions
          : cameraInstructions}
      </div>
    </div>
  );
};

export default SettingsInstructions;
