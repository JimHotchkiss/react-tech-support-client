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

  // Select Specialty
  const selectSpecialty = (index) => {
    setSixteenSpecialties(
      sixteenSpecialties.map((specialty, i) => {
        if (i === index && consoles.length != 0) {
          specialty.clicked = !specialty.clicked;
        } else {
          specialty.clicked = false;
        }
        return specialty;
      })
    );
  };

  // Toggle function
  const toggleOpenDisplay = (index) => {
    setCameras(
      cameras.map((camera, i) => {
        if (i === index) {
          camera.open = !camera.open;
        } else {
          camera.open = false;
        }
        return camera;
      })
    );
  };

  const toggleDisplayButtonColor = (index) => {
    setsMonitor(
      monitors.map((monitor, i) => {
        if (i === index && consoles.length != 0) {
          monitor.clicked = !monitor.clicked;
        } else {
          monitor.clicked = false;
        }
        return monitor;
      })
    );
  };

  const updateConsoles = (index) => {
    if (consoles.length === 0) {
      const currentConsoles = [...consoles, cameras[index]];
      setConsoles(currentConsoles);
    } else if (consoles[1] && !cameras[index].open) {
      const currentConsoles = [];
      setConsoles(currentConsoles);
    } else if (consoles[1]) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(0, 2, cameras[index]);
      setConsoles(currentConsoles);
    } else {
      const currentConsoles = [...consoles];
      currentConsoles.splice(0, 1, cameras[index]);
      setConsoles(currentConsoles);
    }
  };
  // Update Monitor
  const selectDisplay = (index) => {
    if (consoles[1] && consoles[2]) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, "-");
      setConsoles(currentConsoles);
    } else if (consoles[1]) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, monitors[index]);
      setConsoles(currentConsoles);
    } else {
      const currentConsoles = [...consoles, monitors[index]];
      setConsoles(currentConsoles);
    }
  };

  // Update Specialty
  const updateSpecialty = (index) => {
    console.log("inside updatespecialty", sixteenSpecialties[index].clicked);
    if (consoles[2] && sixteenSpecialties[index].clicked === true) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 2, sixteenSpecialties[index]);
      setConsoles(currentConsoles);
    } else if (consoles[2] && sixteenSpecialties[index].clicked === false) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(2, 1);
      setConsoles(currentConsoles);
    } else {
      const currentConsoles = [...consoles, sixteenSpecialties[index]];
      setConsoles(currentConsoles);
    }
  };

  // Current Specialty
  const updateCurrentSpecialty = (index) => {
    sixteenSpecialties.map((specialty, i) => {
      if (i === index) {
        let usersSpecialty = currentSpecialty;
        usersSpecialty = sixteenSpecialties[index];
        setCurrentSpecialty(usersSpecialty);
      }
    });
  };

  return (
    <div className="home-page-div">
      <Banner />
      <div className="navbar-console-div">
        <NavBar />
        <ConsoleTab
          consoles={consoles}
          updateConsoles={updateConsoles}
          cameras={cameras}
          toggleOpenDisplay={toggleOpenDisplay}
          toggleDisplayButtonColor={toggleDisplayButtonColor}
          selectDisplay={selectDisplay}
          monitors={monitors}
        />
      </div>
      <SettingsWindow
        selectSpecialty={selectSpecialty}
        sixteenSpecialties={sixteenSpecialties}
        consoles={consoles}
        updateSpecialty={updateSpecialty}
        updateCurrentSpecialty={updateCurrentSpecialty}
        currentSpecialty={currentSpecialty}
      />
    </div>
  );
};

export default HomePage;
