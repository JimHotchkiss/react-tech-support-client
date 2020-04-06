import React from "react";
const SettingsInstructions = (props) => {
  console.log(props.consoles);
  let displayClicked;
  let specialtyClicked;

  if (props.consoles[1]) {
    displayClicked = props.consoles[1].clicked;
  }

  if (props.consoles[2]) {
    specialtyClicked = props.consoles[2].clicked;
  }
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
        {props.consoles[2]
          ? null
          : props.consoles[1]
          ? specialtyInstructions
          : props.consoles[0] &&
            props.consoles[0].open &&
            props.consoles[2] &&
            !displayClicked
          ? displayInstructions
          : props.consoles[0] && props.consoles[0].open && !displayClicked
          ? displayInstructions
          : cameraInstructions}
      </div>
    </div>
  );
};

export default SettingsInstructions;
