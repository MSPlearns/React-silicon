import React, { useState } from "react";
import bellIcon from "/src/assets/images/subscribe-bell-notification-icon.svg";
import "./subscribe.css";

const Subscribe = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        [name]: "**This field is required",
      }));
    } else {
      setError((prevError) => ({ ...prevError, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = formData.email;

    if (value.trim() === "") {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing to our newletter!");
    }
  };

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

          <form className="form-subscribe" onSubmit={handleSubmit} noValidate>
            <input
              name="email"
              id="emailsub"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
          <span className="form-error">{error.email && error.email}</span>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

//ToDo for VG

//To be able to reuse the form in the Contact page:::::
//Form into a separate component,
//Email input into a separate component,
//Handle change and submit in form, pass down with props
//Add validation for input with regex

//To send form data to the API::::::
//Make handleSubmit = async (e)
//Add a fetch request to the API wirh the form data
//add a new state "submitted" to show a message when the form is submitted -> as a new render?
//Change error message if the fetch request fails

//For myself: Fix how the error span position is styled D:
