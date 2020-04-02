import React, { useState } from "react";
import "./specialties.css";

const Specialties = props => {
  const [sixteenSpecialties, setSixteenSpecialties] = useState([
    {
      name: "Lap 1"
    },
    {
      name: "Lap 2"
    },
    {
      name: "Lap Storz"
    },
    {
      name: "Arthro 1"
    },
    {
      name: "Arthro 2"
    },
    {
      name: "ENT 1"
    },
    {
      name: "ENT 2"
    },
    {
      name: "Flexiscope"
    },
    {
      name: "Cysto"
    },
    {
      name: "Laser"
    },
    {
      name: "Hysto"
    },
    {
      name: "Microscope"
    },
    {
      name: "Olympus GI"
    },
    {
      name: "Vein Harvest"
    }
  ]);

  const sixteenSpecialtiesList = sixteenSpecialties.map((specialty, index) => {
    return (
      <a href="#" key={index}>
        <div className="specialty">
          <p className="specialty-text">{specialty.name}</p>
        </div>
      </a>
    );
  });
  return (
    <div className="specialty-component-div">
      <div className="specialty-title-div">
        <p className="specialty-title-tag">Specialty:</p>
      </div>
      <div className="specialty-list-div">{sixteenSpecialtiesList}</div>
    </div>
  );
};

export default Specialties;
