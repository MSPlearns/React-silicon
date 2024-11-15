import React from "react";
import { Link } from "react-router-dom";
import heroPhoneExample from "/src/assets/images/hero-phone-example.svg";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="card headline">
            <h1>Manage All Your Money in One App</h1>
          </div>
          <div className="content">
            <div className="card text">
              <p>We offer you a new generation of the mobile banking.</p>
              <p>Save, spend & manage money in your pocket.</p>
            </div>

            <div className="card download-app">
              <a
                className="plain-link btn-market"
                id="AppStore-btn"
                href="https://www.apple.com/app-store/"
                target="_blank"
              >
                <img
                  className="app-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                  alt="Apple logo"
                />
                <span className="app-store">App Store</span>
              </a>

              <a
                className="plain-link btn-market"
                id="GooglePlay-btn"
                href="https://play.google.com/"
                target="_blank"
              >
                <img
                  className="app-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                  alt="Google Play logo"
                />
                <span className="google-play">Google Play</span>
              </a>
            </div>

            <div className="card discover-more">
              <Link to="#features">
                <button className="btn plain-link icon-background shape-round">
                  <i
                    name="icon"
                    className=" fa fa-sharp fa-solid fa-angle-down"
                  ></i>
                </button>
                <span>Discover more</span>
              </Link>
            </div>
          </div>

          <div className="desktop tablet card image">
            <img
              src={heroPhoneExample}
              alt="Phone displaying the Silicon app interface."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
