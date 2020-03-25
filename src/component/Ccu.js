import React from "react";

const Ccu = () => {
  const cameras = ["1688", "1588", "Precision", "1488", "1288", "1188"];
  const cameraList = cameras.map(camera => {
    return <li className="ccu-li-element">{camera}</li>;
  });

  return (
    <div className="ccu-div">
      <div className="ccu-title-div"></div>
      <ul ccu-ul-element>{cameraList}</ul>
    </div>
  );
};

export default Ccu;
