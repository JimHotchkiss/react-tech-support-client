import React, { useState } from "react";
import "./consoleRow.css";

const ConsoleRow = () => {
  const [ccus, setCcus] = useState([
    {
      name: "1688",
      open: false
    },
    {
      name: "1588",
      open: false
    },
    {
      name: "Precision",
      open: false
    },
    {
      name: "1488",
      open: false
    },
    {
      name: "1288",
      open: false
    },
    {
      name: "1188",
      open: false
    }
  ]);

  // Toggle function
  const toggleDisplay = index => {
    setCcus(
      ccus.map((camera, i) => {
        if (i === index) {
          camera.open = !camera.open;
        } else {
          camera.open = false;
        }
        return camera;
      })
    );
  };
  const cameraList = ccus.map((camera, index) => {
    return (
      <div key={index}>
        <div
          index={index}
          key={index}
          className="li-icon-div"
          onClick={() => toggleDisplay(index)}
        >
          <div className="console-li-div">
            <li className="console-li-element">
              <a index={index} onClick={() => toggleDisplay(index)} href="#">
                {camera.name}
              </a>
            </li>
          </div>

          <a href="#">
            <div className="expand-icon-div"></div>
          </a>
        </div>
        <div className={"show-display " + (camera.open ? "open" : "")}>
          <p>
            lLucas ipsum dolor sit amet qui-gon padmé moff chewbacca darth
            chewbacca bothan organa mandalorians jinn. Jade solo secura jade
            darth gonk calamari darth sidious. Wedge obi-wan organa grievous
            mandalorians vader. Ben leia coruscant fisto mandalorians kessel
            mandalore darth windu. Mon skywalker grievous organa. Organa
            dantooine owen mon secura han luke wampa ventress. Ventress organa
            solo leia. Mandalore amidala binks hutt. Sith kit mon yavin antilles
            obi-wan. Qui-gonn chewbacca jade ahsoka hutt luke jade anakin.
          </p>
          {/* This will need to be a Monitor component */}
        </div>
      </div>
    );
  });
  return (
    <div className="console-row-div">
      <ul className="console-row-ul">{cameraList}</ul>
    </div>
  );
};

export default ConsoleRow;
