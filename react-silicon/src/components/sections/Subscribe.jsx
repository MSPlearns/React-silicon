import React from "react";
import bellIcon from "/src/assets/images/subscribe-bell-notification-icon.svg";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container">
        <div className="content">
          <div className="side">
            <img className="image" src={bellIcon} alt="Bell icon" />
            <h2 className="headline">
              Subscribe to our newsletter{" "}
              <span className="inline-desktop">
                {" "}
                to stay informed about latest updates
              </span>
            </h2>
          </div>

          <form className="form-subscribe">
            <input
              name="email"
              id="emailsub"
              type="email"
              required
              placeholder="
         &#xf0e0;   Your email"
            />
            <input
              className="btn btn-primary"
              id="btn-submit-subscribe"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
