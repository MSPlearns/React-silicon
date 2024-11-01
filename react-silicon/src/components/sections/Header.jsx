import React, { useEffect, useState } from "react";
import "./header.css";
import DarkModeSwitch from "../others/DarkModeSwitch";
import NavLogo from "../others/NavLogo";
import HamburgerMenu from "../others/HamburgerMenu";
import NavBar from "../others/NavBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("Toggling menu");
    setShowMenu(!showMenu);
    console.log("Menu state:", !showMenu);
  };

  ///This code section was generated with chat GPT,
  // I was struggling to close the menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1400) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  ///End of generated code

  return (
    <header id="header">
      <div className="container">
        <NavLogo />

        <NavBar showMenu={showMenu} toggleMenu={toggleMenu} />

        <DarkModeSwitch />

        <div className="desktop">
          <a href="#" id="auth-signin" className="plain-link">
            <span className="btn btn-primary shape-rectangular btn-shadow-out">
              <span className="fa-light fa-user-large"></span>
              <span>Sign in / up</span>{" "}
            </span>
          </a>
        </div>
        <HamburgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
