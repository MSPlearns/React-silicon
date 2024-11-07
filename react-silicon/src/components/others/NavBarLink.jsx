import React from "react";

const NavBarLink = (props) => {
  return (
    <a id="main-menu" className="plain-link nav-link" href={props.url}>
      {props.linkName}
    </a>
  );
};

export default NavBarLink;
