import React, { useState } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import ProfileMenu from "./ProfileMenu";
import Layout from "../../pages/Layout"

const Navbar = ({ sideBarWidth, handleDrawerToggle }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleDarkMode = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (

      <header className={`z-10 backdrop-blur-md md:backdrop-blur-md bg-white/30 md:bg-white/30 md:mx-0 md:my-0  my-3 rounded-3xl mx-3 fixed bg-white md:bg-white  md:w-full w-full bg-background-paper  dark:bg-black ${currentTheme === "dark" ? "dark:bg-gray-900" : ""} text-text-primary ${currentTheme === "dark" ? "dark:text-white" : ""} border-b border-divider`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDrawerToggle}
              className="ml-4 md:hidden text-2xl text-text-primary dark:text-white"
            >
              <FiMenu />
            </button>
            <h1 className="text-lg sm:text-xl font-semibold md:block">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-2xl text-text-primary dark:text-white">
              <span className="relative">
                <BsBell />
                <span className="absolute top-0 right-0 bg-error w-2 h-2 rounded-full"></span>
              </span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-2xl text-text-primary dark:text-white"
            >
              {currentTheme === "light" ? <FiMoon /> : <FiSun />}
            </button>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
