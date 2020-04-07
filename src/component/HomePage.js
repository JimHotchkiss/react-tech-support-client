import React, { useState } from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import ConsoleTab from "./ConsoleTab";
import SettingsWindow from "./SettingsWindow";
import "./home.css";

const HomePage = () => {
  // Hooks
  const [consoles, setConsoles] = useState([]);
  const [cameras, setCameras] = useState([
    {
      name: "1688",
      open: false,
    },
    {
      name: "1588",
      open: false,
    },
    {
      name: "Precision",
      open: false,
    },
    {
      name: "1488",
      open: false,
    },
    {
      name: "1288",
      open: false,
    },
    {
      name: "1188",
      open: false,
    },
  ]);

  const [monitors, setsMonitor] = useState([
    {
      name: "4k",
      clicked: false,
    },
    {
      name: "VisionPro",
      clicked: false,
    },
    {
      name: "HDTV Wise",
      clicked: false,
    },
  ]);

  // Specialty Hook
  const [sixteenSpecialties, setSixteenSpecialties] = useState([
    {
      name: "Lap 1",
      clicked: false,
    },
    {
      name: "Lap 2",
      clicked: false,
    },
    {
      name: "Lap Storz",
      clicked: false,
    },
    {
      name: "Arthro 1",
      clicked: false,
    },
    {
      name: "Arthro 2",
      clicked: false,
    },
    {
      name: "ENT 1",
      clicked: false,
    },
    {
      name: "ENT 2",
      clicked: false,
    },
    {
      name: "Flexiscope",
      clicked: false,
    },
    {
      name: "Cysto",
      clicked: false,
    },
    {
      name: "Laser",
      clicked: false,
    },
    {
      name: "Hysto",
      clicked: false,
    },
    {
      name: "Microscope",
      clicked: false,
    },
    {
      name: "Olympus GI",
      clicked: false,
    },
    {
      name: "Vein Harvest",
      clicked: false,
    },
  ]);
  // Toggle Specialty
  const toggleSpecialty = (index) => {
    setSixteenSpecialties(
      sixteenSpecialties.map((specialty, i) => {
        if (i === index && consoles.length !== 0) {
          specialty.clicked = !specialty.clicked;
        } else {
          specialty.clicked = false;
        }
        updateSelection(index);
        return specialty;
      })
    );
  };

  // Toggle camera
  const toggleCamera = (index) => {
    setCameras(
      cameras.map((camera, i) => {
        console.log(camera, i, index);
        if (i === index) {
          camera.open = !camera.open;
        } else {
          camera.open = false;
        }
        updateSelection(index);
        return camera;
      })
    );
  };

  const toggleDisplay = (index) => {
    setsMonitor(
      monitors.map((monitor, i) => {
        if (i === index && consoles.length !== 0) {
          monitor.clicked = !monitor.clicked;
        } else {
          monitor.clicked = false;
        }
        updateSelection(index);
        return monitor;
      })
    );
  };

  const updateSelection = (index) => {
    console.log(cameras[index]);
    if (
      consoles[2] &&
      consoles[1] &&
      consoles[0].open === false &&
      cameras[index] &&
      cameras[index].open
    ) {
      console.log("inside A");
      const currentConsoles = [...consoles];
      currentConsoles.splice(0, 1, cameras[index]);
      setConsoles(currentConsoles);
    } else if (
      consoles[0] &&
      consoles[1] &&
      consoles[2] &&
      consoles[0].open === false &&
      cameras[index].open === false
    ) {
      console.log("inside B", cameras[index].open);
      const displayToggle = consoles[1];
      displayToggle.clicked = false;
      const specialtyToggle = consoles[2];
      specialtyToggle.clicked = false;
      const currentConsoles = [];
      setConsoles(currentConsoles);
    } else if (
      consoles[0] &&
      consoles[1] &&
      sixteenSpecialties[index] &&
      sixteenSpecialties[index].clicked
    ) {
      console.log("inside K", sixteenSpecialties[index]);
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 1, sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (
      consoles[2] &&
      consoles[2].clicked === false &&
      sixteenSpecialties[index].clicked
    ) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 1, sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (consoles[2] && consoles[2].clicked === false) {
      console.log("inside H");
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 1);
      setConsoles(currentConsoles);
    } else if (consoles[0] && consoles[1] && consoles[2] && !consoles[0].open) {
      console.log("inside F");
      const displayToggle = consoles[1];
      displayToggle.clicked = false;
      const specialtyToggle = consoles[2];
      specialtyToggle.clicked = false;
      const currentConsoles = [];
      setConsoles(currentConsoles);
    } else if (consoles[2] && consoles[1] === "-") {
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, monitors[index]);
      setConsoles(currentConsoles);
    } else if (consoles[2] && consoles[1].clicked === false) {
      console.log("inside M");
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, "-");
      setConsoles(currentConsoles);
    } else if (consoles[2]) {
      console.log("inside P");
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 1, sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (consoles[1] && sixteenSpecialties[index].clicked) {
      const currentConsoles = [...consoles];
      currentConsoles.push(sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (consoles.length === 0 && cameras[index].clicked) {
      console.log("inside C");
      const currentConsoles = [...consoles, cameras[index]];
      setConsoles(currentConsoles);
    } else if (consoles.length === 0 && cameras[index].clicked) {
      console.log("inside D");
      const currentConsoles = [...consoles, cameras[index]];
      setConsoles(currentConsoles);
    } else if (
      consoles[0] &&
      consoles[1] &&
      cameras[index] &&
      cameras[index].open
    ) {
      console.log("inside E");
      const displayToggle = consoles[1];
      displayToggle.clicked = false;
      const currentConsoles = [];
      currentConsoles.push(cameras[index]);
      setConsoles(currentConsoles);
    } else if (
      consoles[0] &&
      consoles[1] &&
      consoles[1].clicked === false &&
      monitors[index] &&
      monitors[index].clicked === false
    ) {
      console.log("inside L");
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1);
      setConsoles(currentConsoles);
    } else if (consoles[0] && consoles[0].open) {
      console.log("inside G");
      const currentConsoles = [...consoles, monitors[index]];
      setConsoles(currentConsoles);
    } else if (
      consoles[0] &&
      consoles[1] &&
      monitors[index] &&
      monitors[index].clicked
    ) {
      console.log("inside Q");
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, monitors[index]);
      setConsoles(currentConsoles);
    } else if (consoles[0] && monitors[index] && monitors[index].clicked) {
      console.log("inside O");
      const currentConsoles = [...consoles];
      currentConsoles.push(monitors[index]);
      setConsoles(currentConsoles);
    } else if (consoles[1] && monitors[index] && !monitors[index].clicked) {
      console.log("inside N");
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 2);
      setConsoles(currentConsoles);
    } else if (consoles[0] && cameras[index] && cameras[index].open) {
      console.log("inside J", consoles);
      const currentConsoles = [];
      currentConsoles.push(cameras[index]);
      setConsoles(currentConsoles);
    } else {
      console.log("inside I", cameras[index]);
      const currentConsoles = [...consoles];
      currentConsoles.splice(0, 1, cameras[index]);
      setConsoles(currentConsoles);
    }
  };

  return (
    <div className="home-page-div">
      <Banner />
      <div className="navbar-console-div">
        <NavBar />
        <ConsoleTab
          consoles={consoles}
          cameras={cameras}
          toggleCamera={toggleCamera}
          toggleDisplay={toggleDisplay}
          monitors={monitors}
        />
      </div>
      <SettingsWindow
        toggleSpecialty={toggleSpecialty}
        sixteenSpecialties={sixteenSpecialties}
        consoles={consoles}
        monitors={monitors}
      />
    </div>
  );
};

export default HomePage;
