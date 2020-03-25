import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import ConsoleTab from "./ConsoleTab";
import SettingsWindow from "./SettingsWindow";

const HomePage = () => {
  return (
    <div className="home-page-div">
      <Banner />
      <NavBar />
      <ConsoleTab />
      <SettingsWindow />
    </div>
  );
};

export default HomePage;
