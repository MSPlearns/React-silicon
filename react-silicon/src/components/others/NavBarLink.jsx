import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLink = ({ url, linkName, closeMenu }) => {
  return (
    <NavLink
      id="main-menu"
      className="plain-link nav-link"
      to={url}
      onClick={closeMenu}
    >
      {linkName}
    </NavLink>
  );
};

export default NavBarLink;
