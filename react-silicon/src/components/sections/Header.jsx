import React, { useEffect, useState } from "react";
import DarkModeSwitch from "../others/DarkModeSwitch";
import NavLogo from "../others/NavLogo";
import NavBarLink from "../others/NavBarLink";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <NavLogo />

        <div className="desktop">
          <nav className="nav-bar">
            <NavBarLink linkName="Features" url="#features" />
            <NavBarLink linkName="Contact" url="#" />
          </nav>
        </div>

        <DarkModeSwitch />

        <div className="desktop">
          <a href="#" id="auth-signin" className="plain-link">
            <span className="btn btn-primary shape-rectangular btn-shadow-out">
              <span className="fa-light fa-user-large"></span>
              <span>Sign in / up</span>{" "}
            </span>
          </a>
        </div>

        <button className="hamburger-menu mobile" aria-label="Menu">
          <span className="fa-regular fa-bars fa-2x"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
