import React from "react";
import { Link } from "react-router-dom";

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <Link to={link} className="icon icon-background shape-square">
      <span className={`text-gradient ${icon}`}></span>
    </Link>
  );
};

export default SocialMediaIcon;
