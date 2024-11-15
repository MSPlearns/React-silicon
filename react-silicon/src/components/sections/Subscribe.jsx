import React, { useState } from "react";
import bellIcon from "/src/assets/images/subscribe-bell-notification-icon.svg";
import "./subscribe.css";

const Subscribe = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(null);

  const validateForm = (name, value) => {
    setIsValid(true);
    const newError = {};

    if (value.trim() === "") {
      setIsValid(false);
      newError[name] = "The email field is required.";
    } else if (
      !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/.test(value)
    ) {
      setIsValid(false);
      newError[name] = "The email field must be a valid email address.";
    }

    setError(newError);

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateForm(name, value);
  };

  const handleReturnForm = () => {
    setSubmitted(false);
    setIsValid(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm("email", formData.email)) {
      alert(`Couldn't submit the form. ${error.email}`);
      return;
    }

    const res = await fetch(
      `https://win24-assignment.azurewebsites.net/api/forms/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      setSubmitted(true);
      setFormData({ email: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <section id="subscribe">
        <div className="container">
          <div className="content">
            <div className="side">
              <img className="image" src={bellIcon} alt="Bell icon" />
              <h2 className="headline">
                Thank you for subscribing to our newsletter!
              </h2>
            </div>

            <button
              className="btn btn-primary shape-rectangular"
              onClick={handleReturnForm}
            >
              Return
            </button>
          </div>
        </div>
      </section>
    );
  }

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
              className={isValid === null ? "" : isValid ? "valid" : "invalid"}
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
          <span
            className={`form-message ${
              isValid === null ? "" : isValid ? "valid" : "invalid"
            }`}
          >
            {isValid === null ? null : isValid ? (
              <i className="fa-solid fa-circle-check"> </i>
            ) : (
              <i className="fa-solid fa-circle-exclamation"> </i>
            )}
            {error.email && error.email}
          </span>
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
