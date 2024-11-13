import React, { useState } from "react";
import NavBarLink from "./NavBarLink";

const NavBar = ({ showMenu, closeMenu }) => {
  return (
    <div className={`desktop ${showMenu ? "show" : ""}`}>
      <nav className="nav-bar">
        <NavBarLink linkName="Features" url="#features" closeMenu={closeMenu} />
        <NavBarLink linkName="Contact" url="#" closeMenu={closeMenu} />
        <NavBarLink linkName="FAQ" url="#faq" closeMenu={closeMenu} />
      </nav>
    </div>
  );
};

export default NavBar;
