import React, { useState } from "react";
import NavBarLink from "./NavBarLink";

const NavBar = ({ showMenu, toggleMenu }) => {
  console.log("NavBar showMenu prop:", showMenu);
  return (
    <div className={`desktop ${showMenu ? "show" : ""}`}>
      <nav className="nav-bar">
        <NavBarLink
          linkName="Features"
          url="#features"
          toggleMenu={toggleMenu}
        />
        <NavBarLink linkName="Contact" url="#" toggleMenu={toggleMenu} />
        <NavBarLink linkName="FAQ" url="#faq" toggleMenu={toggleMenu} />
      </nav>
    </div>
  );
};

export default NavBar;
