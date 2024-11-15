import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  const [logoSrc, setLogoSrc] = useState("/logo/silicon-logo-light.svg");
  const updateLogo = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setLogoSrc("/logo/silicon-logo-dark.svg");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setLogoSrc("/logo/silicon-logo-light.svg");
    }
  };

  //I got help from chatGPT to get the logo to update whenever the theme changes - "eventListener" and "dispatchEvent"
  useEffect(() => {
    updateLogo();
    window.addEventListener("themeChange", updateLogo);
    return () => {
      window.removeEventListener("themeChange", updateLogo);
    };
  }, []);

  return (
    <Link to="/">
      <img src={logoSrc} alt="Silicon company logo" />
    </Link>
  );
};

export default NavLogo;
