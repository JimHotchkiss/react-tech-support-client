import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import ConsoleTab from "./ConsoleTab";

const HomePage = () => {
  return (
    <div className="home-page-div">
      <Banner />
      <NavBar />
      <ConsoleTab />
    </div>
  );
};

export default HomePage;
