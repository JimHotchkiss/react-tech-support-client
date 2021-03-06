import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-div">
      <a href="#">
        <div className="round-div">
          <div className="home-icon"></div>
        </div>
        <div className="printer-icon"></div>
      </a>
    </div>
  );
};

export default NavBar;
