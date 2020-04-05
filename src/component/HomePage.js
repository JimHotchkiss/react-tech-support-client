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

  const [currentSpecialty, setCurrentSpecialty] = useState(null);

  // Toggle Specialty
  const toggleSpecialty = (index) => {
    setSixteenSpecialties(
      sixteenSpecialties.map((specialty, i) => {
        if (i === index && consoles.length != 0) {
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
        if (i === index && consoles.length != 0) {
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
    console.log("1:", consoles);
    if (consoles[2] && consoles[2].clicked === false) {
      console.log("2:", consoles);
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 1, sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (consoles[1] && sixteenSpecialties[index].clicked) {
      const currentConsoles = [...consoles];
      currentConsoles.push(sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (consoles.length === 0 && cameras[index].clicked) {
      const currentConsoles = [...consoles, cameras[index]];
      setConsoles(currentConsoles);
    } else if (consoles.length === 0) {
      const currentConsoles = [...consoles, cameras[index]];
      setConsoles(currentConsoles);
    } else if (consoles[0] && consoles[1] && !consoles[0].open) {
      const displayToggle = consoles[1];
      displayToggle.clicked = false;
      const currentConsoles = [];
      setConsoles(currentConsoles);
    } else if (
      consoles[0] &&
      consoles[1] &&
      monitors[index] &&
      monitors[index].clicked
    ) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, monitors[index]);
      setConsoles(currentConsoles);
    } else if (consoles[0] && monitors[index] && monitors[index].clicked) {
      const currentConsoles = [...consoles];
      currentConsoles.push(monitors[index]);
      setConsoles(currentConsoles);
    } else if (consoles[1] && monitors[index] && !monitors[index].clicked) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 2);
      setConsoles(currentConsoles);
    } else {
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
        currentSpecialty={currentSpecialty}
      />
    </div>
  );
};

export default HomePage;
