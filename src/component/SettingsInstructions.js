import React from "react";
const SettingsInstructions = (props) => {
  const cameraMonitorSpecialtyInstructions = (
    <p className='info-p-tag'>
      Select a CCU, Monitor and Specialty to show settings.
    </p>
  );
  const cameraInstructions = (
    <p className='info-p-tag'>Select a CCU to display settings.</p>
  );
  const displayInstructions = (
    <p className='info-p-tag'>Select a Monitor to display settings.</p>
  );
  const cameraSpecialtyInstructions = (
    <p className='info-p-tag'>
      Select a CCU and Specialty to display settings.
    </p>
  );
  const cameraDisplayInstructions = (
    <p className='info-p-tag'>
      Select a CCU and a Monitor to display settings.
    </p>
  );
  const displaySpecialtyInstructions = (
    <p className='info-p-tag'>
      Select a Monitor and Specialty to display settings.
    </p>
  );
  const specialtyInstructions = (
    <p className='info-p-tag'>Select a Specialty to display settings.</p>
  );
  return (
    <div className='instructions-div'>
      <div className='info-text-div'>
        {props.currentCamera[0] &&
        props.currentCamera[0].clicked === false &&
        props.currentDisplay[0] &&
        props.currentDisplay[0].clicked === false &&
        props.currentSpecialty[0] &&
        props.currentSpecialty[0].clicked
          ? cameraDisplayInstructions
          : props.currentCamera[0] &&
            props.currentCamera[0].clicked === false &&
            props.currentDisplay[0] &&
            props.currentDisplay[0].clicked &&
            props.currentSpecialty[0] &&
            props.currentSpecialty[0].clicked === false
          ? cameraSpecialtyInstructions
          : props.currentCamera[0] &&
            props.currentCamera[0].clicked === false &&
            props.currentDisplay[0] &&
            props.currentDisplay[0].clicked &&
            props.currentSpecialty[0] &&
            props.currentSpecialty[0].clicked
          ? cameraInstructions
          : props.currentCamera[0] &&
            props.currentCamera[0].clicked &&
            props.currentDisplay[0] &&
            props.currentDisplay[0].clicked === false &&
            props.currentSpecialty[0] &&
            props.currentSpecialty[0].clicked
          ? displayInstructions
          : props.currentCamera[0] && props.currentCamera[0].clicked === false
          ? cameraMonitorSpecialtyInstructions
          : props.currentSpecialty[0] &&
            props.currentSpecialty[0].clicked &&
            props.currentDisplay[0] &&
            props.currentDisplay[0].clicked === false
          ? displaySpecialtyInstructions
          : props.currentSpecialty[0] && props.currentSpecialty[0].clicked
          ? null
          : props.currentDisplay[0] && props.currentDisplay[0].clicked
          ? specialtyInstructions
          : props.currentCamera[0] && props.currentCamera[0].clicked
          ? displaySpecialtyInstructions
          : cameraMonitorSpecialtyInstructions}
      </div>
    </div>
  );
};

export default SettingsInstructions;
