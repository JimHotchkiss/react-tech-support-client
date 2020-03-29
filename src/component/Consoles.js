import React, { useState } from "react";
import "./consoles.css";
import Cameras from "./Cameras";

const Consoles = () => {
  const [consoles, setConsoles] = useState([]);
  return (
    <div>
      <Cameras consoles={consoles} />
    </div>
  );
};

export default Consoles;
