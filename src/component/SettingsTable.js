import React from "react";
import "./settingsTable.css";
// import SettingsTableBanner from "./SettingsTableBanner";
const SettingsTable = (props) => {
  return (
    <div className="tables-div">
      <table className="camera-table">
        <thread>
          <tr className="camera-banner">
            <th className="camera-title">
              CCU <p className="camera-text">1688</p>
            </th>
            <th className="specialty-title">
              SPECIALTY<p className="specialty-text">Lap 1</p>
            </th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>Shutter Mode</td>
            <td>Auto</td>
          </tr>
          <tr>
            <td>Shutter Level</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Photometry Mode</td>
            <td>Photometry</td>
          </tr>
          <tr>
            <td>Photometry Peak/Avg</td>
            <td>2</td>
          </tr>
          <tr>
            <td>S Gamma</td>
            <td>3</td>
          </tr>
          <tr>
            <td>BG Gamma</td>
            <td>4</td>
          </tr>
          <tr>
            <td>MPED</td>
            <td>0</td>
          </tr>
          <tr>
            <td>BG Point</td>
            <td>4</td>
          </tr>
          <tr>
            <td>R Knee Slope</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>

      <table className="display-table">
        <thread>
          <tr className="display-banner">
            <th className="display-title">
              DISPLAY <p className="display-text">VisionPro</p>
            </th>
            <th className="specialty-title">
              SPECIALTY<p className="specialty-text">Lap 1</p>
            </th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>Red</td>
            <td>-35</td>
          </tr>
          8
          <tr>
            <td>Green</td>
            <td></td>
          </tr>
          <tr>
            <td>Blue</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Gamma</td>
            <td>1.5</td>
          </tr>
          <tr>
            <td>Brightness</td>
            <td>45</td>
          </tr>
          <tr>
            <td>Contrast</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Sharpness</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SettingsTable;
