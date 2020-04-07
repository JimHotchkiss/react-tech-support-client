import React, { useState } from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import ConsoleTab from "./ConsoleTab";
import SettingsWindow from "./SettingsWindow";
import "./home.css";

const HomePage = () => {
  // Hooks

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
  const handleSpecialty = (index) => {
    setSixteenSpecialties(
      sixteenSpecialties.map((specialty, i) => {
        if (i === index) {
          specialty.clicked = !specialty.clicked;
        } else {
          specialty.clicked = false;
        }
        // updateSelection(index);
        return specialty;
      })
    );
  };

  // Toggle camera
  const handleCamera = (index) => {
    setCameras(
      cameras.map((camera, i) => {
        console.log(camera, i, index);
        if (i === index) {
          camera.open = !camera.open;
        } else {
          camera.open = false;
        }
        // updateSelection(index);
        return camera;
      })
    );
  };

  const handleDisplay = (index) => {
    setsMonitor(
      monitors.map((monitor, i) => {
        if (i === index) {
          monitor.clicked = !monitor.clicked;
        } else {
          monitor.clicked = false;
        }
        updateDisplay(index);
        return monitor;
      })
    );
  };

  const updateDisplay = (index) => {
    console.log(monitors);
  };
  return (
    <div className="home-page-div">
      <Banner />
      <div className="navbar-console-div">
        <NavBar />
        <ConsoleTab
          cameras={cameras}
          handleCamera={handleCamera}
          handleDisplay={handleDisplay}
          monitors={monitors}
        />
      </div>
      <SettingsWindow
        handleSpecialty={handleSpecialty}
        sixteenSpecialties={sixteenSpecialties}
        monitors={monitors}
      />
    </div>
  );
};

export default HomePage;
