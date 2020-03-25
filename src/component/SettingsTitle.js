import React from "react";

const SettingsTitle = () => {
  return (
    <div className="settings-title-div">
      <h3>Money Settings</h3>

      <div className="info-div">
        <div className="settings-info-icon-div"></div>
        <div className="info-text-div">
          <p className="info-p-tag">
            Select a CCU, monitor and specialty to display settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsTitle;
