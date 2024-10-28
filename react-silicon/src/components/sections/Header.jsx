import React from "react";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <a href="index.html">
            <img
              src="/logo/silicon-logo-light.svg"
              alt="Silicon company logo"
            />
          </a>

          <div className="desktop">
            <nav className="nav-bar">
              <a
                id="main-menu"
                className="plain-link nav-link"
                href="#features"
              >
                Features
              </a>
            </nav>
          </div>

          <div className="btn-toggle-switch">
            <div className="tablet desktop">
              <span id="toggle-label">Dark mode</span>
            </div>
            <label htmlFor="darkmode-switch" className="toggle">
              <input id="darkmode-switch" type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
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
    </>
  );
};

export default Header;
