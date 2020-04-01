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

  const [monitors, setsMonitor] = useState([
    {
      name: "4k",
      open: false
    },
    {
      name: "VisionPro",
      open: false
    },
    {
      name: "HDTV Wise",
      open: false
    }
  ]);

  // Toggle function
  const toggleOpenDispaly = index => {
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

  const updateConsoles = index => {
    if (consoles.length === 0) {
      const currentConsoles = [...consoles, cameras[index]];
      setConsoles(currentConsoles);
    } else if (consoles[1] && !cameras[index].open) {
      console.log("inside:", cameras[index].open);
      const currentConsoles = [];
      setConsoles(currentConsoles);
    } else if (consoles[1]) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(0, 2, cameras[index]);
      setConsoles(currentConsoles);
    } else {
      console.log(cameras[index].open);
      const currentConsoles = [...consoles];
      currentConsoles.splice(0, 1, cameras[index]);
      setConsoles(currentConsoles);
    }
  };
  // Update Monitors
  const selectDisplay = index => {
    if (consoles[1]) {
      const currentConsoles = [...consoles];
      currentConsoles.splice(1, 1, monitors[index]);
      setConsoles(currentConsoles);
    } else {
      const currentConsoles = [...consoles, monitors[index]];
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
          updateConsoles={updateConsoles}
          cameras={cameras}
          toggleOpenDispaly={toggleOpenDispaly}
          selectDisplay={selectDisplay}
          monitors={monitors}
        />
      </div>
      <SettingsWindow consoles={consoles} />
    </div>
  );
};

export default HomePage;
