import React from "react";

const Specialties = (props) => {
  const specialtiesList = props.specialties.map((specialty, index) => {
    return (
      <a href="#" key={index}>
        <div
          index={index}
          className={"specialty " + (specialty.clicked ? "clicked" : "")}
          onClick={props.handleSpecialty.bind(this, index)}
        >
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
      <div className="specialty-list-div">{specialtiesList}</div>
    </div>
  );
};

export default Specialties;
