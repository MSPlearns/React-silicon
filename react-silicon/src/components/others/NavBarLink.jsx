import React from "react";

const NavBarLink = ({ url, linkName, closeMenu }) => {
  return (
    <a
      id="main-menu"
      className="plain-link nav-link"
      href={url}
      onClick={closeMenu}
    >
      {linkName}
    </a>
  );
};

export default NavBarLink;
