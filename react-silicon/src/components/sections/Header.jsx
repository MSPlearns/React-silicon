import React, { useEffect, useState } from "react";
import "./header.css";
import DarkModeSwitch from "../others/DarkModeSwitch";
import NavLogo from "../others/NavLogo";
import HamburgerMenu from "../others/HamburgerMenu";
import NavBar from "../others/NavBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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

        <NavBar showMenu={showMenu} closeMenu={closeMenu} />

        <DarkModeSwitch />

        <div className="desktop">
          <button
            id="auth-signin"
            className="btn btn-primary shape-rectangular btn-shadow-out"
          >
            <span className="fa-light fa-user-large"></span>
            <span>Sign in / up</span>{" "}
          </button>
        </div>
        <HamburgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
