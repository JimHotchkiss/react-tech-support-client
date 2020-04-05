import React, { useState } from "react";
import "./specialties.css";

const Specialties = (props) => {
  const sixteenSpecialtiesList = props.sixteenSpecialties.map(
    (specialty, index) => {
      return (
        <a href="#" key={index}>
          <div
            className={"specialty " + (specialty.clicked ? "clicked" : "")}
            onClick={() => {
              props.toggleSpecialty(index);
            }}
          >
            <p className="specialty-text">{specialty.name}</p>
          </div>
        </a>
      );
    }
  );
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
