import React, { useEffect, useState } from "react";
import "./DarkModeSwitch.css";

//ToDo for VG:
//- Add a context to manage the dark mode state across pages. Apparently is the usual way of doing it?? (why?)

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    window.dispatchEvent(new Event("themeChange"));
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className="btn-toggle-switch">
      <div className="tablet desktop">
        <span id="toggle-label">Dark mode</span>
      </div>
      <label htmlFor="darkmode-switch" className="toggle">
        <input
          id="darkmode-switch"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
