import React, { useState } from "react";

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <button
      className="hamburger-menu mobile tablet"
      aria-label="Menu"
      onClick={toggleMenu}
    >
      <span className="fa-regular fa-bars fa-2x"></span>
    </button>
  );
};

export default HamburgerMenu;
